# Mail Baby API
#
# This is an API for accesssing the mail services.
#
# OpenAPI spec version: 1.0.0
# Contact: detain@interserver.net
# Generated by: https://github.com/swagger-api/swagger-codegen.git

#' MailOrders Class
#'
#'
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
MailOrders <- R6::R6Class(
  'MailOrders',
  public = list(
    initialize = function(){
    },
    toJSON = function() {
      MailOrdersObject <- list()

      MailOrdersObject
    },
    fromJSON = function(MailOrdersJson) {
      MailOrdersObject <- jsonlite::fromJSON(MailOrdersJson)
    },
    toJSONString = function() {
       sprintf(
        '{
        }',
      )
    },
    fromJSONString = function(MailOrdersJson) {
      MailOrdersObject <- jsonlite::fromJSON(MailOrdersJson)
    }
  )
)
