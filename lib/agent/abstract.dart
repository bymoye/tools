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

  Future<Response> Function<T>(String path,
      {CancelToken? cancelToken,
      Object? data,
      ProgressCallback? onReceiveProgress,
      Options? options,
      Map<String, dynamic>? queryParameters}) get get => dio.get;

  Future<Response> Function<T>(String path,
      {CancelToken? cancelToken,
      Object? data,
      ProgressCallback? onReceiveProgress,
      Options? options,
      Map<String, dynamic>? queryParameters}) get post => dio.post;

  Future<Response> Function<T>(String path,
      {CancelToken? cancelToken,
      Object? data,
      ProgressCallback? onReceiveProgress,
      Options? options,
      Map<String, dynamic>? queryParameters}) get put => dio.put;

  Future<Response> Function<T>(String path,
      {CancelToken? cancelToken,
      Object? data,
      Options? options,
      Map<String, dynamic>? queryParameters}) get delete => dio.delete;

  Future<Response> Function<T>(String path,
      {CancelToken? cancelToken,
      Object? data,
      Options? options,
      Map<String, dynamic>? queryParameters}) get patch => dio.patch;

  Future<Response> Function<T>(String path,
      {CancelToken? cancelToken,
      Object? data,
      Options? options,
      Map<String, dynamic>? queryParameters}) get head => dio.head;

  Future<Response> Function(String urlPath, dynamic savePath,
      {CancelToken? cancelToken,
      Object? data,
      bool deleteOnError,
      String lengthHeader,
      ProgressCallback? onReceiveProgress,
      Options? options,
      Map<String, dynamic>? queryParameters}) get download => dio.download;
}
