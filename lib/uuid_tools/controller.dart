import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/utils/uuid/uuid_analysis.dart';

class UuidToolsController extends GetxController {
  final TextEditingController textEditingController = TextEditingController();

  final RxString helper = "".obs;

  final Rx<Color> borderColor = Rx<Color>(Colors.grey);

  void onEditingComplete() {
    try {
      final UuidAnalysis analysis = UuidAnalysis(textEditingController.text);
    } catch (e) {
      if (e is FormatException) {
        borderColor.value = Colors.red;
        // textEditingController.
        helper.value = "UUID格式错误";
        update();
      }
      print(e);
    }
  }
}
