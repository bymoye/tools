import 'package:http/http.dart';
import 'package:tools/agent/abstract.dart';

class APIProvider {
  static final HttpAgent httpAgent = HttpAgent("https://api.nmxc.ltd");
  static Future<Response> getUa() async {
    return await httpAgent.get(path: "/ua");
  }

  static Future<(DateTime, double)> getSysTime() async {
    /// 请求开始时间
    final int t1 = DateTime.now().millisecondsSinceEpoch;

    /// 发起请求
    var r = await httpAgent.get(path: "/timestamp");

    /// 请求结束时间
    final int t3 = DateTime.now().millisecondsSinceEpoch;
    if (r.statusCode == 204) {
      /// 从响应头中获取接收时间
      final int serverTime = int.parse(r.headers["timestamp"]!);

      /// 延迟
      final int delay = (t3 - t1) ~/ 2;

      return (
        DateTime.fromMillisecondsSinceEpoch(serverTime, isUtc: true),
        delay / 1000
      );
    }
    return (DateTime.now().toUtc(), 0.0);
  }
}
