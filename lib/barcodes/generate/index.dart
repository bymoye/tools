import 'dart:js_interop';

import 'package:flutter/material.dart';
import 'package:tools/barcodes/decode/zxing.dart';
import 'package:web/web.dart' as web;

class BarcodesGeneratePage extends StatefulWidget {
  const BarcodesGeneratePage({super.key});

  @override
  State<BarcodesGeneratePage> createState() => _BarcodesGeneratePageState();
}

class _BarcodesGeneratePageState extends State<BarcodesGeneratePage> {
  bool loading = true;
  Function disposeZXing = () {};
  @override
  void initState() {
    super.initState();
    loadZXingLibrary(type: ZXingType.writer).then((func) async {
      disposeZXing = func;
      loading = false;
      web.console.log(await writeBarcode("hello world").toDart);

      setState(() {});
    });
  }

  @override
  void dispose() {
    super.dispose();
    disposeZXing();
  }

  @override
  Widget build(BuildContext context) {
    if (loading) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    }
    return SingleChildScrollView(
      child: Column(
        children: [
          
        ],
      ),
    );
    return const Center(
      child: Text("Hello World"),
    );
  }
}
