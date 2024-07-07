import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/date_tools/date_calculation.dart';
import 'package:tools/func_enum.dart';
import 'package:tools/json_tools/json_utils.dart';
import 'package:tools/world_time/index.dart';
import 'package:web/web.dart' as web;

const Widget _defaultWidget = Text("工具箱由 Flutter 实现, 理解为Demo");

class ToolController extends GetxController {
  ToolController({FunctionEnum? toolType}) : super() {
    if (toolType != null) {
      this.toolType.value = toolType;
      widget.value = toolMap[toolType]!();
    }
  }
  final Rx<FunctionEnum> toolType = Rx<FunctionEnum>(FunctionEnum.defaultPage);
  final Rx<Widget> widget = Rx<Widget>(_defaultWidget);

  final Map<FunctionEnum, Widget Function()> toolMap = {
    FunctionEnum.defaultPage: () => _defaultWidget,
    FunctionEnum.dateCalculation: () => DateCalculation(),
    FunctionEnum.jsonUtils: () => JsonUtilsPage(),
    FunctionEnum.worldTime: () => const WorldTime(),
    FunctionEnum.imageProcess: () {
      /// 跳转到squoosh
      web.window.open("https://squoosh.app/", "squoosh");
      return InkWell(
          child: const Text("跳转到图片处理页面"),
          onTap: () {
            web.window.open("https://squoosh.app/", "squoosh");
          });
    }
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
  final FunctionEnum toolType;
  const ToolPage({super.key, this.toolType = FunctionEnum.defaultPage});

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
    bool isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
      appBar: AppBar(
        title: const Text('一个简单的工具箱实现'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Get.changeThemeMode(isDark ? ThemeMode.light : ThemeMode.dark);
        },
        child: Icon(isDark ? Icons.light_mode : Icons.dark_mode),
      ),
      body: GetBuilder<ToolController>(
          init: ToolController(toolType: toolType),
          builder: (controller) => Center(
                child: Column(children: [
                  Expanded(
                      flex: 1,
                      child: ListView(
                        scrollDirection: Axis.horizontal,
                        children: FunctionEnum.values
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
