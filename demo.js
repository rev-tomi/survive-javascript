  var demo = function() {
    var
      sandbox = document.getElementById("sandbox"),
      appendText = function(txt) {
      sandbox.innerHTML = sandbox.innerHTML + txt;
    };
    return {
      'appendText' : appendText
    };
  }();
  demo.appendText("<span>Hello, world!<br></span>");

