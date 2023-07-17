function changeBackgroundColor(color) {

	var colors = ["yellow", "blue"]; // Array of colors to switch between
  var body = document.getElementsByTagName("body")[0];
  var currentColor = body.style.backgroundColor;

  if (currentColor === colors[0]) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[0];
  }
}
