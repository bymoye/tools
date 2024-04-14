import 'package:flutter/material.dart';

class WorldTime extends StatelessWidget {
  const WorldTime({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        // mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text("世界时间"),
          const Text("Hello WorldTime!"),
        ],
      ),
    );
  }
}
