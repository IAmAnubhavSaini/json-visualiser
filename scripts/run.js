(function (app) {
  'use strict'

  var initialLevel = 0
  var jsonAll = app.DATA.jsonAll = [ app.DATA.jsonMix, app.DATA.jsonSample, app.DATA.jsonComplexArray ]
  var addToPage = function(data) {
    var div = document.createElement('div')
    div.innerHTML = data
    div.className = 'kv-item'
    document.getElementById('writable').appendChild(div)
  }
  var generateData = function(obj) {
    return Object.keys(obj).map(function(key) {
      return app.ACTIONS.createFullMap(obj, key, initialLevel)
    }).join('')
  }
  jsonAll.map(JSON.parse).map(generateData).forEach(function(data) {
    addToPage(data)
  })

  app.ACTIONS.generate = function () {
    var json = document.getElementById('json').value
    var obj = JSON.parse(json)
    var writable = document.getElementById('writable')
    var oldData = writable.innerHTML
    var newData = generateData(obj)
    writable.innerHTML = ''
    addToPage(newData)
    addToPage(oldData)
  }
})(window.OM || (window.OM = {}))
