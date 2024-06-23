import 'dart:convert';
import 'dart:developer';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

class WorldTime extends StatefulWidget {
  const WorldTime({super.key});

  @override
  State<WorldTime> createState() => _WorldTimeState();
}

class _WorldTimeState extends State<WorldTime> with TickerProviderStateMixin {
  late final Ticker _ticker;
  late final Ticker _ticker2;
  late DateTime _currentTime = DateTime.now();
  Duration _duration = const Duration(seconds: 1);
  DateTime? remoteTime;

  // DateTime? get worldTime => remoteTime?.add(_duration);

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((Duration duration) {
      _updateTime();
    });
    // 5. start ticker
    _ticker.start();
    fetchWorldTime();
  }

  void _updateTime() {
    setState(() {
      _currentTime = DateTime.now();
    });
  }

  void fetchWorldTime() async {
    var r = await Dio().get("http://quan.suning.com/getSysTime.do");
    log(r.data.toString());
    setState(() {
      remoteTime = DateTime.parse(jsonDecode(r.data.toString())["sysTime2"]);
    });
    _ticker2 = createTicker((Duration duration) {
      _duration = duration;
    });
    _ticker2.start();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        // mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text("世界时间"),
          remoteTime == null
              ? const Text("校准中...")
              : Text(
                  remoteTime!.add(_duration).toLocal().toString(),
                  style: const TextStyle(fontSize: 24),
                ),

          /// 本地时间(需要实时更新)
          const Text("本地时间"),
          Text(
            _currentTime.toLocal().toString(),
            style: const TextStyle(fontSize: 24),
          ),

          Text(_duration.toString())
        ],
      ),
    );
  }

  @override
  void dispose() {
    _ticker.dispose();
    _ticker2.dispose();
    super.dispose();
  }
}
