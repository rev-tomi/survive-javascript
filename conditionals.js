// source: js, the good parts. Also, so: http://stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons
demo.evalConditional = function(txt) {
  var result = "false";
  if (eval(txt)) {
    result = "true";
  }
  this.appendText('"' + txt + '" => ' + result + '<br>');
};

demo.appendText('The confusing ones:<br>');
demo.evalConditional("'' == '0'");
demo.evalConditional("0 == ''");
demo.evalConditional("0 == '0'");
demo.appendText('<br>');
demo.evalConditional("false == 'false'");
demo.evalConditional("false == '0'");
demo.appendText('<br>');
demo.evalConditional("false == undefined");
demo.evalConditional("false == null");
demo.evalConditional("null == 'undefined'");

demo.appendText('<br>The clear ones:<br>');
demo.evalConditional("'' === '0'");
demo.evalConditional("0 === ''");
demo.evalConditional("0 === '0'");
demo.appendText('<br>');
demo.evalConditional("false === 'false'");
demo.evalConditional("false === '0'");
demo.appendText('<br>');
demo.evalConditional("false === undefined");
demo.evalConditional("false === null");
demo.evalConditional("null === 'undefined'");



