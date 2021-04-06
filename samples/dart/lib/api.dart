library swagger.api;

import 'dart:async';
import 'dart:convert';
import 'package:http/browser_client.dart';
import 'package:http/http.dart';

part 'api_client.dart';
part 'api_helper.dart';
part 'api_exception.dart';
part 'auth/authentication.dart';
part 'auth/api_key_auth.dart';
part 'auth/oauth.dart';
part 'auth/http_basic_auth.dart';

part 'api/default_api.dart';
part 'model/error.dart';
part 'model/generic_response.dart';
part 'model/mail_log.dart';
part 'model/mail_order.dart';
part 'model/mail_orders.dart';

ApiClient defaultApiClient = new ApiClient();
