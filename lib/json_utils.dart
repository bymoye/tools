import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';

class JsonUtilsPage extends StatelessWidget {
  JsonUtilsPage({super.key});

  final TextEditingController _controller = TextEditingController();

  /// 输出框
  final RxString _output = RxString("");

  /// 状态提示
  final RxString _status = RxString("");

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          /// 输入框
          const Text("请输入JSON字符串", style: TextStyle(fontSize: 15)),
          TextField(
            controller: _controller,
            maxLines: 10,
          ),

          /// 按钮(格式化/压缩)
          const SizedBox(height: 30),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              ElevatedButton(
                onPressed: () {
                  /// 将输入框的内容格式化, 缩进2个空格
                  try {
                    var json = jsonDecode(_controller.text);
                    _output.value =
                        const JsonEncoder.withIndent(" ").convert(json);
                  } catch (e) {
                    _output.value = "JSON格式错误";
                  }
                },
                child: const Text("格式化"),
              ),
              ElevatedButton(
                onPressed: () {
                  try {
                    var json = jsonDecode(_controller.text);
                    _output.value = jsonEncode(json);
                  } catch (e) {
                    _output.value = "JSON格式错误";
                  }
                },
                child: const Text("压缩"),
              ),
            ],
          ),
          Obx(() => Text(_status.value)),
          const SizedBox(height: 30),
          const Text("结果", style: TextStyle(fontSize: 15)),
          Obx(() => TextField(
                controller: TextEditingController(text: _output.value),
                readOnly: true,
                maxLines: 10,

                /// 高度可被拉伸
              ))
        ],
      ),
    );
  }
}
