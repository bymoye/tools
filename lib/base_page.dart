import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:simple_icons/simple_icons.dart';
import 'package:tools/func_enum.dart';
import 'package:tools/global_variable.dart';
import 'package:tools/utils/material_text.dart';
import 'package:web/web.dart' as web;
import 'package:flutter/scheduler.dart' show timeDilation;

class BasePage extends StatelessWidget {
  final Future<Widget> Function() child;
  final String title;
  const BasePage({super.key, required this.title, required this.child});

  @override
  Widget build(BuildContext context) {
    bool isDark = Theme.of(context).brightness == Brightness.dark;
    timeDilation = 1.3;
    return Scaffold(
      appBar: AppBar(
        title: Hero(
          tag: title,
          child: MaterialText(
            title,
            style: const TextStyle(fontSize: 20),
          ),
        ),
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
                          color: Colors.white.withAlpha(100),
                          borderRadius: BorderRadius.circular(20),
                          border:
                              Border.all(color: Colors.white.withAlpha(100)),
                        ),
                        child: TextField(
                          onChanged: (value) {
                            GlobalVariable.searchNotifier.value = value;
                          },
                          controller: TextEditingController(
                              text: GlobalVariable.searchNotifier.value),
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
                    valueListenable: GlobalVariable.searchNotifier,
                    builder: (context, value, child) {
                      List<FunctionEnum> list = FunctionEnum.values
                          .where((element) => (GlobalVariable
                                  .searchNotifier.value.isNotEmpty
                              ? element.name
                                  .contains(GlobalVariable.searchNotifier.value)
                              : true))
                          .toList();
                      if (list.isEmpty) {
                        return const ListTile(
                          title: Text("没有找到相关工具"),
                        );
                      }

                      return Column(
                        children: (list).map((e) {
                          bool isCurrent =
                              e.route == GoRouter.of(context).state?.path;
                          return Hero(
                            tag: isCurrent ? "current" : e.name,
                            child: ListTile(
                                title: MaterialText(e.name),
                                tileColor: isCurrent
                                    ? Colors.blue.withAlpha(100)
                                    : null,
                                onTap: e.onTap),
                          );
                        }).toList(),
                      );
                    },
                  ),
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
                          GlobalVariable.themeModeNotifier.value =
                              isDark ? ThemeMode.light : ThemeMode.dark;
                        },
                        icon: Icon(isDark ? Icons.light_mode : Icons.dark_mode))
                  ],
                ))
          ],
        ),
      ),
      body: FutureBuilder(
        future: child(),
        builder: (context, snapshot) {
          return snapshot.hasData
              ? snapshot.data!
              : const Center(
                  child: CircularProgressIndicator(),
                );
        },
      ),
    );
  }
}
