import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/env.dart';
import 'package:tools/tool_page.dart';

// import 'package:flutter_web_plugins/flutter_web_plugins.dart';
void main() {
  WidgetsFlutterBinding.ensureInitialized();

  /// 使路由不携带"#"
  // setUrlStrategy();
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder(
      valueListenable: Env.themeMode,
      builder: (context, ThemeMode themeMode, child) {
        return GetMaterialApp(
          title: 'Tools for Flutter',
          theme: ThemeData.light(),
          darkTheme: ThemeData.dark(),
          getPages: [
            GetPage(name: '/', page: () => const ToolPage()),
            GetPage(
                name: '/date-caluculation',
                page: () => const ToolPage(toolType: ToolType.dateCalculation)),
            GetPage(
                name: '/json-utils',
                page: () => const ToolPage(toolType: ToolType.jsonUtils)),
            GetPage(
                name: '/world-time',
                page: () => const ToolPage(toolType: ToolType.worldTime)),
          ],
          localizationsDelegates: const [
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          themeMode: themeMode,
          initialRoute: '/',
          home: const Text("hello"),
        );
      },
    );
  }
}
