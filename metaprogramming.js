Number.prototype.times = function(func) {
  var i;
  for (i = 0; i < this; i++) {
    func();
  }
};
5['times'](function() {
  demo.appendText('hello<br>');
});
