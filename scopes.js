"use strict";

demo.scopes = function() {
  var a = 0;
  for (var i = 0; i < 10; i++) {
    var j = i;
    a += i;
  }
  this.appendText('i, after loop: ' + i + '<br>');
  this.appendText('j, after loop: ' + j + '<br>');
};
demo.scopes();

