import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:refreshed/refreshed.dart';

const List<String> _weekdays = ["一", "二", "三", "四", "五", "六", "日"];

class DateCalculationPage extends StatelessWidget {
  DateCalculationPage({super.key});

  /// 计算几天后的日期
  final Rx<DateTime> _date = Rx<DateTime>(DateTime.now());

  /// 计算几天后的日期
  final RxInt _days = RxInt(0);

  /// 日期差第一个
  final Rx<DateTime> _date1 = Rx<DateTime>(DateTime.now());

  /// 日期差第二个
  final Rx<DateTime> _date2 = Rx<DateTime>(DateTime.now());

  String _formatDate(DateTime date) {
    return "${date.year}年${date.month}月${date.day}日 星期${_weekdays[date.weekday - 1]}";
  }

  // bool get isDark => Theme.of(Get.context!).brightness == Brightness.dark;

  // Color get buttomFontColor => isDark ? Colors.black : Colors.white;

  // WidgetStateProperty<Color> get buttomColor => isDark
  //     ? WidgetStateProperty.all(Colors.white)
  //     : WidgetStateProperty.all(Colors.black);

  /// x天后的日期
  String get _afterDaysDate {
    try {
      DateTime newDate = _date.value.add(Duration(days: _days.value));
      return _formatDate(newDate);
    } catch (e) {
      return "日期计算错误";
    }
  }

  void openDatePicker(BuildContext context, Rx<DateTime> dateValue) async {
    final DateTime? date = await showDatePicker(
      context: context,
      locale: const Locale("zh", "CN"),
      initialDate: dateValue.value,
      firstDate: DateTime(1900),
      lastDate: DateTime(2100),
    );
    if (date != null) {
      dateValue.value = date;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              "计算几天后的日期",
              style: TextStyle(fontSize: 32),
            ),
            const SizedBox(height: 20),
            _buildDateSelection(context, "当前日期：", _date),
            const SizedBox(height: 20),
            _buildDaysInput(context),
            const SizedBox(height: 10),
            Text(
              "*输入负数表示之前的日期",
              style: TextStyle(
                  color: Colors.grey[600], fontStyle: FontStyle.italic),
            ),
            const SizedBox(height: 20),
            Obx(() => _days.value != 0
                ? Text(
                    "${_days.abs()}天${_days.isNegative ? "前" : "后"}的日期是: $_afterDaysDate",
                    style: const TextStyle(fontSize: 18),
                  )
                : const SizedBox()),
            const SizedBox(height: 50),
            const Text(
              "计算日期差",
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            _buildDateDifference(context),
          ],
        ),
      ),
    );
  }

  Widget _buildDateSelection(
      BuildContext context, String label, Rx<DateTime> date) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          label,
          style: const TextStyle(fontWeight: FontWeight.bold),
        ),
        const SizedBox(width: 10),
        ElevatedButton(
          onPressed: () async {
            openDatePicker(context, date);
          },
          style: ButtonStyle(
            // backgroundColor: buttomColor,
            padding: WidgetStateProperty.all<EdgeInsetsGeometry>(
                const EdgeInsets.all(10)),
          ),
          child: Obx(() => Text(
                _formatDate(date.value),
                style: const TextStyle(fontSize: 16),
              )),
        ),
      ],
    );
  }

  Widget _buildDaysInput(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Text(
          "相差: ",
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        const SizedBox(width: 10),
        SizedBox(
          width: 100,
          child: TextField(
            keyboardType: TextInputType.number,
            inputFormatters: [
              FilteringTextInputFormatter.allow(RegExp(r"^-?[0-9]*$")),
            ],
            textAlign: TextAlign.center,
            style: const TextStyle(fontWeight: FontWeight.bold),
            onChanged: (String value) {
              _days.value = int.tryParse(value) ?? 0;
            },
            decoration: const InputDecoration(
              border: OutlineInputBorder(),
              contentPadding: EdgeInsets.symmetric(vertical: 8),
            ),
          ),
        ),
        const SizedBox(width: 10),
        const Text(
          "天",
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
      ],
    );
  }

  Widget _buildDateDifference(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        ElevatedButton(
          onPressed: () async {
            openDatePicker(context, _date1);
          },
          style: ButtonStyle(
            padding: WidgetStateProperty.all<EdgeInsetsGeometry>(
                const EdgeInsets.all(10)),
          ),
          child: Obx(() => Text(
                _formatDate(_date1.value),
                style: const TextStyle(
                  fontSize: 16,
                ),
              )),
        ),
        const SizedBox(width: 10),
        const Text(
          "与",
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        const SizedBox(width: 10),
        ElevatedButton(
          onPressed: () async {
            openDatePicker(context, _date2);
          },
          style: ButtonStyle(
            padding: WidgetStateProperty.all<EdgeInsetsGeometry>(
                const EdgeInsets.all(10)),
          ),
          child: Obx(() => Text(
                _formatDate(_date2.value),
                style: const TextStyle(fontSize: 16),
              )),
        ),
        const SizedBox(width: 10),
        Obx(() => Text(
              "相差 ${_date1.value.difference(_date2.value).inDays.abs()} 天",
              style: const TextStyle(fontWeight: FontWeight.bold),
            )),
      ],
    );
  }
}
