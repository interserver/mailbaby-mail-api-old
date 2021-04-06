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
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MailBabyApi);
  }
}(this, function(expect, MailBabyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MailBabyApi.GenericResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GenericResponse', function() {
    it('should create an instance of GenericResponse', function() {
      // uncomment below and update the code to test GenericResponse
      //var instane = new MailBabyApi.GenericResponse();
      //expect(instance).to.be.a(MailBabyApi.GenericResponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new MailBabyApi.GenericResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusText (base name: "status_text")', function() {
      // uncomment below and update the code to test the property statusText
      //var instane = new MailBabyApi.GenericResponse();
      //expect(instance).to.be();
    });

  });

}));
