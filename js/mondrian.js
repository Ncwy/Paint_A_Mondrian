var x = " ";
var el = document.getElementById("color_palette");
el.addEventListener("click", function (event) {
    x = event.target.className;
});


var Al = document.getElementById("painting")
Al.addEventListener("click", function (event) {
    var Name = event.target.className;
    document.getElementsByClassName(Name)[0].style.backgroundColor = x;
});
