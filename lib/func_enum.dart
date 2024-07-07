import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/date_tools/date_calculation.dart';
import 'package:tools/json_tools/json_utils.dart';
import 'package:tools/world_time/index.dart';
import 'package:web/web.dart' as web;

enum FunctionEnum {
  defaultPage("首页", route: "/"),
  dateCalculation("日期计算", route: "/date-caluculation"),
  jsonUtils("JSON压缩/格式化工具", route: "/json-utils"),
  worldTime("世界时间", route: "/world-time"),

  /// 图片处理
  imageProcess("图片处理");

  /// 二维码生成
  /// 二维码识别

  final String name;
  final bool disPlay;
  final String route;
  const FunctionEnum(this.name, {this.disPlay = true, this.route = ""});

  Widget get widget {
    switch (this) {
      case FunctionEnum.dateCalculation:
        return DateCalculation();
      case FunctionEnum.jsonUtils:
        return JsonUtilsPage();
      case FunctionEnum.worldTime:
        return const WorldTime();
      default:
        return const SizedBox();
    }
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
