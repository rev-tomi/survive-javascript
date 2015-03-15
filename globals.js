demo.globals = function() {
  var a = 0;
  for (i = 0; i < 10; i++) { // oops
    a += i;
  }
};
demo.globals();
demo.appendText('i: ' + i + '<br>');
