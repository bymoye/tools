import 'package:http/http.dart';
import 'package:tools/agent/abstract.dart';

class APIProvider {
  static final HttpAgent httpAgent = HttpAgent("https://api.nmxc.ltd");
  static Future<Response> getUa() async {
    return await httpAgent.get(path: "/ua");
  }

  static Future<(DateTime, double)> getSysTime() async {
    final stopwatch = Stopwatch()..start();

    /// 发起请求
    var r = await httpAgent.get(path: "/timestamp");

    stopwatch.stop();
    if (r.statusCode == 204) {
      /// 从响应头中获取服务器时间戳（毫秒级时间戳）
      final int serverTimeMs = int.parse(r.headers["timestamp"]!);

      /// 延迟时间，以毫秒为单位
      final int delayMs = stopwatch.elapsedMilliseconds ~/ 2;

      return (
        /// 将毫秒时间戳转换为 DateTime
        DateTime.fromMillisecondsSinceEpoch(serverTimeMs, isUtc: true),
        delayMs / 1000 // 转换为秒作为延迟时间
      );
    }

    return (DateTime.now().toUtc(), 0.0);
  }
}
