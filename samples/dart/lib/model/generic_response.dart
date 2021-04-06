part of swagger.api;

class GenericResponse {
  
  String status = null;

  String statusText = null;

  GenericResponse();

  @override
  String toString() {
    return 'GenericResponse[status=$status, statusText=$statusText, ]';
  }

  GenericResponse.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    status = json['status'];
    statusText = json['status_text'];
  }

  Map<String, dynamic> toJson() {
    return {
      'status': status,
      'status_text': statusText
     };
  }

  static List<GenericResponse> listFromJson(List<dynamic> json) {
    return json == null ? new List<GenericResponse>() : json.map((value) => new GenericResponse.fromJson(value)).toList();
  }

  static Map<String, GenericResponse> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, GenericResponse>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new GenericResponse.fromJson(value));
    }
    return map;
  }
}
