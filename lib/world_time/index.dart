import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
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
    return '${hours.isNegative ? "-" : "+"}'
        '${hours.abs().toString().padLeft(2, '0')}:${minutes.abs().toString().padLeft(2, '0')}';
  }

  DateTime get displayRemoteTime {
    return remoteTime!.add(_duration);
  }

  @override
  void initState() {
    super.initState();
    fetchWorldTime();
  }

  void fetchWorldTime() async {
    if (lock) return;
    lock = true;
    var data = await APIProvider.getSysTime();
    setState(() {
      remoteTime = data.$1;
      delay = data.$2;
    });
    _ticker?.dispose();
    _ticker = createTicker((Duration duration) {
      setState(() {
        _duration = duration;
      });
      // _duration = duration;
      if (duration.inSeconds != 0 && duration.inSeconds % 60 == 0) {
        fetchWorldTime();
      }
    });
    _ticker?.start();
    lock = false;
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDarkMode = theme.brightness == Brightness.dark;

    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Card(
              elevation: 8,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
              ),
              color: isDarkMode ? Colors.grey[850] : Colors.white,
              child: Padding(
                padding: const EdgeInsets.all(24.0),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    _buildTimeSection(
                      context,
                      isDarkMode: isDarkMode,
                      title: "标准(UTC)时间",
                      content: remoteTime == null
                          ? "校准中..."
                          : displayRemoteTime.toString(),
                    ),
                    if (remoteTime != null)
                      _buildTimeSection(
                        context,
                        isDarkMode: isDarkMode,
                        title: "精准度偏差",
                        content: "±$delay 秒钟",
                      ),
                    _buildTimeSection(
                      context,
                      isDarkMode: isDarkMode,
                      title: "当前设备时区",
                      content: _currentTime.timeZoneName,
                    ),
                    _buildTimeSection(
                      context,
                      isDarkMode: isDarkMode,
                      title: "当前设备时区偏移",
                      content: formattedTimeZoneOffset,
                    ),
                    if (remoteTime != null)
                      _buildTimeSection(
                        context,
                        isDarkMode: isDarkMode,
                        title: "当前时区时间",
                        content: displayRemoteTime.toLocal().toString(),
                      ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildTimeSection(BuildContext context,
      {required bool isDarkMode,
      required String title,
      required String content}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12.0),
      child: Column(
        children: [
          Text(
            title,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: isDarkMode ? Colors.lightBlue[100] : Colors.blue[700],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            content,
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 24,
              fontWeight: FontWeight.w500,
              color: isDarkMode ? Colors.white : Colors.black87,
            ),
          ),
          const SizedBox(height: 8),
          Divider(color: isDarkMode ? Colors.grey[700] : Colors.grey[300]),
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
