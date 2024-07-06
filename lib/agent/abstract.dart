import 'package:fetch_client/fetch_client.dart';
import 'package:http/http.dart';

class HttpAgent {
  final String baseUrl;
  final client = FetchClient(mode: RequestMode.cors);

  HttpAgent(this.baseUrl);

  Uri buildUri(String path, Map<String, String>? queryParameters) {
    return Uri.parse(baseUrl)
        .replace(path: path, queryParameters: queryParameters);
  }

  Future<Response> get({
    required String path,
    Map<String, String>? queryParameters,
    Map<String, String>? headers,
  }) =>
      client.get(buildUri(path, queryParameters), headers: headers);

  Future<Response> post({
    required String path,
    Map<String, String>? queryParameters,
    Map<String, String>? headers,
    dynamic body,
  }) =>
      client.post(buildUri(path, queryParameters),
          headers: headers, body: body);
}
