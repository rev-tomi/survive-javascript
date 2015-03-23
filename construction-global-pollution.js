var Mammal = function(name) {
  this.name = name;
}
Mammal.prototype.saymyname = function() {
  return "I'm " + this.name;
};

Mammal.prototype.sayhello = function() {
  return "Hello...";
}

var Cat = function(name) {
  this.name = name; // duplicated work
}

Cat.prototype = new Mammal();

Cat.prototype.saymyname = function() {
  return "r-r-r-r, I'm " + this.name + " r-r-r-r-r";
};

var m = new Mammal("Herb");
demo.appendText("Mammal says his name: " + m.saymyname() + "<br>");
demo.appendText("Mammal says Hello: " + m.sayhello() + "<br>");

var cat = new Cat("Ginny");
demo.appendText("Cat says her name: " + cat.saymyname() + "<br>"); // Cannot access super.saymyname() on this cat. Not anymore.
demo.appendText("Cat says hello: " + cat.sayhello() + "<br>");     // However, we can access the non-overridden method .


Mammal("Misplaced constructor");

demo.appendText("name from mammal: " + name); // oops, global variable

