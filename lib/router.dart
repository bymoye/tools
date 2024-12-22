import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:tools/base_page.dart';
import 'package:tools/func_enum.dart';
import 'package:web/web.dart' as web;

final GoRouter router = GoRouter(
  routes: FunctionEnum.values
      .where((element) => element.route.isNotEmpty)
      .map(
        (e) => GoRoute(
          path: e.route,
          pageBuilder: (context, state) {
            web.document.title = e.name;
            return MaterialPage(
              key: state.pageKey,
              child: BasePage(title: e.name, child: e.widget),
            );
          },
        ),
      )
      .toList(),
);
