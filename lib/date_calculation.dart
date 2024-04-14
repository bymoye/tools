import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:refreshed/refreshed.dart';

const List<String> _weekdays = ["一", "二", "三", "四", "五", "六", "日"];

class DateCalculation extends StatelessWidget {
  DateCalculation({super.key});

  /// 计算几天后的日期
  final Rx<DateTime> _date = Rx<DateTime>(DateTime.now());

  /// 计算几天后的日期
  final RxInt _days = RxInt(0);

  /// 日期差第一个
  final Rx<DateTime> _date1 = Rx<DateTime>(DateTime.now());

  /// 日期差第二个
  final Rx<DateTime> _date2 = Rx<DateTime>(DateTime.now());

  String _formatDate(DateTime date) {
    return "${date.year}年${date.month}月${date.day}日";
  }

  /// x天后的日期
  String get _afterDaysDate {
    try {
      DateTime newDate = _date.value.add(Duration(days: _days.value));
      return "${_formatDate(newDate)} 星期${_weekdays[newDate.weekday]}";
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
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text("计算几天后的日期", style: TextStyle(fontSize: 30)),
          const SizedBox(height: 20),
          RichText(
            text: TextSpan(
              text: "当前日期：",
              style: DefaultTextStyle.of(context).style,
              children: [
                /// 日期选择器
                WidgetSpan(
                  alignment: PlaceholderAlignment.middle,
                  child: ElevatedButton(
                    onPressed: () async {
                      openDatePicker(context, _date);
                    },
                    child: Obx(
                      () => Text(
                        _formatDate(_date.value),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          RichText(
            text: TextSpan(
              text: "相差: ",
              style: DefaultTextStyle.of(context).style,
              children: [
                /// 天数输入框
                WidgetSpan(
                  alignment: PlaceholderAlignment.middle,
                  child: SizedBox(
                    width: 100,
                    child: TextField(
                      keyboardType: TextInputType.number,
                      inputFormatters: [
                        FilteringTextInputFormatter.allow(
                          RegExp(r"^-?[0-9]*$"),
                        ),
                      ],
                      textAlign: TextAlign.center,
                      onChanged: (String value) {
                        _days.value = int.tryParse(value) ?? 0;
                      },
                    ),
                  ),
                ),
                const TextSpan(text: "天"),
              ],
            ),
          ),
          const Text("*输入负数表示之前的日期"),
          Obx(() => _days.value != 0
              ? Text("$_days天后的日期是: $_afterDaysDate")
              : const SizedBox()),
          const SizedBox(height: 50),

          /// 计算日期差
          const Text("计算日期差"),
          RichText(
            text: TextSpan(
              style: DefaultTextStyle.of(context).style,
              children: [
                /// 日期选择器
                WidgetSpan(
                  alignment: PlaceholderAlignment.middle,
                  child: ElevatedButton(
                    onPressed: () async {
                      openDatePicker(context, _date1);
                    },
                    child: Obx(
                      () => Text(
                        _formatDate(_date1.value),
                      ),
                    ),
                  ),
                ),
                const WidgetSpan(
                  alignment: PlaceholderAlignment.middle,
                  child: Text(" 与 "),
                ),
                WidgetSpan(
                  alignment: PlaceholderAlignment.middle,
                  child: ElevatedButton(
                    onPressed: () async {
                      openDatePicker(context, _date2);
                    },
                    child: Obx(
                      () => Text(
                        _formatDate(_date2.value),
                      ),
                    ),
                  ),
                ),
                WidgetSpan(
                  alignment: PlaceholderAlignment.middle,
                  child: Obx(() => Text(
                        " 相差 ${_date1.value.difference(_date2.value).inDays} 天",
                      )),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
