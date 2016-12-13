(function (app) {

  var jsonMix = app.DATA.jsonMix;

  var jsonSample = app.DATA.jsonSample;

  var jsonComplexArray = app.DATA.jsonComplexArray;

  // var allJsons = [jsonMix, jsonSample, jsonComplexArray];

  function getJSObject (json) {
    return JSON.parse(json);
  }

  function getObjectKeys (obj) {
    return Object.keys(obj);
  }

  var jsobj = getJSObject(jsonMix);

  var keys = getObjectKeys(jsobj);

  var createFullMap = app.ACTIONS.createFullMap;

  var generateFullMap = function(key) {
    return createFullMap(jsobj, key, 0);
  };

  (function writeOnDocument(k) {
    document.write(k.map(generateFullMap).join(''));
  })(keys);

})(window.OM || (window.OM = {}));
