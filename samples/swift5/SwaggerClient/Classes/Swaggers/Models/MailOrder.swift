//
// MailOrder.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct MailOrder: Codable {

    public var _id: Int
    public var status: String
    public var username: String
    public var password: String?
    public var comment: String?

    public init(_id: Int, status: String, username: String, password: String? = nil, comment: String? = nil) {
        self._id = _id
        self.status = status
        self.username = username
        self.password = password
        self.comment = comment
    }

    public enum CodingKeys: String, CodingKey { 
        case _id = "id"
        case status
        case username
        case password
        case comment
    }

}
