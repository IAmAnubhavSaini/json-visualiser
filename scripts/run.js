(function (app) {
    'use strict'

    const initialLevel = 0
    const jsonAll = app.DATA.jsonAll = [app.DATA.jsonMix, app.DATA.jsonSample, app.DATA.jsonComplexArray]
    const addToPage = function (data) {
        const div = document.createElement('div')
        div.innerHTML = data
        div.className = 'kv-item'
        document.getElementById('writable').appendChild(div)
    }
    const generateData = function (obj) {
        return Object.keys(obj).map(function (key) {
            return app.ACTIONS.createFullMap(obj, key, initialLevel)
        }).join('')
    }
    jsonAll.map(JSON.parse).map(generateData).forEach(function (data) {
        addToPage(data)
    })

    app.ACTIONS.generate = function () {
        const json = document.getElementById('json').value
        const obj = JSON.parse(json)
        const writable = document.getElementById('writable')
        const oldData = writable.innerHTML
        const newData = generateData(obj)
        writable.innerHTML = ''
        addToPage(newData)
        addToPage(oldData)
    }
})(window.OM || (window.OM = {}))
