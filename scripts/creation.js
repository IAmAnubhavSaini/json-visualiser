(function (app) {
    'use strict'

    const createKey = function (key) {
        return '<div class="key">' + key + '</div>'
    }

    const createArrayItemList = function (obj, key, level) {
        let valEl
        const list = obj[key].map(function (x, i, a) {
            valEl = createFullMap(a, i, level + 1)
            return '<div class="list-item v">' + valEl + '</div>'
        })
        return '<div class="list">' + list.join('') + '</div>'
    }

    const createKeyValPair = function (level, keyElement, valueElement) {
        return '<div class="kv l' + level + '">' + keyElement + '<div class="value">' + valueElement + '</div>' + '</div>'
    }

    const createLiteralValue = function (value) {
        return '<span class="v">' + value + '</span>'
    }
    const literal = function (type) {
        return type === 'number' || type === 'string' || type === 'boolean'
    }
    const array = function (value) {
        return Array.isArray(value)
    }
    const object = function (type) {
        return type === typeof {}
    }
    const createFullMap = function (obj, key, level) {
        const keyEl = createKey(key)
        let valEl
        const value = obj[key]
        if (literal(typeof value)) {
            valEl = createLiteralValue(value)
        } else if (array(value)) {
            valEl = createArrayItemList(obj, key, level)
        } else if (object(typeof value)) {
            valEl = Object.keys(value).map(function (k) {
                return createFullMap(value, k, level + 1)
            }).join('')
        }
        return createKeyValPair(level, keyEl, valEl)
    }

    app.ACTIONS = app.ACTIONS || {}
    app.ACTIONS.createArrayItemList = createArrayItemList
    app.ACTIONS.createFullMap = createFullMap

})(window.OM || (window.OM = {}))
