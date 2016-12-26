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

  var createFullMap = function (obj, key, level) {
    var keyEl = createKey(key)
    var valEl
    var objKey = obj[key]
    var typeofObjKey = typeof objKey
    if(typeofObjKey === 'number' || typeofObjKey === 'string' || typeofObjKey === 'boolean') {
      valEl = '<span class="v">' + objKey + '</span>'
    } else if(Array.isArray(objKey)){
      valEl = createArrayItemList(obj, key, level)
    } else if(typeofObjKey === typeof {}) {
      valEl = Object.keys(objKey).map(function(k) {
        return createFullMap(objKey, k, level + 1)
      }).join('')
    }
    return createKeyValPair(level, keyEl, valEl)
  }

  app.ACTIONS = app.ACTIONS || {}
  app.ACTIONS.createArrayItemList = createArrayItemList
  app.ACTIONS.createFullMap = createFullMap

})(window.OM || (window.OM = {}))
