import 'dart:js_interop';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:tools/barcodes/decode/models.dart';
import 'package:tools/barcodes/decode/zxing.dart';
import 'package:web/web.dart' as web;

class BarcodeResultState extends InheritedWidget {
  final List<BarcodeResult> items;

  final Function setState;
  const BarcodeResultState(
      {super.key,
      required super.child,
      required this.items,
      required this.setState});

  // 获取状态管理对象
  static BarcodeResultState? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<BarcodeResultState>();
  }

  void cleanUp() {
    for (final codeResult in items) {
      // 使用闭包替代 tear-off
      codeResult.codeImageUrl?.values
          .forEach((url) => web.URL.revokeObjectURL(url));

      // 处理 imageUrl 的清理
      if (codeResult.imageUrl != null) {
        web.URL.revokeObjectURL(codeResult.imageUrl!);
      }
    }

    items.clear();
  }

  @override
  bool updateShouldNotify(BarcodeResultState oldWidget) =>
      oldWidget.items != items;

  // 计算二维码四个顶点的最小/最大边界，并返回一个 {x, y, width, height} 的对象
  ({int height, int width, int x, int y}) _calculateCropBounds(
      Position position) {
    final points = [
      position.bottomLeft,
      position.bottomRight,
      position.topLeft,
      position.topRight,
    ];

    final xs = points.map((p) => p.x).toList();
    final ys = points.map((p) => p.y).toList();

    final x1 = xs.reduce(math.min).round();
    final x2 = xs.reduce(math.max).round();
    final y1 = ys.reduce(math.min).round();
    final y2 = ys.reduce(math.max).round();

    return (x: x1, y: y1, width: x2 - x1, height: y2 - y1);
  }

  /// 处理识别二维码
  Future<void> readBarcodesFromImageFile(web.File file) async {
    /// 1. 判断是否是图片
    if (!file.type.startsWith('image/')) {
      return;
    }

    // 2. 创建 ImageBitmap
    final imageBitmap = await web.window.createImageBitmap(file).toDart;
    // 3. 创建 OffscreenCanvas
    final web.OffscreenCanvasRenderingContext2D ctx =
        web.OffscreenCanvas(imageBitmap.width, imageBitmap.height)
                .getContext('2d', {'willReadFrequently': true}.jsify())
            as web.OffscreenCanvasRenderingContext2D;
    // 4. 将原始图片绘制到 OffscreenCanvas
    ctx.drawImage(imageBitmap, 0, 0);
    // 5. 调用 ZXing 的识别方法
    final barcodes = await readBarcodes(
      ctx.getImageData(0, 0, imageBitmap.width, imageBitmap.height),
    ).toDart;

    /// 6. 关闭 ImageBitmap, 释放资源
    imageBitmap.close();

    /// 7. 创建另外一个画板, 以绘制独立的二维码图片
    final web.OffscreenCanvasRenderingContext2D ctx2 = web.OffscreenCanvas(0, 0)
        .getContext('2d') as web.OffscreenCanvasRenderingContext2D;

    /// 8. 创建空 BarcodeResult 对象
    final BarcodeResult codeResult =
        BarcodeResult(codeList: [], codeImageUrl: {});
    // 9. 开始处理识别到的二维码
    for (int i = 0; i < barcodes.length; i++) {
      final ReadResult barcode = barcodes[i];
      final Position position = barcode.position;
      final cropBounds = _calculateCropBounds(position);
      final croppedData = await web.window
          .createImageBitmap(ctx.canvas, cropBounds.x.toJS, cropBounds.y,
              cropBounds.width, cropBounds.height)
          .toDart;
      // 调整临时 canvas 尺寸，清理并绘制新的裁剪图像
      if (ctx2.canvas.width != cropBounds.width ||
          ctx2.canvas.height != cropBounds.height) {
        ctx2.canvas.width = cropBounds.width;
        ctx2.canvas.height = cropBounds.height;
      }
      ctx2.clearRect(0, 0, cropBounds.width, cropBounds.height);
      ctx2.drawImage(croppedData, 0, 0);
      croppedData.close();

      final web.Blob file = await ctx2.canvas
          .convertToBlob(
            web.ImageEncodeOptions(quality: 0.8, type: 'image/webp'),
          )
          .toDart;
      codeResult.addBarcodeImageUrl(i, web.URL.createObjectURL(file));

      // 在主画布上绘制二维码边框和序号
      ctx
        ..beginPath()
        ..moveTo(position.topLeft.x, position.topLeft.y)
        ..lineTo(position.topRight.x, position.topRight.y)
        ..lineTo(position.bottomRight.x, position.bottomRight.y)
        ..lineTo(position.bottomLeft.x, position.bottomLeft.y)
        ..lineTo(position.topLeft.x, position.topLeft.y)
        ..strokeStyle = 'red'.toJS
        ..lineWidth = 4
        ..stroke()
        ..beginPath()
        ..arc(position.topRight.x, position.topRight.y, 12.0, 0, 2 * math.pi)
        ..fillStyle = 'red'.toJS
        ..fill()
        ..fillStyle = 'white'.toJS
        ..font = 'bold 18px sans-serif'
        ..textAlign = 'center'
        ..textBaseline = 'middle'
        ..fillText(
          '${i + 1}',
          position.topRight.x,
          position.topRight.y,
        )
        ..closePath();

      codeResult.addBarcodeList(barcode);
    }

    /// 10. 将处理完成后的图片转换为 Blob，再生成临时 URL
    final web.Blob fullImgBlob = await ctx.canvas.convertToBlob().toDart;
    codeResult.imageUrl = web.URL.createObjectURL(fullImgBlob);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    items.add(codeResult);
    setState(() {});
  }
}
