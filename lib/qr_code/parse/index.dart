import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:flutter_dropzone/flutter_dropzone.dart';
import 'package:tools/qr_code/parse/controller.dart';
import 'package:dotted_border/dotted_border.dart';

class QrCodeParsePage extends StatelessWidget {
  const QrCodeParsePage({super.key});

  Widget mask() {
    return BackdropFilter(
      filter: ImageFilter.blur(sigmaX: 10.0, sigmaY: 10.0),
      // blendMode: BlendMode.srcOut,
      child: Container(
        color: Colors.grey.shade200.withValues(alpha: .5),
        child: DottedBorder(
          borderType: BorderType.RRect,
          radius: const Radius.circular(12),
          color: Colors.white,
          strokeWidth: 2,
          dashPattern: const [6, 6],
          borderPadding: const EdgeInsets.all(6),
          child: const Center(
            child: Text(
              "请放下文件",
              style: TextStyle(color: Colors.white, fontSize: 20),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return GetBuilder<QrCodeParseController>(
      init: QrCodeParseController(),
      builder: (QrCodeParseController controller) {
        /// 功能: 1. 拖放文件解析二维码
        return Center(
          child: Stack(
            children: [
              DropzoneView(
                operation: DragOperation.copy,
                cursor: CursorType.Default,
                onCreated: (ctrl) => controller.dropzoneController = ctrl,
                onDrop: controller.parse,
                onHover: controller.onHover,
                onLeave: () {
                  controller.isHover(false);
                },
              ),
              const Text("hello"),
              const SizedBox(height: 20),
              Text(controller.qrCode.value),
              Obx(() => controller.image.value),
              Obx(() => controller.isHover.isTrue ? mask() : const SizedBox()),
            ],
          ),
        );
      },
    );
  }
}
