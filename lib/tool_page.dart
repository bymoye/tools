import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/date_calculation.dart';
import 'package:tools/env.dart';
import 'package:tools/json_utils.dart';

class ToolController extends GetxController {
  final Rx<Widget> widget = Rx<Widget>(const Text("工具箱由 Flutter 实现, 理解为Demo"));
}

class ToolPage extends StatelessWidget {
  const ToolPage({super.key});

  Widget _buildButtom(Function() onPressed, String text) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: ElevatedButton(
        onPressed: onPressed,
        child: Text(text),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('一个简单的工具箱实现'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Env.themeMode.value = Theme.of(context).brightness == Brightness.dark
              ? ThemeMode.light
              : ThemeMode.dark;
        },
        child: Theme.of(context).brightness == Brightness.dark
            ? const Icon(Icons.light_mode)
            : const Icon(Icons.dark_mode),
      ),
      body: GetBuilder<ToolController>(
          init: ToolController(),
          builder: (controller) => Center(
                child: Column(children: [
                  Expanded(
                      flex: 1,
                      child: ListView(
                        scrollDirection: Axis.horizontal,
                        children: [
                          _buildButtom(() {
                            controller.widget.value = DateCalculation();
                          }, "日期计算"),
                          _buildButtom(() {
                            controller.widget.value = JsonUtilsPage();
                          }, "JSON压缩/格式化工具"),
                          _buildButtom(() {
                            controller.widget.value = JsonUtilsPage();
                          }, "Hello Refreshed"),
                        ],
                      )),
                  Expanded(flex: 19, child: Obx(() => controller.widget.value))
                ]),
              )),
    );
  }
}
