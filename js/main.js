var a = document.getElementById("main");
var moving = false;
a.addEventListener("mousedown", initialClick, false);

function move(e){

    var newX = e.clientX - 10;
    var newY = e.clientY - 10;

        a.style.left = newX + "px";
        a.style.top = newY + "px";

    var coor = "Coordinates: (" + newX + "," + newY + ")";
    document.getElementById("demo").innerHTML = coor;

}


