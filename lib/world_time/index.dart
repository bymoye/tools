import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:tools/agent/api.dart';
import 'package:web/web.dart' as web;
import 'package:intl/intl.dart';

class WorldTimePage extends StatefulWidget {
  const WorldTimePage({super.key});

  @override
  State<WorldTimePage> createState() => _WorldTimeState();
}

class _WorldTimeState extends State<WorldTimePage>
    with TickerProviderStateMixin {
  Ticker? _ticker;
  Timer? _visibilityChangeTimer;
  StreamSubscription<web.Event>? _visibilityChangeSubscription;

  Duration _duration = const Duration(seconds: 1);
  int _visibilityChangeInt = 0;
  final DateTime _currentTime = DateTime.now();
  DateTime? remoteTime;
  double? delay;
  bool lock = false;

  String get formattedTimeZoneOffset {
    final Duration timeZoneOffset = _currentTime.timeZoneOffset;
    final String sign = timeZoneOffset.isNegative ? '-' : '+';
    final int hours = timeZoneOffset.inHours.abs();
    final int minutes = (timeZoneOffset.inMinutes % 60).abs();

    return '$sign${hours.toString().padLeft(2, '0')}:${minutes.toString().padLeft(2, '0')}';
  }

  DateTime get displayRemoteTime {
    return remoteTime!.add(_duration);
  }

  @override
  void initState() {
    super.initState();
    fetchWorldTime();
    _initializeVisibilityChangeListener();
  }

  void _initializeVisibilityChangeListener() {
    _visibilityChangeSubscription =
        web.document.onVisibilityChange.listen((event) {
      if (web.document.hidden) {
        _startVisibilityChangeTimer();
      } else {
        _stopVisibilityChangeTimer();
        _resumeWorldTimeIfNeeded();
      }
    });
  }

  void _startVisibilityChangeTimer() {
    _visibilityChangeTimer =
        Timer.periodic(const Duration(seconds: 1), (timer) {
      _visibilityChangeInt = timer.tick;
      web.document.title = "⏰ ${timer.tick} 秒";
      if (timer.tick > 30) {
        timer.cancel();
        _ticker?.stop();
        remoteTime = null;
        web.document.title = "💤 已休眠";
      }
    });
  }

  void _stopVisibilityChangeTimer() {
    _visibilityChangeTimer?.cancel();
  }

  void _resumeWorldTimeIfNeeded() {
    if (_visibilityChangeInt > 30) {
      fetchWorldTime();
    }
    _visibilityChangeInt = 0;
    web.document.title = "世界时间";
  }

  void fetchWorldTime() async {
    if (lock) return;
    lock = true;

    try {
      var data = await APIProvider.getSysTime();
      if (!mounted) return;
      setState(() {
        remoteTime = data.$1;
        delay = data.$2;
      });

      _updateTicker();
    } finally {
      lock = false;
    }
  }

  void _updateTicker() {
    _ticker?.dispose();
    _ticker = createTicker((Duration duration) {
      setState(() {
        _duration = duration;
      });
      if (duration.inSeconds != 0 && duration.inSeconds % 60 == 0) {
        fetchWorldTime();
      }
    });
    _ticker?.start();
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
          Divider(
              color: isDarkMode
                  ? Colors.grey[700]
                  : Theme.of(context).primaryColor),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDarkMode = theme.brightness == Brightness.dark;

    return Center(
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
                        : DateFormat('yyyy-MM-dd HH:mm:ss.SSS')
                            .format(displayRemoteTime),
                  ),
                  if (remoteTime != null) ...[
                    _buildTimeSection(
                      context,
                      isDarkMode: isDarkMode,
                      title: "当前时区时间",
                      content: DateFormat('yyyy-MM-dd HH:mm:ss.SSS')
                          .format(displayRemoteTime.toLocal()),
                    ),
                    _buildTimeSection(
                      context,
                      isDarkMode: isDarkMode,
                      title: "精准度偏差",
                      content: "±$delay 秒钟",
                    ),
                  ],
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
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _ticker?.dispose();
    _visibilityChangeTimer?.cancel();
    _visibilityChangeSubscription?.cancel();
    super.dispose();
  }
}
