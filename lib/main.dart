import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/env.dart';
import 'package:tools/tool_page.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
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
        return MaterialApp(
          title: 'Tools for Flutter',
          theme: ThemeData.light(),
          darkTheme: ThemeData.dark(),
          localizationsDelegates: const [
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          // supportedLocales: const [
          //   Locale('zh'),
          //   Locale('en'),
          // ],
          themeMode: themeMode,
          home: const ToolPage(),
        );
      },
    );
  }
}
