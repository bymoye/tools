import 'package:dio/dio.dart';
import 'package:tools/agent/abstract.dart';

class APIProvider {
  static final DioAgent dioAgent = DioAgent("https://api.nmxc.ltd");
  static Future<Response> getUa() async {
    return await dioAgent.get("/ua");
  }
}
