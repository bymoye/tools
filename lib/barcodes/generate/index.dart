import 'dart:js_interop';

import 'package:flutter/material.dart';
import 'package:tools/barcodes/decode/zxing.dart' as zxing;
import 'package:web/web.dart' as web;

class BarcodesGeneratePage extends StatefulWidget {
  const BarcodesGeneratePage({super.key});

  @override
  State<BarcodesGeneratePage> createState() => _BarcodesGeneratePageState();
}

class _BarcodesGeneratePageState extends State<BarcodesGeneratePage> {
  bool loading = true;
  Function disposeZXing = () {};

  List<String> barcodeFormats = [];
  final TextEditingController _textController = TextEditingController();
  String? _imageUrl;
  String? _svgContent;
  String _format = 'QRCode';
  String _errorLevel = 'M';
  double _scale = 5;
  bool _isLoading = false;

  String? _error;

  List<String> get _formats => barcodeFormats;

  final List<String> _errorLevels = ['L', 'M', 'Q', 'H'];
  @override
  void initState() {
    super.initState();
    zxing.loadZXingLibrary(type: zxing.ZXingType.writer).then((func) async {
      disposeZXing = func;
      loading = false;
      barcodeFormats = [
        for (final format in zxing.barcodeFormats.toDart) format.toDart
      ];

      barcodeFormats.removeWhere(
          (format) => ["DataBarExpanded", "PDF417"].contains(format));
      // web.console.log(await writeBarcode("hello world").toDart);

      setState(() {});
    });
  }

  Future<zxing.WriteResult> generateBarcode(
    String input, {
    String? ecLevel,
    bool? forceSquareDataMatrix,
    String format = 'QRCode',
    bool? readerInit,
    double? rotate,
    double? scale,
    double? sizeHint,
    bool? withHRT,
    bool? withQuietZones,
  }) async {
    if (!barcodeFormats.contains(format)) {
      throw Exception("Unsupported barcode format: $format");
    }
    final options = zxing.WriterOptions(
      ecLevel: format.contains('QR') ? ecLevel : "",
      forceSquareDataMatrix: forceSquareDataMatrix,
      format: format,
      readerInit: readerInit,
      rotate: rotate?.toJS,
      scale: scale?.toJS,
      sizeHint: sizeHint?.toJS,
      withHRT: withHRT,
      withQuietZones: withQuietZones,
    );

    final promise = zxing.writeBarcode(input, options);
    return await promise.toDart;
  }

  String getBlobUrl(web.Blob blob) {
    return web.URL.createObjectURL(blob);
  }

  void revokeObjectURL(String url) {
    web.URL.revokeObjectURL(url);
  }

  web.Blob svgToBlob(String svg) {
    return web.Blob([svg.toJS].jsify() as JSArray<JSString>,
        web.BlobPropertyBag(type: 'image/svg+xml'));
  }

  @override
  void dispose() {
    disposeZXing();
    super.dispose();
  }

