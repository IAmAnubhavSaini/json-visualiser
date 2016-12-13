(function (app) {

  var jsonMix = app.DATA.jsonMix;
  var jsonSample = app.DATA.jsonSample;
  var jsonComplexArray = app.DATA.jsonComplexArray;
  var jsonAll = app.DATA.jsonAll = [ jsonMix, jsonSample, jsonComplexArray ];
  var createFullMap = app.ACTIONS.createFullMap;
  var getJSObject = function (json) { return JSON.parse(json); }
  var getObjectKeys = function (obj) { return Object.keys(obj); }
  var generateFullMap = function(key, obj, initialLevel) { return createFullMap(obj, key, initialLevel); };
  var writeOnDocument = function (keys, obj, initialLevel) { 
    document.write(keys.map(function(key) {
      return generateFullMap(key, obj, initialLevel);
    }).join(''));
  };
  jsonAll.forEach(function(json, i, a) {
    var obj = getJSObject(json);
    var keys = getObjectKeys(obj);
    var initialLevel = 0;
    writeOnDocument(keys, obj, initialLevel);
  });  

})(window.OM || (window.OM = {}));
