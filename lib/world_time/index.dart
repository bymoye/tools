import 'dart:convert';
import 'dart:developer';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/agent/api.dart';

class WorldTime extends StatefulWidget {
  const WorldTime({super.key});

  @override
  State<WorldTime> createState() => _WorldTimeState();
}

class _WorldTimeState extends State<WorldTime> with TickerProviderStateMixin {
  Ticker? _ticker;
  Duration _duration = const Duration(seconds: 1);
  late final DateTime _currentTime = DateTime.now();
  DateTime? remoteTime;
  double? delay;
  bool lock = false;

  String get formattedTimeZoneOffset {
    /// 时区偏移, 需要显示为+/-HH:MM格式
    final Duration timeZoneOffset = _currentTime.timeZoneOffset;
    final int hours = timeZoneOffset.inHours;
    final int minutes = timeZoneOffset.inMinutes % 60;
    return '${hours.isNegative ? "-" : "+"}${hours.abs().toString().padLeft(2, '0')}:${minutes.abs().toString().padLeft(2, '0')}';
  }

  DateTime get displayRemoteTime {
    return remoteTime!.add(_duration);
  }

  // DateTime? get worldTime => remoteTime?.add(_duration);

  @override
  void initState() {
    super.initState();
    fetchWorldTime();
  }

  void fetchWorldTime() async {
    if (lock) return;
    lock = true;
    var data = await APIProvider.getSysTime();
    remoteTime = data.$1;
    delay = data.$2;
    // setState(() {
    //   remoteTime = DateTime.parse(jsonDecode(r.data.toString())["sysTime2"]);
    // });
    /// 每当remoteTime为整数分钟时，重新校准偏移值
    _ticker?.dispose();
    _ticker = createTicker((Duration duration) {
      _duration = duration;
      if (duration.inSeconds != 0 && duration.inSeconds % 60 == 0) {
        fetchWorldTime();
      }
    });
    _ticker?.start();
    lock = false;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const Text("标准(UTC)时间"),
          if (remoteTime == null)
            const Text("校准中...")
          else ...[
            Text(
              displayRemoteTime.toString(),
              style: const TextStyle(fontSize: 24),
            ),
            Text(
              "精准度偏差： ±$delay 秒钟",
              style: const TextStyle(fontSize: 24),
            ),
          ],

          /// 本地时间(需要实时更新)

          const Text("当前设备时区"),
          Text(
            _currentTime.timeZoneName,
            style: const TextStyle(fontSize: 24),
          ),
          const Text("当前设备时区偏移"),
          Text(
            formattedTimeZoneOffset,
            style: const TextStyle(fontSize: 24),
          ),
          if (remoteTime != null) ...[
            const Text("当前时区时间"),
            Text(
              displayRemoteTime.toLocal().toString(),
              style: const TextStyle(fontSize: 24),
            )
          ],
          // Text(_duration.toString())
        ],
      ),
    );
  }

  @override
  void dispose() {
    _ticker?.dispose();
    super.dispose();
  }
}
