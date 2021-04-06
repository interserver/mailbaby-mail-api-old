package io.swagger.api.impl;

import io.swagger.api.*;
import io.swagger.model.Error;
import io.swagger.model.GenericResponse;
import io.swagger.model.MailLog;
import io.swagger.model.MailOrder;
import io.swagger.model.MailOrders;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import org.apache.cxf.jaxrs.model.wadl.Description;
import org.apache.cxf.jaxrs.model.wadl.DocTarget;

import org.apache.cxf.jaxrs.ext.multipart.*;


/**
 * Mail Baby API
 *
 * <p>This is an API for accesssing the mail services.
 *
 */
public class DefaultApiServiceImpl implements DefaultApi {
    /**
     * Gets mail order information by id
     *
     * returns information about a mail order in the system with the given id.
     *
     */
    public MailOrder getMailById(Long id) {
        // TODO: Implement...
        
        return null;
    }
    
    /**
     * displays a list of mail service orders
     *
     */
    public MailOrders getMailOrders() {
        // TODO: Implement...
        
        return null;
    }
    
    /**
     * Checks if the server is running
     *
     */
    public void pingServer() {
        // TODO: Implement...
        
        
    }
    
    /**
     * places a mail order
     *
     * Adds an item to the system
     *
     */
    public void placeMailOrder(MailOrder body) {
        // TODO: Implement...
        
        
    }
    
    /**
     * Sends an Email
     *
     * Sends An email through one of your mail orders.
     *
     */
    public GenericResponse sendMailById(Long id, String subject, String body, String to, String from) {
        // TODO: Implement...
        
        return null;
    }
    
    /**
     * validatess order details before placing an order
     *
     */
    public void validateMailOrder() {
        // TODO: Implement...
        
        
    }
    
    /**
     * displays the mail log
     *
     * By passing in the appropriate options, you can search for available inventory in the system 
     *
     */
    public List<MailLog> viewMailLogById(Long id, String searchString, Integer skip, Integer limit) {
        // TODO: Implement...
        
        return null;
    }
    
}

