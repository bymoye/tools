import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_smart_dialog/flutter_smart_dialog.dart';
import 'package:tools/barcodes/decode/models.dart';
import 'barcode_raw_detail.dart';

class BarcodeDetail extends StatelessWidget {
  final BarcodeResult item;
  const BarcodeDetail({super.key, required this.item});

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
        color: Colors.grey[300]!.withAlpha(100),
      ),
      child: Stack(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
              child: Container(),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8),
            child: Center(
              child: Column(
                spacing: 4,
                // mainAxisAlignment: MainAxisAlignment.center,
                // crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    "解析结果",
                    style: DefaultTextStyle.of(context).style.copyWith(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                        ),
                  ),
                  Image.network(
                    item.imageUrl!,
                    height: 300,
                  ),
                  Expanded(
                    child: ListView.builder(
                      itemCount: item.codeList!.length,
                      itemBuilder: (context, index) {
                        final code = item.codeList![index];
                        return Padding(
                          padding: const EdgeInsets.symmetric(vertical: 4),
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8),
                              color: Theme.of(context).brightness ==
                                      Brightness.light
                                  ? const Color.fromARGB(144, 255, 255, 255)
                                  : const Color.fromARGB(141, 41, 31, 31),
                            ),
                            padding: const EdgeInsets.all(8),
                            child: ListTile(
                              leading: Row(
                                spacing: 2,
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Text(
                                    "${index + 1}",
                                    style: DefaultTextStyle.of(context)
                                        .style
                                        .copyWith(
                                          fontSize: 18,
                                          fontWeight: FontWeight.bold,
                                        ),
                                  ),
                                  Image.network(
                                    item.codeImageUrl![index]!,
                                    width: 50,
                                  ),
                                ],
                              ),
                              trailing: IconButton(
                                icon: const Icon(Icons.more_horiz),
                                onPressed: () {
                                  SmartDialog.show(
                                    tag: "barcode_raw_detail",
                                    animationTime:
                                        const Duration(milliseconds: 300),
                                    builder: (context) {
                                      return BarcodeRawDetail(
                                        item: code,
                                      );
                                    },
                                  );
                                },
                              ),
                              title: SelectableText(
                                code.text,
                                style: DefaultTextStyle.of(context).style,
                              ),
                              subtitle: Text(code.format.toString()),
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                  ElevatedButton(
                    onPressed: () {
                      SmartDialog.dismiss(tag: "barcode_detail");
                    },
                    child: Text("关闭"),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}
