package io.swagger.api;

import io.swagger.api.*;
import io.swagger.model.*;

import io.swagger.model.Error;
import io.swagger.model.GenericResponse;
import io.swagger.model.MailLog;
import io.swagger.model.MailOrder;
import io.swagger.model.MailOrders;

import java.util.List;
import io.swagger.api.NotFoundException;

import java.io.InputStream;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaResteasyServerCodegen", date = "2021-04-06T14:15:05.831772-04:00[America/New_York]")public interface MailApiService {
      Response getMailById(Long id,SecurityContext securityContext)
      throws NotFoundException;
      Response getMailOrders(SecurityContext securityContext)
      throws NotFoundException;
      Response placeMailOrder(MailOrder body,SecurityContext securityContext)
      throws NotFoundException;
      Response sendMailById(Long id,String subject,String body,String to,String from,SecurityContext securityContext)
      throws NotFoundException;
      Response validateMailOrder(SecurityContext securityContext)
      throws NotFoundException;
      Response viewMailLogById(Long id,String searchString,Integer skip,Integer limit,SecurityContext securityContext)
      throws NotFoundException;
}
