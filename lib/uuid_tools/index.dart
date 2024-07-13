import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/utils/uuid/uuid_analysis.dart';
// import 'package:tools/uuid_tools/controller.dart';

class UuidToolsPage extends StatefulWidget {
  const UuidToolsPage({super.key});

  @override
  State<UuidToolsPage> createState() => _UUidToolsState();
}

class _UUidToolsState extends State<UuidToolsPage> {
  final TextEditingController textEditingController = TextEditingController();

  UuidAnalysis? analysis;

  String? helper;

  Color borderColor = Colors.grey;

  // double get width {
  //   final double width = Get.width * 0.5;
  //   return width < 800 ? 800 : width;
  // }

  void onEditingComplete() {
    if (textEditingController.text.isEmpty) {
      borderColor = Colors.red;
      helper = "UUID不能为空";
      return;
    }
    analysis = null;
    try {
      analysis = UuidAnalysis(textEditingController.text);
    } catch (e) {
      if (e is FormatException) {
        borderColor = Colors.red;
        // textEditingController.
        helper = "UUID格式错误";
        setState(() {});
      }
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: Get.mediaQuery.size.width * 0.5,
        child: TextField(
          controller: textEditingController,
          onEditingComplete: onEditingComplete,
          decoration: InputDecoration(
            labelText: "请在此处输入需要解析的UUID",
            helper: Text(
              helper ?? "",
              style: const TextStyle(color: Colors.grey),
            ),
            contentPadding: const EdgeInsets.all(10),
            border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
                borderSide: BorderSide(color: borderColor)),
            filled: true,
            hintText: "请在此处输入需要解析的UUID",
            hintStyle: const TextStyle(color: Colors.grey),
          ),
        ),
      ),
    );
  }
}
