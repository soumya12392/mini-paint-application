var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var color = "black";
var line_width = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    line_width = document.getElementById("line_width").value;

    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        
        console.log("The last position of X and Y = ");
        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);

        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("The current position of X and Y = ");
        console.log("X = " + current_position_of_mouse_x + "Y = " + current_position_of_mouse_y);

        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}