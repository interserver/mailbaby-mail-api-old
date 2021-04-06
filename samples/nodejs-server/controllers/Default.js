'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.getMailById = function getMailById (req, res, next, id) {
  Default.getMailById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMailOrders = function getMailOrders (req, res, next) {
  Default.getMailOrders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingServer = function pingServer (req, res, next) {
  Default.pingServer()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.placeMailOrder = function placeMailOrder (req, res, next, body) {
  Default.placeMailOrder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendMailById = function sendMailById (req, res, next, id, subject, body, to, from) {
  Default.sendMailById(id, subject, body, to, from)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.validateMailOrder = function validateMailOrder (req, res, next) {
  Default.validateMailOrder()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewMailLogById = function viewMailLogById (req, res, next, id, searchString, skip, limit) {
  Default.viewMailLogById(id, searchString, skip, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
