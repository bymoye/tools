import 'dart:convert';

import 'package:flutter/material.dart';

class JsonUtilsPage extends StatefulWidget {
  const JsonUtilsPage({super.key});

  @override
  State<JsonUtilsPage> createState() => _JsonUtilsPageState();
}

class _JsonUtilsPageState extends State<JsonUtilsPage> {
  final TextEditingController _controller = TextEditingController();
  final TextEditingController _outputController = TextEditingController();

  String _status = "";

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
                    _outputController.text =
                        const JsonEncoder.withIndent(" ").convert(json);
                    _status = "";
                    setState(() {});
                  } catch (e) {
                    setState(() {
                      _status = "JSON格式错误";
                    });
                  }
                },
                child: const Text("格式化"),
              ),
              ElevatedButton(
                onPressed: () {
                  try {
                    var json = jsonDecode(_controller.text);
                    _outputController.text = jsonEncode(json);
                    _status = "";
                    setState(() {});
                  } catch (e) {
                    setState(() {
                      _status = "JSON格式错误";
                    });
                  }
                },
                child: const Text("压缩"),
              ),
            ],
          ),
          Text(_status),
          const SizedBox(height: 30),
          const Text("结果", style: TextStyle(fontSize: 15)),
          TextField(
            controller: _outputController,
            readOnly: true,
            maxLines: 10,

            /// 高度可被拉伸
          )
        ],
      ),
    );
  }
}
