import 'dart:js_interop';
import 'package:flutter/gestures.dart';
import 'package:tools/barcodes/decode/component/result_views.dart';
import 'package:tools/barcodes/decode/models.dart';
import 'package:tools/barcodes/decode/state.dart';
import 'package:tools/global_variable.dart';
import 'package:web/web.dart' as web;
// import 'dart:ui_web' as ui;
import 'package:flutter/material.dart';

import 'component/drop_or_picker_files.dart';
import 'zxing.dart';

class BarcodesDecodePage extends StatefulWidget {
  const BarcodesDecodePage({super.key});

  @override
  State<BarcodesDecodePage> createState() => _BarcodeDecodePageState();
}

class _BarcodeDecodePageState extends State<BarcodesDecodePage> {
  bool isHover = false;

  bool displayMask = false;

  bool loading = true;

  final List<BarcodeResult> items = [];

  Function disposeZXing = () {};

  final web.HTMLScriptElement script = web.HTMLScriptElement()
    ..type = 'text/javascript'
    ..src = './assets/js/picker_directory.js';
  BarcodeResultState? _barcodeResultState;
  @override
  void initState() {
    super.initState();
    web.document.head!.append(script);
    loadZXingLibrary(type: ZXingType.reader).then((func) {
      disposeZXing = func;
      loading = false;
      setState(() {});
    });
  }

  @override
  void dispose() {
    if (_barcodeResultState != null) {
      _barcodeResultState?.cleanUp();
    }
    disposeZXing();
    web.document.head!.removeChild(script);
    super.dispose();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _barcodeResultState = BarcodeResultState.of(context);
  }

  @override
  Widget build(BuildContext context) {
    if (loading) {
      return const Center(
          child: Column(
        spacing: 8,
        mainAxisSize: MainAxisSize.min,
        children: [
          CircularProgressIndicator(),
          Text("加载 Zxing WASM 中..."),
        ],
      ));
    }
    return BarcodeResultState(
      setState: setState,
      items: items,
      child: Center(
        child: SingleChildScrollView(
          child: Column(
            spacing: 20,
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Column(
                spacing: 8,
                children: [
                  DropOrPickerFiles(),
                  ResultViews(),
                ],
              ),
              RichText(
                text: TextSpan(
                  style: DefaultTextStyle.of(context).style,
                  children: [
                    const TextSpan(text: "Powered by: "),
                    TextSpan(
                      text: "ZXing-WASM",
                      style: const TextStyle(
                        color: Colors.blue,
                      ),
                      mouseCursor: SystemMouseCursors.click,
                      spellOut: true,
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          web.window
                              .open('https://github.com/Sec-ant/zxing-wasm');
                        },
                    ),
                    const TextSpan(text: "@"),
                    TextSpan(
                      text: "$ZXING_WASM_VERSION",
                      style: const TextStyle(color: Colors.blue),
                      mouseCursor: SystemMouseCursors.click,
                      spellOut: true,
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          web.window.open(
                              'https://www.npmjs.com/package/zxing-wasm/v/$ZXING_WASM_VERSION');
                        },
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
