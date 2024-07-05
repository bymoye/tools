import 'dart:developer';

import 'package:dio/dio.dart';
import 'package:tools/agent/abstract.dart';

class APIProvider {
  static final DioAgent dioAgent = DioAgent("https://api.nmxc.ltd");
  static Future<Response> getUa() async {
    return await dioAgent.get("/ua");
  }

  static Future<(DateTime, double)> getSysTime() async {
    var r = await dioAgent.get("/timestamp");
    if (r.statusCode == 200) {
      /// 从请求头中获取请求时间
      final int t1 = r.requestOptions.extra["startTime"];
      final int serverTime = r.data["timestamp"];

      /// 从响应头中获取接收时间
      final int t3 = r.extra["endTime"];

      /// 延迟
      final int delay = (t3 - t1) ~/ 2;

      return (
        DateTime.fromMillisecondsSinceEpoch(serverTime, isUtc: true),
        delay / 1000
      );
    }
    return (DateTime.now(), 0.0);
  }
}
