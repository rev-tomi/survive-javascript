demo.createMammal = function(name) { // name hidden, cannot set it
  var result = {};
  result.getName = function() {
    return name;
  }
  result.saymyname = function() {
    return "I'm " + this.getName();
  }
  result.sayhello = function() {
    return "Hello...";
  }
  return result;
}
demo.createCat = function(name) {
  var parent = demo.createMammal(name); // delegating to 'super' constructor
  
  // Object.beget start..
  var F = new Function();
  F.prototype = parent; // function has explicit prototype
  var result = new F();
  // Object.beget end
  
  result.callSuperMethod = function(name, arguments) {
    var method = parent[name];
    return function() {
      method.apply(parent, arguments);
    }();
  }
  
  result.saymyname = function() {
    return "r-r-r-r, " + this.callSuperMethod('saymyname', []) + " r-r-r-r-r";
  }
  
  return result;
}

var m = demo.createMammal('Herb');
demo.appendText("Mammal says his name: " + m.saymyname() + "<br>");
demo.appendText("Mammal says Hello: " + m.sayhello() + "<br>");

var cat = demo.createCat("Ginny");
demo.appendText("Cat says her name: " + cat.saymyname() + "<br>"); // Cannot access super.saymyname() on this cat. Not anymore.
demo.appendText("Cat says hello: " + cat.sayhello() + "<br>");     // However, we can access the non-overridden method .
