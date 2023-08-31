(function (app) {
    'use strict';

    app.DATA = app.DATA || {};

    app.DATA.jsonMix = `{
  "type": "object",
  "$schema": "some schema url",
  "title": "some title",
  "description": "Some description.",
  "properties": {
    "id": {
      "type": "string",
      "format": "uint64",
      "description": "Unique identifier."
    },
    "relative_id": {
      "type": "string",
      "description": "Idempotent key."
    },
    "handler": {
      "type": "string",
      "description": "Unique identifier.",
      "readonly": true
    },
    "amount": {
      "type": "object",
      "$ref": "../amount.json",
      "description": "The amount."
    },
    "fee": {
      "type": "object",
      "$ref": "../fee.json",
      "description": "Th fee."
    },
    "date": {
      "type": "string",
      "description": "The date.",
      "format": "date-time"
    },
    "payback": {
      "type": "object",
      "$ref": "../payback.json",
      "description": "The return on investment."
    },
    "customer": {
      "type": "string",
      "description": "An issued customer account number."
    },
    "country": {
      "type": "string",
      "$ref": "../country.json",
      "description": "A five letter country code."
    },
    "product": {
      "$ref": "../product.json",
      "description": "The product type."
    }
  },
  "required": [
    "relative_id",
    "amount",
    "fee",
    "payback",
    "product",
    "country",
    "customer"
  ]
}`;
})(window.OM || (window.OM = {}));
