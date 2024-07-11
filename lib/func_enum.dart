import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/date_tools/date_calculation.dart'
    deferred as date_calculation;
import 'package:tools/index/index.dart' deferred as index;
import 'package:tools/json_tools/json_utils.dart' deferred as json_utils;
import 'package:tools/world_time/index.dart' deferred as world_time;
import 'package:tools/uuid_tools/index.dart' deferred as uuid_tools;
import 'package:web/web.dart' as web;

enum FunctionEnum {
  defaultPage("首页", route: "/"),
  dateCalculation("日期计算", route: "/date-caluculation"),
  jsonUtils("JSON压缩/格式化工具", route: "/json-utils"),
  worldTime("世界时间", route: "/world-time"),
  uuidTools("UUID工具", route: "/uuid-tools"),

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
          return date_calculation.DateCalculation();
        },
      FunctionEnum.jsonUtils => () async {
          await json_utils.loadLibrary();
          return json_utils.JsonUtilsPage();
        },
      FunctionEnum.worldTime => () async {
          await world_time.loadLibrary();
          return world_time.WorldTime();
        },
      FunctionEnum.uuidTools => () async {
          await uuid_tools.loadLibrary();
          return uuid_tools.UuidToolsPage();
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
