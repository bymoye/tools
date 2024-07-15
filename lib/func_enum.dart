import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:web/web.dart' as web;
import 'package:tools/index/index.dart' deferred as index;
import 'package:tools/date_calculation/index.dart' deferred as date_calculation;
import 'package:tools/json_tools/json_utils.dart' deferred as json_utils;
import 'package:tools/world_time/index.dart' deferred as world_time;
import 'package:tools/uuid_tools/parse.dart' deferred as uuid_tools;
import 'package:tools/uuid_tools/generate.dart' deferred as uuid_generate;
import 'package:tools/quill_editor/index.dart' deferred as quill_editor;

enum FunctionEnum {
  defaultPage("首页", route: "/"),
  dateCalculation("日期计算", route: "/date-caluculation"),
  jsonUtils("JSON压缩/格式化工具", route: "/json-utils"),
  worldTime("世界时间", route: "/world-time"),
  uuidParse("UUID解析", route: "/uuid-parse"),
  uuidGenerate("UUID生成", route: "/uuid-generate"),
  quillEditor("Quill编辑器", route: "/quill-editor"),

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
      FunctionEnum.quillEditor => () async {
          await quill_editor.loadLibrary();
          return quill_editor.QuillEditorPage();
          // return const SizedBox();
        },
      _ => () async {
          return const SizedBox();
        }
    };
  }

  void onTap() {
    switch (this) {
      case FunctionEnum.imageProcess:
        web.window.open("https://squoosh.app/", "squoosh");
        break;
      default:
        Get.offAllNamed(route);
    }
  }
}
