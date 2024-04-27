import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/date_tools/date_calculation.dart';
import 'package:tools/env.dart';
import 'package:tools/json_tools/json_utils.dart';
import 'package:tools/world_time.dart';

enum ToolType {
  defaultPage("默认显示页面", disPlay: false),
  dateCalculation("日期计算"),
  jsonUtils("JSON压缩/格式化工具"),
  worldTime("世界时间");

  final String name;
  final bool disPlay;
  const ToolType(this.name, {this.disPlay = true});
}

class ToolController extends GetxController {
  ToolController({ToolType? toolType}) : super() {
    if (toolType != null) {
      this.toolType.value = toolType;
      widget.value = toolMap[toolType]!();
    }
  }
  final Rx<ToolType> toolType = Rx<ToolType>(ToolType.defaultPage);
  final Rx<Widget> widget = Rx<Widget>(const Text("工具箱由 Flutter 实现, 理解为Demo"));

  final Map<ToolType, Widget Function()> toolMap = {
    ToolType.defaultPage: () => const Text("工具箱由 Flutter 实现, 理解为Demo"),
    ToolType.dateCalculation: () => DateCalculation(),
    ToolType.jsonUtils: () => JsonUtilsPage(),
    ToolType.worldTime: () => const WorldTime(),
  };

  @override
  void onInit() {
    super.onInit();
    toolType.listen((value) {
      widget.value = toolMap[value]!();
    });
  }
}

class ToolPage extends StatelessWidget {
  final ToolType toolType;
  const ToolPage({super.key, this.toolType = ToolType.defaultPage});

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
          init: ToolController(toolType: toolType),
          builder: (controller) => Center(
                child: Column(children: [
                  Expanded(
                      flex: 1,
                      child: ListView(
                        scrollDirection: Axis.horizontal,
                        children: ToolType.values
                            .where((element) => element.disPlay)
                            .map((e) => _buildButtom(() {
                                  controller.toolType.call(e);
                                }, e.name))
                            .toList(),
                      )),
                  Expanded(flex: 19, child: Obx(() => controller.widget.value))
                ]),
              )),
    );
  }
}
