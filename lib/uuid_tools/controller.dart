// import 'package:flutter/material.dart';
// import 'package:refreshed/refreshed.dart';
// import 'package:tools/utils/uuid/uuid_analysis.dart';

// class UuidToolsController extends GetxController {
//   final TextEditingController textEditingController = TextEditingController();

//   final RxString helper = RxString("");

//   final Rx<Color> borderColor = Rx<Color>(Colors.grey);

//   final Rxn<UuidAnalysis> analysis = Rxn<UuidAnalysis>();

//   void onEditingComplete() {
//     if (textEditingController.text.isEmpty) {
//       borderColor.value = Colors.red;
//       helper.value = "UUID不能为空";
//       return;
//     }
//     analysis.value = null;
//     try {
//       analysis.value = UuidAnalysis(textEditingController.text);
//     } catch (e) {
//       if (e is FormatException) {
//         borderColor.value = Colors.red;
//         // textEditingController.
//         helper.value = "UUID格式错误";
//         update();
//       }
//       print(e);
//     }
//   }
// }
