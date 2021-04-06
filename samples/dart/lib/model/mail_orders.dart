part of swagger.api;

class MailOrders {
  
  MailOrders();

  @override
  String toString() {
    return 'MailOrders[]';
  }

  MailOrders.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
  }

  Map<String, dynamic> toJson() {
    return {
     };
  }

  static List<MailOrders> listFromJson(List<dynamic> json) {
    return json == null ? new List<MailOrders>() : json.map((value) => new MailOrders.fromJson(value)).toList();
  }

  static Map<String, MailOrders> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, MailOrders>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new MailOrders.fromJson(value));
    }
    return map;
  }
}
