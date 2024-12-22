import 'package:flutter/material.dart';

class GlobalVariable {
  static ValueNotifier<ThemeMode> themeModeNotifier =
      ValueNotifier(ThemeMode.system);
  static ValueNotifier<String> searchNotifier = ValueNotifier("");
}
