(function (app) {
  'use strict';

  var initialLevel = 0;
  var jsonAll = app.DATA.jsonAll = [ app.DATA.jsonMix, app.DATA.jsonSample, app.DATA.jsonComplexArray ];
  var addToPage = function(data) {
    var div = document.createElement('div');
    div.innerHTML = data;
    document.getElementById('writable').appendChild(div);
  }
  jsonAll.map(JSON.parse).forEach(function(obj) {
    var dataToWrite = Object.keys(obj).map(function(key) {
      return app.ACTIONS.createFullMap(obj, key, initialLevel)
    }).join('');
    addToPage(dataToWrite);
  });  

})(window.OM || (window.OM = {}));
