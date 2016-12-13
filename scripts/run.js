(function (app) {

  var jsonMix = app.DATA.jsonMix;
  var jsonSample = app.DATA.jsonSample;
  var jsonComplexArray = app.DATA.jsonComplexArray;
  var jsonAll = app.DATA.jsonAll = [ jsonMix, jsonSample, jsonComplexArray ];
  var createFullMap = app.ACTIONS.createFullMap;
  var initialLevel = 0;
  var getJSObject = function (json) { return JSON.parse(json); }
  var getObjectKeys = function (obj) { return Object.keys(obj); }
  var generateFullMap = function(key) { return createFullMap(jsobj, key, initialLevel); };
  var jsobj = getJSObject(jsonMix);
  var keys = getObjectKeys(jsobj);

  (function writeOnDocument(keys) {
    document.write(keys.map(generateFullMap).join(''));
  })(keys);

})(window.OM || (window.OM = {}));
