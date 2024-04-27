import 'dart:async';
import 'dart:convert';
import 'dart:developer';

import 'package:dio/dio.dart';
import 'package:refreshed/refreshed.dart';
import 'package:tools/agent/api.dart';

class WorldTimeController extends GetxController {
  final Rx<DateTime?> dateTime = Rx<DateTime?>(null);
  DateTime get worldTime => dateTime.value!;

  Timer? _timer;

  DateTime? lastFetchTime;

  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
    fetchWorldTime();

    /// 每秒执行一次的计时器
    // _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
    //   if (dateTime.value != null) {
    //     dateTime.value = dateTime.value!.add(const Duration(seconds: 1));
    //   }
    // });
  }

  @override
  void onClose() {
    _timer?.cancel();
    super.onClose();
  }

  void fetchWorldTime() async {
    lastFetchTime = DateTime.now();
    var r = await Dio().get("http://quan.suning.com/getSysTime.do");
    log(r.data.toString());
    dateTime.value = DateTime.parse(jsonDecode(r.data.toString())["sysTime2"]);

    // lastFetchTime = DateTime.now();
    // dateTime.value = await APIProvider.getTime();

    /// 无限循环计时器
    _timer ??= Timer.periodic(const Duration(milliseconds: 10), (timer) {
      if (dateTime.value != null) {
        dateTime.value = dateTime.value!.add(const Duration(milliseconds: 10));
      }

      /// 当准点时刷新时间(每分钟的第0秒)
      if (dateTime.value!.second == 0 &&
          lastFetchTime?.minute != dateTime.value!.minute) {
        fetchWorldTime();
      }
    });
  }
}
