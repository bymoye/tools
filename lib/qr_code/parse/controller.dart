import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter_dropzone/flutter_dropzone.dart';
import 'package:refreshed/refreshed.dart';
import 'package:mime/mime.dart';
// import 'package:flutter_avif/flutter_avif.dart' deferred as avif;

class QrCodeParseController extends GetxController {
  /// 二维码内容
  RxString qrCode = RxString("");

  /// 拖放文件控制器
  DropzoneViewController? dropzoneController;

  /// 解析的图片
  final Rx<Widget> image = Rx<Widget>(const SizedBox());

  final RxBool isHover = RxBool(false);

  onHover() {
    if (isHover.isTrue) {
      return;
    }
    isHover(true);
  }

  parse(dynamic ev) async {
    isHover(false);
    Uint8List? file = await dropzoneController?.getFileData(ev);

    if (file == null) {
      return;
    }

    // 判断文件类型
    String mimeType = lookupMimeType(
            await dropzoneController?.getFilename(ev) ?? '',
            headerBytes: file) ??
        "";

    /// 如果不是图片文件
    if (!mimeType.startsWith("image/")) {
      qrCode.value = "传入的文件不是图片";
      return;
    }
    // 判断是否是avif格式
    // if (mimeType == "image/avif") {
    //   // 加载avif库
    //   await avif.loadLibrary();
    //   // 解码avif图片
    //   image.value = avif.AvifImage.memory(file);
    // } else {
    // 解码普通图片
    image.value = Image.memory(file);
    // }
    qrCode.value = "解析中...";
    // qrCode.value = await QrCodeTools.parse(file);
  }
}
