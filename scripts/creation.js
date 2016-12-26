(function (app) {
  'use strict'

  var createKey = function(key) {
    return '<div class="key">' + key + '</div>'
  }

  var createArrayItemList = function (obj, key, level) {
    var valEl
    var list = obj[key].map(function(x, i, a) {
      valEl = createFullMap(a, i, level + 1)
      return '<div class="list-item v">' + valEl + '</div>'
    })
    var val = '<div class="list">' + list.join('') + '</div>'
    return val
  }

  var createKeyValPair = function(level, keyElement, valueElement) {
    return '<div class="kv l' + level + '">' +
              keyElement +
              '<div class="value">' + valueElement + '</div>' +
           '</div>'
  }

  var createLiteralValue = function (value) {
    return '<span class="v">' + value + '</span>'
  }
  var literal = function (type) {
    return type === 'number' || type === 'string' || type === 'boolean'
  }
  var array = function (value) {
    return Array.isArray(value)
  }
  var object = function (type) {
    return type === typeof {}
  }
  var createFullMap = function (obj, key, level) {
    var keyEl = createKey(key)
    var valEl
    var value = obj[key]
    if(literal(typeof value)) {
      valEl = createLiteralValue(value)
    } else if(array(value)){
      valEl = createArrayItemList(obj, key, level)
    } else if(object(typeof value)) {
      valEl = Object.keys(value).map(function(k) {
        return createFullMap(value, k, level + 1)
      }).join('')
    }
    return createKeyValPair(level, keyEl, valEl)
  }

  app.ACTIONS = app.ACTIONS || {}
  app.ACTIONS.createArrayItemList = createArrayItemList
  app.ACTIONS.createFullMap = createFullMap

})(window.OM || (window.OM = {}))
