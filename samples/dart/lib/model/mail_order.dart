part of swagger.api;

class MailOrder {
  
  int id = null;

  String status = null;

  String username = null;

  String password = null;

  String comment = null;

  MailOrder();

  @override
  String toString() {
    return 'MailOrder[id=$id, status=$status, username=$username, password=$password, comment=$comment, ]';
  }

  MailOrder.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    id = json['id'];
    status = json['status'];
    username = json['username'];
    password = json['password'];
    comment = json['comment'];
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'status': status,
      'username': username,
      'password': password,
      'comment': comment
     };
  }

  static List<MailOrder> listFromJson(List<dynamic> json) {
    return json == null ? new List<MailOrder>() : json.map((value) => new MailOrder.fromJson(value)).toList();
  }

  static Map<String, MailOrder> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MailOrder>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MailOrder.fromJson(value));
    }
    return map;
  }
}
