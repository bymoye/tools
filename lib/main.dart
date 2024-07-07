import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/base_page.dart';
import 'package:tools/func_enum.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Tools for Flutter',
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      getPages: [
        ...FunctionEnum.values.where((element) => element.route.isNotEmpty).map(
            (e) => GetPage(
                name: e.route,
                page: () => BasePage(title: e.name, child: e.widget))),
      ],
      localizationsDelegates: const [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      // themeMode: themeMode,
      initialRoute: '/',
    );
  }
}
