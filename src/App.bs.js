'use strict';

var Cn = require("re-classnames/src/Cn.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function onChangeText(updator, $$event) {
  var v = $$event.target.value;
  return Curry._1(updator, (function (param) {
                return v;
              }));
}

function App(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var content_set = match[1];
  var content = match[0];
  var match$1 = content.length > 5;
  var validationError = match$1 ? "That message is too long" : undefined;
  return React.createElement("main", undefined, React.createElement("h1", {
                  className: "text-2xl text-gray-800 font-bold"
                }, "Hello!"), React.createElement("input", {
                  className: Cn.make(/* :: */[
                        "border p-2 rounded",
                        /* :: */[
                          Cn.ifSome("border-red-500", validationError),
                          /* [] */0
                        ]
                      ]),
                  type: "text",
                  value: content,
                  onChange: (function (param) {
                      return onChangeText(content_set, param);
                    })
                }), validationError !== undefined ? React.createElement("div", {
                    className: "mt-2 text-red-500"
                  }, validationError) : null);
}

var make = App;

exports.onChangeText = onChangeText;
exports.make = make;
/* react Not a pure module */
