(function (app) {
  app.ACTIONS = app.ACTIONS || {};

  var createArrayItemList = function (obj, key, level) {
    var valEl;
    var list = obj[key].map(function(x, i, a) {
      valEl = createFullMap(a, i, level + 1)
      return '<div class="list-item v">' + valEl + '</div>';
    });
    var val = '<div class="list">' + list.join('') + '</div>';
    return val;
  };

  var createFullMap = function (obj, key, level) {
    var keyEl =  '<div class="key">' + key + '</div>';
    var valEl;
    var objKey = obj[key];
    var typeofObjKey = typeof objKey;
    if(typeofObjKey === typeof 'string') {
      valEl = '<span class="v">' + objKey + '</span>';
      // console.log(objKey, typeofObjKey, valEl, level);
    }
    else if(Array.isArray(objKey)){
      valEl = createArrayItemList(obj, key, level);
    }
    else if(typeofObjKey === typeof {}) {
      valEl = Object.keys(obj[key]).map(function(k) {
        return createFullMap(obj[key], k, level + 1);
      }).join('');
    }
    return '<div class="kv l' + level + '">' + keyEl + '<div class="value">' + valEl + '</div></div>';
  };

  app.ACTIONS.createArrayItemList = createArrayItemList;
  app.ACTIONS.createFullMap = createFullMap;

})(window.OM || (window.OM = {}));
