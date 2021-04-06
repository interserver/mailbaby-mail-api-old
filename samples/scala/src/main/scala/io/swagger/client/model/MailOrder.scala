/**
 * Mail Baby API
 * This is an API for accesssing the mail services.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: detain@interserver.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
package io.swagger.client.model


/**
 * @param id  for example: '''1234'''
 * @param status  for example: '''active'''
 * @param username  for example: '''mb1234'''
 * @param password  for example: '''guest123'''
 * @param comment  for example: '''main mail account'''
 */
case class MailOrder (
  id: Integer,
  status: String,
  username: String,
  password: Option[String] = None,
  comment: Option[String] = None
)

