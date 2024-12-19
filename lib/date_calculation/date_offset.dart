import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:tools/utils/date/date_picker.dart';

class DateOffset extends StatefulWidget {
  const DateOffset({super.key});

  @override
  State<DateOffset> createState() => _DateOffsetState();
}

class _DateOffsetState extends State<DateOffset> {
  /// 计算几天后的日期
  DateTime _date = DateTime.now();

  /// 计算几天后的日期
  int offsetDays = 0;

  /// x天后的日期
  String get _afterDaysDate {
    try {
      DateTime newDate = _date.add(Duration(days: offsetDays));
      return formatDate(newDate);
    } catch (e) {
      return "日期计算错误";
    }
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.9,
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            const Text(
              "计算日期偏移",
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: Wrap(
                crossAxisAlignment: WrapCrossAlignment.center,
                children: [
                  Text(
                    "当前日期:",
                    style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Theme.of(context).textTheme.bodyMedium!.color),
                  ),
                  InkWell(
                    onTap: () async {
                      DateTime? selectDate =
                          await openDatePicker(context, initialDate: _date);
                      if (selectDate != null) {
                        _date = selectDate;
                        setState(() {});
                      }
                    },
                    child: Container(
                      padding: const EdgeInsets.all(10),
                      margin: const EdgeInsets.symmetric(horizontal: 10),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: Theme.of(context).dividerColor,
                        ),
                        borderRadius: BorderRadius.circular(5),
                      ),
                      child: Text(
                        formatDate(_date),
                        style: const TextStyle(fontSize: 16),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Wrap(
              crossAxisAlignment: WrapCrossAlignment.center,
              children: [
                const Text(
                  "相差: ",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  child: SizedBox(
                    width: 100,
                    child: TextField(
                      keyboardType: TextInputType.number,
                      inputFormatters: [
                        FilteringTextInputFormatter.allow(
                            RegExp(r"^-?[0-9]*$")),
                      ],
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontWeight: FontWeight.bold),
                      onChanged: (String value) {
                        offsetDays = int.tryParse(value) ?? 0;
                        setState(() {});
                      },
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        contentPadding: EdgeInsets.symmetric(vertical: 8),
                      ),
                    ),
                  ),
                ),
                const Text(
                  "天",
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
              ],
            ),
            Text(
              "*输入负数表示之前的日期",
              style: TextStyle(
                  color: Colors.grey[600], fontStyle: FontStyle.italic),
            ),
            if (offsetDays != 0)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 20),
                child: Text(
                  "${offsetDays.abs()}天${offsetDays.isNegative ? "前" : "后"}的日期是: $_afterDaysDate",
                  style: const TextStyle(fontSize: 18),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
