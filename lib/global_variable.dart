import 'package:flutter/material.dart';

class GlobalVariable {
  static ValueNotifier<ThemeMode> themeModeNotifier =
      ValueNotifier(ThemeMode.system);
  static ValueNotifier<String> searchNotifier = ValueNotifier("");
  static const String zxingWasmVersion = "2.1.0";
}
