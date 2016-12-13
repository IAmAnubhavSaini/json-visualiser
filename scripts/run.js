(function (app) {
  'use strict';

  var initialLevel = 0;
  var jsonAll = app.DATA.jsonAll = [ app.DATA.jsonMix, app.DATA.jsonSample, app.DATA.jsonComplexArray ];
  
  jsonAll.map(JSON.parse).forEach(function(obj) {
    var dataToWrite = Object.keys(obj).map(function(key) {
      return app.ACTIONS.createFullMap(obj, key, initialLevel)
    }).join('');
    document.write(dataToWrite);
  });  

})(window.OM || (window.OM = {}));
