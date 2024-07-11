import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/uuid_tools/controller.dart';

class UuidToolsPage extends StatelessWidget {
  const UuidToolsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return GetBuilder<UuidToolsController>(
        init: UuidToolsController(),
        builder: (UuidToolsController controller) {
          return Center(
            child: TextField(
              controller: controller.textEditingController,
              // onChanged: controller.onChanged,
              onEditingComplete: controller.onEditingComplete,

              /// 输入框样式
              decoration: InputDecoration(
                /// 输入框内部填充
                // label: const Text("UUID"),
                labelText: "请在此处输入需要解析的UUID",
                // labelStyle: const TextStyle(color: Colors.grey),
                helper: ValueListenableBuilder<String>(
                  valueListenable: controller.helper,
                  builder: (BuildContext context, String value, Widget? child) {
                    return Text(
                      controller.helper.value,
                      style: const TextStyle(color: Colors.grey),
                    );
                  },
                ),
                contentPadding: const EdgeInsets.all(10),

                /// 输入框边框
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(10),
                    borderSide:
                        BorderSide(color: controller.borderColor.value)),

                /// 输入框填充颜色
                filled: true,

                /// 输入框提示文字
                hintText: "请在此处输入需要解析的UUID",

                /// 输入框提示文字样式
                hintStyle: const TextStyle(color: Colors.grey),
              ),
            ),
          );
        });
  }
}
