import 'package:flutter/material.dart';
import 'package:tools/utils/date/date_picker.dart';

class DateDifference extends StatefulWidget {
  const DateDifference({super.key});

  @override
  State<DateDifference> createState() => _DateDifferenceState();
}

class _DateDifferenceState extends State<DateDifference> {
  DateTime firstDay = DateTime.now();
  DateTime secondDay = DateTime.now();

  Widget _buildDateInput(
      {required BuildContext context,
      required String title,
      required DateTime date,
      required Function() onTap}) {
    return Wrap(
      crossAxisAlignment: WrapCrossAlignment.center,
      children: [
        Text(
          title,
          style: TextStyle(
              fontWeight: FontWeight.bold,
              color: Theme.of(context).textTheme.bodyMedium!.color),
        ),
        InkWell(
          onTap: onTap,
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
              formatDate(date),
            ),
          ),
        ),
      ],
    );
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
              "计算日期差",
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: _buildDateInput(
                  context: context,
                  title: "第一个日期: ",
                  date: firstDay,
                  onTap: () async {
                    final selectDate =
                        await openDatePicker(context, initialDate: firstDay);
                    if (selectDate != null) {
                      firstDay = selectDate;
                      setState(() {});
                    }
                  }),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: _buildDateInput(
                  context: context,
                  title: "第二个日期: ",
                  date: secondDay,
                  onTap: () async {
                    final selectDate =
                        await openDatePicker(context, initialDate: secondDay);
                    if (selectDate != null) {
                      secondDay = selectDate;
                      setState(() {});
                    }
                  }),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10),
              child: Text(
                "相差 ${firstDay.difference(secondDay).inDays.abs()} 天",
                style:
                    const TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
              ),
            )
          ],
        ),
      ),
    );
  }
}