  Future<void> _generateBarcode() async {
    if (_textController.text.isEmpty) {
      setState(() {
        _error = '请输入文本内容生成二维码';
      });
      return;
    }

    setState(() {
      _isLoading = true;
      _error = null;
    });

    try {
      final result = await generateBarcode(
        _textController.text,
        format: _format,
        ecLevel: _errorLevel,
        scale: _scale,
      );

      print(result.error);

      if (result.error.isNotEmpty) {
        setState(() {
          _error = result.error;
          _imageUrl = null;
          _svgContent = null;
        });
        return;
      }

      String? imageUrl;
      if (result.image != null) {
        imageUrl = getBlobUrl(result.image!);
      } else if (result.svg.isNotEmpty) {
        final svgBlob = svgToBlob(result.svg);
        imageUrl = getBlobUrl(svgBlob);
      }

      // Revoke old URL if exists
      if (_imageUrl != null) {
        revokeObjectURL(_imageUrl!);
      }

      setState(() {
        _imageUrl = imageUrl;
        _svgContent = result.svg;
      });
      // } catch (e) {
      //   setState(() {
      //     _error = '生成二维码出错: $e';
      //   });
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (loading) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    }
    return Center(
      child: SingleChildScrollView(
        child: Column(
          spacing: 20,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            TextField(
              controller: _textController,
              decoration: const InputDecoration(
                labelText: '请输入文本或网址',
                border: OutlineInputBorder(),
              ),
              maxLines: 3,
            ),
            const SizedBox(height: 16),

            // 格式
            Row(
              children: [
                const Text('格式: '),
                const SizedBox(width: 8),
                Expanded(
                  child: DropdownButton<String>(
                    value: _format,
                    isExpanded: true,
                    onChanged: (value) {
                      if (value != null) {
                        setState(() {
                          _format = value;
                        });
                      }
                    },
                    items: _formats.map((format) {
                      return DropdownMenuItem<String>(
                        value: format,
                        child: Text(format),
                      );
                    }).toList(),
                  ),
                ),
              ],
            ),

            // 错误级别
            if (_format.contains('QR'))
              Row(
                children: [
                  const Text('纠错级别: '),
                  const SizedBox(width: 8),
                  Expanded(
                    child: DropdownButton<String>(
                      value: _errorLevel,
                      isExpanded: true,
                      onChanged: (value) {
                        if (value != null) {
                          setState(() {
                            _errorLevel = value;
                          });
                        }
                      },
                      items: _errorLevels.map((level) {
                        String description = '级别 $level';
                        switch (level) {
                          case 'L':
                            description += ' (低 - 7%)';
                            break;
                          case 'M':
                            description += ' (中 - 15%)';
                            break;
                          case 'Q':
                            description += ' (较高 - 25%)';
                            break;
                          case 'H':
                            description += ' (高 - 30%)';
                            break;
                        }
                        return DropdownMenuItem<String>(
                          value: level,
                          child: Text(description),
                        );
                      }).toList(),
                    ),
                  ),
                ],
              ),

            // Scale
            Row(
              children: [
                const Text('缩放: '),
                Expanded(
                  child: Slider(
                    value: _scale,
                    min: 1,
                    max: 10,
                    divisions: 9,
                    label: _scale.toStringAsFixed(0),
                    onChanged: (value) {
                      setState(() {
                        _scale = value;
                      });
                    },
                  ),
                ),
                Text(_scale.toStringAsFixed(0)),
              ],
            ),

            const SizedBox(height: 16),

            ElevatedButton(
              onPressed: _isLoading ? null : _generateBarcode,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.blue,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 12),
              ),
              child: _isLoading
                  ? const SizedBox(
                      width: 24,
                      height: 24,
                      child: CircularProgressIndicator(color: Colors.white),
                    )
                  : const Text('生成二维码'),
            ),

            if (_error != null)
              Padding(
                padding: const EdgeInsets.only(top: 16),
                child: Text(
                  _error!,
                  style: const TextStyle(color: Colors.red),
                ),
              ),

            if (_imageUrl != null)
              Padding(
                padding: const EdgeInsets.only(top: 24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const Text(
                      '生成的二维码',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 16),
                    Center(
                      child: Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          border: Border.all(color: Colors.grey),
                          borderRadius: BorderRadius.circular(8),
                          color: Colors.white,
                        ),
                        child: Image.network(_imageUrl!,
                            webHtmlElementStrategy:
                                WebHtmlElementStrategy.prefer),
                      ),
                    ),
                    // if (_svgContent != null && _svgContent!.isNotEmpty)
                    //   Padding(
                    //     padding: const EdgeInsets.only(top: 16),
                    //     child: Row(
                    //       mainAxisAlignment: MainAxisAlignment.center,
                    //       children: [
                    //         OutlinedButton.icon(
                    //           icon: const Icon(Icons.copy),
                    //           label: const Text('复制SVG代码'),
                    //           onPressed: () {
                    //             /// TODO: 复制
                    //           },
                    //         ),
                    //       ],
                    //     ),
                    //   ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}
