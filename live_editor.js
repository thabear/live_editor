$(document).ready(function(){
  var htmlText = "";
  var cssText = "";
  var jsText = "";
  var frameContent = $("window_output").contents();
  var head = frameContent.find("head");
  var body = frameContent.find("body");

//  cssText +=

  head.append(cssText);


//  $('.window').resizable();

});


/*

  1. Add Nav bar for HTML/CSS/JS/Output
  2. Click listeners to add borders/hide
  3. Make Writeable windows
  4. one master string written to from each window


*/
