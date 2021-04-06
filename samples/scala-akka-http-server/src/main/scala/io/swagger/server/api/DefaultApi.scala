package io.swagger.server.api

import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.http.scaladsl.unmarshalling.FromRequestUnmarshaller
import akka.http.scaladsl.marshalling.ToEntityMarshaller
import io.swagger.server.AkkaHttpHelper._
import io.swagger.server.model.Error
import io.swagger.server.model.GenericResponse
import io.swagger.server.model.MailLog
import io.swagger.server.model.MailOrder
import io.swagger.server.model.MailOrders

class DefaultApi(
    defaultService: DefaultApiService,
    defaultMarshaller: DefaultApiMarshaller
) {
  import defaultMarshaller._

  lazy val route: Route =
    path() { (id) => 
      get {
        parameters() { () =>
          
            formFields() { () =>
              
                
                  defaultService.getMailById(id = id)
               
             
            }
         
        }
      }
    } ~
    path() { () => 
      get {
        parameters() { () =>
          
            formFields() { () =>
              
                
                  defaultService.getMailOrders()
               
             
            }
         
        }
      }
    } ~
    path() { () => 
      get {
        parameters() { () =>
          
            formFields() { () =>
              
                
                  defaultService.pingServer()
               
             
            }
         
        }
      }
    } ~
    path() { () => 
      post {
        parameters() { () =>
          
            formFields() { () =>
              
                entity(as[MailOrder]){ body =>
                  defaultService.placeMailOrder(body = body)
                }
             
            }
         
        }
      }
    } ~
    path() { (id) => 
      get {
        parameters("subject".as[String].?, "body".as[String].?, "to".as[String].?, "from".as[String].?) { (subject, body, to, from) =>
          
            formFields() { () =>
              
                
                  defaultService.sendMailById(id = id, subject = subject, body = body, to = to, from = from)
               
             
            }
         
        }
      }
    } ~
    path() { () => 
      get {
        parameters() { () =>
          
            formFields() { () =>
              
                
                  defaultService.validateMailOrder()
               
             
            }
         
        }
      }
    } ~
    path() { (id) => 
      get {
        parameters("searchString".as[String].?, "skip".as[Int].?, "limit".as[Int].?) { (searchString, skip, limit) =>
          
            formFields() { () =>
              
                
                  defaultService.viewMailLogById(id = id, searchString = searchString, skip = skip, limit = limit)
               
             
            }
         
        }
      }
    }
}

trait DefaultApiService {

  def getMailById200(responseMailOrder: MailOrder)(implicit toEntityMarshallerMailOrder: ToEntityMarshaller[MailOrder]): Route =
    complete((200, responseMailOrder))
  /**
   * Code: 200, Message: Successful operation, DataType: MailOrder
   */
  def getMailById(id: Long)
      (implicit toEntityMarshallerMailOrder: ToEntityMarshaller[MailOrder]): Route

  def getMailOrders200(responseMailOrders: MailOrders)(implicit toEntityMarshallerMailOrders: ToEntityMarshaller[MailOrders]): Route =
    complete((200, responseMailOrders))
  def getMailOrders401(responseError: Error)(implicit toEntityMarshallerError: ToEntityMarshaller[Error]): Route =
    complete((401, responseError))
  /**
   * Code: 200, Message: OK, DataType: MailOrders
   * Code: 401, Message: Unauthorized, DataType: Error
   */
  def getMailOrders()
      (implicit toEntityMarshallerMailOrders: ToEntityMarshaller[MailOrders], toEntityMarshallerError: ToEntityMarshaller[Error]): Route

  def pingServer200: Route =
    complete((200, "Server is up and running"))
  def pingServer0: Route =
    complete((0, "Something is wrong"))
  /**
   * Code: 200, Message: Server is up and running
   * Code: 0, Message: Something is wrong
   */
  def pingServer()
      (implicit ): Route

