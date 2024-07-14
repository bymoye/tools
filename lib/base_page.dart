import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';
import 'package:simple_icons/simple_icons.dart';
import 'package:tools/func_enum.dart';
import 'package:tools/global_variable.dart';
import 'package:web/web.dart' as web;

// class Man

class BasePage extends StatelessWidget {
  final Future<Widget> Function() child;
  final String title;
  final Rxn<Widget> body = Rxn<Widget>();
  BasePage({super.key, required this.title, required this.child});

  // bool get isDark => Theme.of(Get.context!).brightness == Brightness.dark;

  @override
  Widget build(BuildContext context) {
    if (body.value == null) child().then(body.call);

    bool isDark = Theme.of(context).brightness == Brightness.dark;

    return Scaffold(
        appBar: AppBar(
          title: Text(title),
          centerTitle: true,
          elevation: 0,
          shadowColor: Colors.transparent,
          backgroundColor: Colors.transparent,
          scrolledUnderElevation: 0,
        ),
        drawer: Drawer(
          child: Column(
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
                            onChanged: GlobalVariable.searchRx.call,
                            controller: TextEditingController(
                                text: GlobalVariable.searchRx.value),
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
              Expanded(
                child: ListView(
                  /// 内容居中
                  physics: const BouncingScrollPhysics(),
                  padding: EdgeInsets.zero,
                  children: [
                    ValueListenableBuilder(
                        valueListenable: GlobalVariable.searchRx,
                        builder: (context, value, child) {
                          List<FunctionEnum> list = FunctionEnum.values
                              .where((element) => (GlobalVariable
                                      .searchRx.value.isNotEmpty
                                  ? element.name
                                      .contains(GlobalVariable.searchRx.value)
                                  : true))
                              .toList();
                          if (list.isEmpty) {
                            return const ListTile(
                              title: Text("没有找到相关工具"),
                            );
                          }

                          return Column(
                            children: (list)
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
                        child: const Row(
                          children: [
                            Icon(SimpleIcons.github, size: 20),
                            SizedBox(width: 8),
                            Text("bymoye/tools")
                          ],
                        ),
                      ),
                      const Spacer(),
                      IconButton(
                          onPressed: () {
                            Get.changeThemeMode(
                                isDark ? ThemeMode.light : ThemeMode.dark);
                          },
                          icon:
                              Icon(isDark ? Icons.light_mode : Icons.dark_mode))
                    ],
                  ))
            ],
          ),
        ),
        body: Obx(
          () =>
              body.value ??
              const Center(
                child: CircularProgressIndicator(),
              ),
        ));
  }
}
