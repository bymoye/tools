import 'package:flutter/material.dart';
import 'package:refreshed/refreshed.dart';

class Env {
  static Rx<ThemeMode> themeMode = Rx<ThemeMode>(ThemeMode.system);
}
