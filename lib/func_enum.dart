import 'package:flutter/material.dart';
import 'package:tools/router.dart';
import 'package:web/web.dart' as web;

/// 首页
import 'package:tools/index/index.dart' deferred as index;

/// 日期计算
import 'package:tools/date_calculation/index.dart' deferred as date_calculation;

/// JSON工具
import 'package:tools/json_tools/json_utils.dart' deferred as json_utils;

/// 世界时间
import 'package:tools/world_time/index.dart' deferred as world_time;

/// UUID工具
import 'package:tools/uuid_tools/parse.dart' deferred as uuid_tools;
import 'package:tools/uuid_tools/generate.dart' deferred as uuid_generate;

/// 条形码工具
import 'package:tools/barcodes/decode/index.dart' deferred as barcode_decode;
import 'package:tools/barcodes/generate/index.dart'
    deferred as barcode_generate;

/// http2 hpack
import 'package:tools/hpack_huffman/index.dart' deferred as hpack_huffman;

/// Quill编辑器
// import 'package:tools/quill_editor/index.dart' deferred as quill_editor;

enum FunctionEnum {
  defaultPage("首页", route: "/"),
  dateCalculation("日期计算", route: "/date-caluculation"),
  jsonUtils("JSON压缩/格式化工具", route: "/json-utils"),
  worldTime("世界时间", route: "/world-time"),
  uuidParse("UUID解析", route: "/uuid-parse"),
  uuidGenerate("UUID生成", route: "/uuid-generate"),
  barcodesDecode("条形码解析", route: "/barcodes-decode"),
  barcodesGenerate("条形码生成", route: "/barcodes-generate"),

  /// http2 hpack
  hpackHuffmanEncoding("HPACK Huffman 编码/解码", route: "/hpack-huffman"),

  /// 图片处理
  imageProcess("图片处理");

  /// 二维码生成
  /// 二维码识别

  final String name;
  final String route;
  const FunctionEnum(this.name, {this.route = ""});

  Future<Widget> Function() get widget {
    return switch (this) {
      FunctionEnum.defaultPage => () async {
        await index.loadLibrary();
        return index.IndexPage();
      },
      FunctionEnum.dateCalculation => () async {
        await date_calculation.loadLibrary();
        return date_calculation.DateCalculationPage();
      },
      FunctionEnum.jsonUtils => () async {
        await json_utils.loadLibrary();
        return json_utils.JsonUtilsPage();
      },
      FunctionEnum.worldTime => () async {
        await world_time.loadLibrary();
        return world_time.WorldTimePage();
      },
      FunctionEnum.uuidParse => () async {
        await uuid_tools.loadLibrary();
        return uuid_tools.UuidParsePage();
      },
      FunctionEnum.uuidGenerate => () async {
        await uuid_generate.loadLibrary();
        return uuid_generate.UUuidGeneratePage();
      },
      FunctionEnum.barcodesDecode => () async {
        await barcode_decode.loadLibrary();
        return barcode_decode.BarcodesDecodePage();
      },
      FunctionEnum.barcodesGenerate => () async {
        await barcode_generate.loadLibrary();
        return barcode_generate.BarcodesGeneratePage();
      },
      FunctionEnum.hpackHuffmanEncoding => () async {
        await hpack_huffman.loadLibrary();
        return hpack_huffman.HpackHuffmanPage();
      },
      // FunctionEnum.quillEditor => () async {
      //     await quill_editor.loadLibrary();
      //     return quill_editor.QuillEditorPage();
      //     // return const SizedBox();
      //   },
      _ => () async {
        return const SizedBox();
      },
    };
  }

  void onTap() {
    switch (this) {
      case FunctionEnum.imageProcess:
        web.window.open("https://squoosh.app/", "squoosh");
        break;
      default:
        router.go(route);
    }
  }
}
