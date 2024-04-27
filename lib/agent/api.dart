import 'dart:developer';

import 'package:dio/dio.dart';
import 'package:tools/agent/abstract.dart';

class APIProvider {
  static final DioAgent dioAgent = DioAgent("http://127.0.0.1:5000");
  static Future<Response> getUa() async {
    return await dioAgent.get("/ua");
  }

  static Future<DateTime> getTime() async {
    var r = await dioAgent.get("/ntp-time");
    if (r.statusCode == 200) {
      /// 从请求头中获取请求时间
      int txTime = r.requestOptions.extra["startTime"];

      /// 从响应头中获取接收时间
      int destTime = r.extra["endTime"];

      /// 从响应体中获取服务器接收请求时间
      int recvTime = (r.data["rev_time"] * 1000).toInt();

      /// 从响应体中获取服务器返回时间
      int origTime = (r.data["server_time"] * 1000).toInt();
      // int txTime = (r.data["return_time"] * 1000).toInt();

      /// 根据 NTP 算法计算时间
      /// revTime + offset + delay / 2 = 精确时间
      /// offset = ((recvTime - origTime + (txTime - destTime)) / 2
      /// delay = (destTime - origTime) - (txTime - recvTime)
      int offset = (recvTime - origTime + (txTime - destTime)) ~/ 2;
      int delay = (destTime - origTime) - (txTime - recvTime);
      // int ntpTime = recvTime + offset + (delay ~/ 2) + (DateTime.now().millisecondsSinceEpoch - destTime);
      return DateTime.fromMillisecondsSinceEpoch(
          recvTime +
              offset +
              (delay ~/ 2) +
              (DateTime.now().millisecondsSinceEpoch - destTime),
          isUtc: true);
    }
    return DateTime.now();
  }
}
// 1714232445300
// 1714232442.7455587