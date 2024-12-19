import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

Future<DateTime?> openDatePicker(
  BuildContext context, {
  DateTime? initialDate,
}) async {
  return await showDatePicker(
    context: context,
    locale: const Locale("zh", "CN"),
    initialDate: initialDate,
    firstDate: DateTime(1900),
    lastDate: DateTime(2100),
  );
}

String formatDate(DateTime date) {
  const List<String> weekdays = ["一", "二", "三", "四", "五", "六", "日"];
  return "${DateFormat('yyyy年MM月dd日').format(date)} 星期${weekdays[date.weekday - 1]}";
}
