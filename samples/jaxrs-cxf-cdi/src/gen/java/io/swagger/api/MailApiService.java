package io.swagger.api;

import io.swagger.api.*;
import io.swagger.model.*;

import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.apache.cxf.jaxrs.ext.multipart.Multipart;

import io.swagger.model.Error;
import io.swagger.model.GenericResponse;
import io.swagger.model.MailLog;
import io.swagger.model.MailOrder;
import io.swagger.model.MailOrders;

import java.util.List;

import java.io.InputStream;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaJAXRSCXFCDIServerCodegen", date = "2021-04-06T14:14:52.665415-04:00[America/New_York]")public interface MailApiService {
      public Response getMailById(Long id, SecurityContext securityContext);
      public Response getMailOrders(SecurityContext securityContext);
      public Response placeMailOrder(MailOrder body, SecurityContext securityContext);
      public Response sendMailById(Long id, String subject, String body, String to, String from, SecurityContext securityContext);
      public Response validateMailOrder(SecurityContext securityContext);
      public Response viewMailLogById(Long id, String searchString, Integer skip, Integer limit, SecurityContext securityContext);
}
