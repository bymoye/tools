import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:tools/barcodes/decode/zxing.dart';
import 'package:tools/utils/json_viewer/index.dart';

class BarcodeRawDetail extends StatelessWidget {
  final ReadResult item;
  const BarcodeRawDetail({super.key, required this.item});

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return Container(
      constraints: BoxConstraints(
        maxWidth: size.width > 800 ? 800 : size.width * 0.9,
        maxHeight: size.height > 800 ? 800 : size.height * 0.9,
      ),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: Theme.of(context).brightness == Brightness.light
            ? Colors.grey[300]
            : Colors.grey[800],
      ),
      child: Padding(
        padding: const EdgeInsets.all(8),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Expanded(
              child: SingleChildScrollView(
                child: JsonViewer(
                  item.toJson(),
                ),
              ),
            ),
            ElevatedButton(
              onPressed: () {
                SmartDialog.dismiss(tag: "barcode_raw_detail");
              },
              child: Text("关闭"),
            ),
          ],
        ),
      ),
    );
  }
}
