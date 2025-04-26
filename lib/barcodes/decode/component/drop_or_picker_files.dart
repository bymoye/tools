import 'dart:async';
import 'dart:js_interop';

import 'package:flutter/material.dart';
import 'package:flutter_sliding_toast/flutter_sliding_toast.dart';
import 'package:super_drag_and_drop/super_drag_and_drop.dart';
import 'package:tools/barcodes/decode/state.dart';
import 'package:web/web.dart' as web;

import 'js_method.dart';

class DropOrPickerFiles extends StatefulWidget {
  const DropOrPickerFiles({super.key});

  @override
  State<DropOrPickerFiles> createState() => _DropOrPickerFilesState();
}

class _DropOrPickerFilesState extends State<DropOrPickerFiles> {
  bool inOperation = false;

  final web.HTMLInputElement inputElement =
      web.HTMLInputElement()
        ..type = 'file'
        ..accept = 'image/*'
        ..multiple = true;

  @override
  Widget build(BuildContext context) {
    final BarcodeResultState? barcodeResultState = BarcodeResultState.of(
      context,
    );
    if (barcodeResultState == null) {
      return const SizedBox();
    }
    return DropRegion(
      formats: [
        Formats.png,
        Formats.jpeg,
        Formats.svg,
        Formats.webp,
        Formats.gif,
        Formats.bmp,
        Formats.ico,
        Formats.heic,
        Formats.heif,
      ],
      hitTestBehavior: HitTestBehavior.opaque,
      onDropOver: (DropOverEvent event) async {
        if (event.session.allowedOperations.contains(DropOperation.copy)) {
          return DropOperation.copy;
        } else {
          return DropOperation.none;
        }
      },
      onPerformDrop: (PerformDropEvent event) async {
        barcodeResultState.cleanUp();
        final List<Object?> files = await Future.wait(
          event.session.items
              .where(
                (item) =>
                    item.dataReader?.platformFormats.any(
                      (format) => format.contains('image/'),
                    ) ??
                    false,
              ) // 只处理 image 文件
              .map((item) async {
                try {
                  final data = item.dataReader!.rawReader!.getDataForFormat(
                    "web:file",
                  );
                  return data.$1;
                } catch (e) {
                  return null; // 返回 null 以便过滤错误的文件
                }
              })
              .whereType<Future<Object?>>(), // 过滤掉 null 值的文件
        );

        await Future.wait(
          files.map(
            (file) =>
                barcodeResultState.readBarcodesFromImageFile(file as web.File),
          ),
        );
      },
      child: Card(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 800, maxHeight: 300),
          child: Stack(
            children: [
              Column(
                spacing: 20,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Row(
                    spacing: 8,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      OutlinedButton(
                        style: OutlinedButton.styleFrom(
                          backgroundColor:
                              inOperation ? Colors.grey : Colors.blueAccent,
                          side: BorderSide(
                            color:
                                inOperation ? Colors.grey : Colors.blueAccent,
                          ),
                        ),
                        onPressed: () async {
                          setState(() {
                            inOperation = true;
                          });
                          try {
                            inputElement.click();
                            inputElement.onChange.first.then((event) async {
                              final files = inputElement.files;
                              if (files != null) {
                                barcodeResultState.cleanUp();
                                await Future.wait([
                                  for (int i = 0; i < files.length; i++)
                                    barcodeResultState
                                        .readBarcodesFromImageFile(
                                          files.item(i)!,
                                        ),
                                ]);
                              }
                            });
                          } finally {
                            setState(() {
                              inOperation = false;
                            });
                          }
                        },
                        child: Text(
                          '选择文件',
                          style: TextStyle(
                            fontSize: 16,
                            color: inOperation ? Colors.blueGrey : Colors.white,
                          ),
                        ),
                      ),
                      OutlinedButton(
                        style: OutlinedButton.styleFrom(
                          backgroundColor:
                              inOperation ? Colors.grey : Colors.blueAccent,
                          side: BorderSide(
                            color:
                                inOperation ? Colors.grey : Colors.blueAccent,
                          ),
                        ),
                        onPressed: () async {
                          setState(() {
                            inOperation = true;
                          });
                          try {
                            List<web.File> file =
                                (await pickerDirectoryImage().toDart).toDart;
                            barcodeResultState.cleanUp();
                            await Future.wait(
                              file.map(
                                (e) => barcodeResultState
                                    .readBarcodesFromImageFile(e),
                              ),
                            );
                          } catch (e) {
                            if (context.mounted) {
                              InteractiveToast.slideError(
                                context: context,
                                title: Text(
                                  "选择文件夹失败",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(fontSize: 18),
                                ),
                                toastSetting: SlidingToastSetting(
                                  toastStartPosition: ToastPosition.top,
                                  toastAlignment: Alignment.topCenter,
                                ),
                                toastStyle: const ToastStyle(
                                  glassBlur: 4,
                                  backgroundColorOpacity: .3,
                                ),
                              );
                            }
                          } finally {
                            setState(() {
                              inOperation = false;
                            });
                          }
                        },
                        child: Text(
                          '选择文件夹',
                          style: TextStyle(
                            fontSize: 16,
                            color: inOperation ? Colors.blueGrey : Colors.white,
                          ),
                        ),
                      ),
                    ],
                  ),
                  Text(
                    inOperation ? "选择/放下文件" : '或拖放文件到此处',
                    style: DefaultTextStyle.of(context).style,
                  ),
                ],
              ),
              if (barcodeResultState.items.isNotEmpty)
                Positioned(
                  top: 10,
                  right: 10,
                  child: IconButton(
                    iconSize: 40,
                    icon: const Icon(Icons.close),
                    color: Colors.green,
                    onPressed: () {
                      barcodeResultState.cleanUp();
                      if (mounted) {
                        barcodeResultState.setState(() {});
                      }
                    },
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
