package io.swagger.server.model


/**
 * @param id  for example: ''1234''
 * @param status  for example: ''active''
 * @param username  for example: ''mb1234''
 * @param password  for example: ''guest123''
 * @param comment  for example: ''main mail account''
 */
case class MailOrder (
  id: Int,
  status: String,
  username: String,
  password: Option[String],
  comment: Option[String]
)

