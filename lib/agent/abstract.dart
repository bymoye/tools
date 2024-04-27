import 'package:dio/dio.dart';

class DioAgent {
  final Dio dio;

  DioAgent(String baseUrl) : dio = Dio(BaseOptions(baseUrl: baseUrl)) {
    dio.interceptors.add(
      InterceptorsWrapper(onRequest:
          (RequestOptions options, RequestInterceptorHandler handler) {
        options.extra = {"startTime": DateTime.now().millisecondsSinceEpoch};
        return handler.next(options);
      }, onResponse: (response, handler) {
        response.extra["endTime"] = DateTime.now().millisecondsSinceEpoch;
        return handler.next(response);
      }),
    );
  }

  Future<Response> get(String path,
      {Map<String, dynamic>? queryParameters, Options? options}) {
    return dio.get(path, queryParameters: queryParameters, options: options);
  }

  Future<Response> post(String path,
      {Map<String, dynamic>? data, Options? options}) {
    return dio.post(path, data: data, options: options);
  }

  Future<Response> put(String path,
      {Map<String, dynamic>? data, Options? options}) {
    return dio.put(path, data: data, options: options);
  }

  Future<Response> delete(String path,
      {Map<String, dynamic>? data, Options? options}) {
    return dio.delete(path, data: data);
  }

  Future<Response> patch(String path,
      {Map<String, dynamic>? data, Options? options}) {
    return dio.patch(path, data: data);
  }

  Future<Response> head(String path,
      {Map<String, dynamic>? data, Options? options}) {
    return dio.head(path, data: data);
  }

  Future<Response> download(String path, String savePath,
      {ProgressCallback? onReceiveProgress}) {
    return dio.download(path, savePath, onReceiveProgress: onReceiveProgress);
  }
}