  def placeMailOrder200: Route =
    complete((200, "list of mail orders"))
  def placeMailOrder400: Route =
    complete((400, "invalid input, object invalid"))
  def placeMailOrder409: Route =
    complete((409, "an existing item already exists"))
  def placeMailOrder401(responseError: Error)(implicit toEntityMarshallerError: ToEntityMarshaller[Error]): Route =
    complete((401, responseError))
  /**
   * Code: 200, Message: list of mail orders
   * Code: 400, Message: invalid input, object invalid
   * Code: 409, Message: an existing item already exists
   * Code: 401, Message: Unauthorized, DataType: Error
   */
  def placeMailOrder(body: MailOrder)
      (implicit toEntityMarshallerError: ToEntityMarshaller[Error]): Route

  def sendMailById200(responseGenericResponse: GenericResponse)(implicit toEntityMarshallerGenericResponse: ToEntityMarshaller[GenericResponse]): Route =
    complete((200, responseGenericResponse))
  def sendMailById400: Route =
    complete((400, "bad input parameter"))
  def sendMailById401(responseError: Error)(implicit toEntityMarshallerError: ToEntityMarshaller[Error]): Route =
    complete((401, responseError))
  def sendMailById404(responseError: Error)(implicit toEntityMarshallerError: ToEntityMarshaller[Error]): Route =
    complete((404, responseError))
  /**
   * Code: 200, Message: search results matching criteria, DataType: GenericResponse
   * Code: 400, Message: bad input parameter
   * Code: 401, Message: Unauthorized, DataType: Error
   * Code: 404, Message: The specified resource was not found, DataType: Error
   */
  def sendMailById(id: Long, subject: Option[String], body: Option[String], to: Option[String], from: Option[String])
      (implicit toEntityMarshallerGenericResponse: ToEntityMarshaller[GenericResponse], toEntityMarshallerError: ToEntityMarshaller[Error], toEntityMarshallerError: ToEntityMarshaller[Error]): Route

  def validateMailOrder200: Route =
    complete((200, "list of mail orders"))
  def validateMailOrder401(responseError: Error)(implicit toEntityMarshallerError: ToEntityMarshaller[Error]): Route =
    complete((401, responseError))
  /**
   * Code: 200, Message: list of mail orders
   * Code: 401, Message: Unauthorized, DataType: Error
   */
  def validateMailOrder()
      (implicit toEntityMarshallerError: ToEntityMarshaller[Error]): Route

  def viewMailLogById200(responseMailLogarray: List[MailLog])(implicit toEntityMarshallerMailLogarray: ToEntityMarshaller[List[MailLog]]): Route =
    complete((200, responseMailLogarray))
  def viewMailLogById400: Route =
    complete((400, "bad input parameter"))
  /**
   * Code: 200, Message: search results matching criteria, DataType: List[MailLog]
   * Code: 400, Message: bad input parameter
   */
  def viewMailLogById(id: Long, searchString: Option[String], skip: Option[Int], limit: Option[Int])
      (implicit toEntityMarshallerMailLogarray: ToEntityMarshaller[List[MailLog]]): Route

}

trait DefaultApiMarshaller {
  implicit def fromRequestUnmarshallerMailOrder: FromRequestUnmarshaller[MailOrder]


  implicit def toEntityMarshallerMailOrder: ToEntityMarshaller[MailOrder]

  implicit def toEntityMarshallerMailOrders: ToEntityMarshaller[MailOrders]

  implicit def toEntityMarshallerError: ToEntityMarshaller[Error]

  implicit def toEntityMarshallerError: ToEntityMarshaller[Error]

  implicit def toEntityMarshallerGenericResponse: ToEntityMarshaller[GenericResponse]

  implicit def toEntityMarshallerError: ToEntityMarshaller[Error]

  implicit def toEntityMarshallerError: ToEntityMarshaller[Error]

  implicit def toEntityMarshallerError: ToEntityMarshaller[Error]

  implicit def toEntityMarshallerMailLogarray: ToEntityMarshaller[List[MailLog]]

}

