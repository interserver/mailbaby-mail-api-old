package io.swagger.server.model


/**
 * @param status  for example: ''ok''
 * @param status_text  for example: ''The command completed successfully.''
 */
case class GenericResponse (
  status: Option[String],
  status_text: Option[String]
)

