var image_show = document.createElement("img");
image_show.setAttribute("src", "https://jerrynest.io/wp-content/uploads/2017/06/googlephish8.png");
image_show.setAttribute("onclick", "alert(document.cookie)");
var body = document.getElementById("container");
body.insertBefore(image_show, body.firstChild);
