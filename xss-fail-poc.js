var image_show = document.createElement("img");
image_show.setAttribute("src", "https://fbthumb.dcard.tw/posts/227576956");
image_show.setAttribute("onclick", "alert(document.cookie)");
var body = document.getElementById("container");
body.insertBefore(image_show, body.firstChild);
