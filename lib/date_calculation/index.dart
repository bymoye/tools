import 'package:flutter/material.dart';
import 'package:tools/date_calculation/date_difference.dart';
import 'package:tools/date_calculation/date_offset.dart';

class DateCalculationPage extends StatelessWidget {
  const DateCalculationPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.all(16.0),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [DateOffset(), DateDifference()],
        ),
      ),
    );
  }
}
