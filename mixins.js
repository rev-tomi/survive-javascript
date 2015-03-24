demo.createCat = function(name) {
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
  
  result.compareTo = function(otherCat) {
    return name.localeCompare(otherCat.getName());    
  }
  
  return result;
};

demo.addComparableMixin = function(obj) {
  obj.smaller = function(other) {
    return obj.compareTo(other) === -1; // depending on compareTo
  };
  obj.greater = function(other) {
    return obj.compareTo(other) === 1; // depending on compareTo
  };
  // ... more operators
}

demo.addCounterMixin = function(obj) {
  var counter = 0; // state of the mixin
  obj.increment = function() {
    counter++;
  }
  obj.getCount = function() {
    return counter;
  }
}

// only for demo: global variables
var frici = demo.createCat("Frici");
var mici = demo.createCat("Mici");

demo.addComparableMixin(frici);
demo.addComparableMixin(mici);

demo.appendText("is frici smaller than mici? " + frici.smaller(mici) + "<br>");
demo.appendText("is frici greater than mici? " + frici.greater(mici) + "<br>");

demo.addCounterMixin(frici);
frici.increment();
frici.increment();
demo.appendText("frici counter: " + frici.getCount() + "<br>");