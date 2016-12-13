(function (app) {
  app.DATA = app.DATA || {};

  app.DATA.jsonComplexArray = `{
    "name": [
      { "name": "a", "value": ["b", "c", "d"] },
      { "name": "b", "value": "bb" },
      { "name": "c", "value": [
          { "id": "0", "val": "99" },
          { "id": "1", "val": "199" },
          { "id": "2", "val": "299" }
      ] },
      { "name": "d", "value": "bbbb" }
    ]
  }`;
})(window.OM || (window.OM = {}));
