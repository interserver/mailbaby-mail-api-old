part of swagger.api;

class MailLog {
  
  int id = null;

  MailLog();

  @override
  String toString() {
    return 'MailLog[id=$id, ]';
  }

  MailLog.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id
     };
  }

  static List<MailLog> listFromJson(List<dynamic> json) {
    return json == null ? new List<MailLog>() : json.map((value) => new MailLog.fromJson(value)).toList();
  }

  static Map<String, MailLog> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MailLog>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MailLog.fromJson(value));
    }
    return map;
  }
}
