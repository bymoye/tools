import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:simple_icons/simple_icons.dart';
import 'package:tools/func_enum.dart';
import 'package:web/web.dart' as web;

class BasePage extends StatelessWidget {
  final Future<Widget> Function() child;
  final String title;
  final RxString searchRx = RxString("");
  late final Rxn<Widget> future = Rxn<Widget>();
  BasePage({super.key, required this.title, required this.child});

  // bool get isDark => Theme.of(Get.context!).brightness == Brightness.dark;

  @override
  Widget build(BuildContext context) {
    if (future.value == null) {
      child().then((value) => future.value = value);
    }
    bool isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            Get.changeThemeMode(isDark ? ThemeMode.light : ThemeMode.dark);
          },
          child: Icon(isDark ? Icons.light_mode : Icons.dark_mode),
        ),
        drawer: Drawer(
          child: Column(
            children: [
              Expanded(
                child: ListView(
                  /// 内容居中
                  physics: const BouncingScrollPhysics(),
                  padding: EdgeInsets.zero,
                  children: [
                    DrawerHeader(
                      decoration: const BoxDecoration(
                        color: Color.fromARGB(255, 44, 78, 105),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          const Text(
                            '功能列表',
                            style: TextStyle(color: Colors.white, fontSize: 24),
                          ),

                          /// 搜索框
                          ClipRRect(
                            borderRadius: BorderRadius.circular(20),
                            child: BackdropFilter(
                              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                              child: Container(
                                decoration: BoxDecoration(
                                  color: Colors.white.withOpacity(0.2),
                                  borderRadius: BorderRadius.circular(20),
                                  border: Border.all(
                                      color: Colors.white.withOpacity(0.2)),
                                ),
                                child: TextField(
                                  onChanged: searchRx.call,
                                  controller: TextEditingController(
                                      text: searchRx.value),
                                  decoration: const InputDecoration(
                                    hintText: "搜索工具",
                                    prefixIcon: Icon(Icons.search),
                                    border: InputBorder.none,
                                    contentPadding: EdgeInsets.symmetric(
                                        horizontal: 16, vertical: 14),
                                  ),
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    ValueListenableBuilder(
                        valueListenable: searchRx,
                        builder: (context, value, child) {
                          final List<FunctionEnum> list = FunctionEnum.values
                              .where((element) => (searchRx.value.isNotEmpty
                                  ? element.name.contains(searchRx.value)
                                  : true))
                              .toList();
                          if (list.isEmpty) {
                            return const ListTile(
                              title: Text("没有找到相关工具"),
                            );
                          }

                          return Column(
                            children: list
                                .map((e) => ListTile(
                                    title: Text(e.name),
                                    tileColor: e.route == Get.currentRoute
                                        ? Colors.blue.withOpacity(0.2)
                                        : null,
                                    onTap: e.onTap))
                                .toList(),
                          );
                        }),
                  ],
                ),
              ),
              const Divider(),
              Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    children: [
                      TextButton(
                          onPressed: () {
                            web.window.open("https://github.com/bymoye/tools");
                          },
                          child: const Row(children: [
                            Icon(SimpleIcons.github, size: 20),
                            SizedBox(width: 8),
                            Text("bymoye/tools")
                          ]))
                    ],
                  ))
            ],
          ),
        ),
        appBar: AppBar(
          title: Text(title),
        ),
        body: Obx(() => future.value == null
            ? const Center(child: CircularProgressIndicator())
            : future.value!));
  }
}
