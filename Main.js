var mouse_event = "empty";
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_event = "down";

    color = document.getElementById("color").value ;

    line_width = document.getElementById("line_width").value ;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event = "up";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event = "leave";
}
canvas.addEventListener("mousemove", my_mousemove);
var last_position_x, last_position_y;
function my_mousemove(e){
  console.log(e);
  var currentmouseX = e.clientX - canvas.offsetLeft;
  var currentmouseY = e.clientY - canvas.offsetTop;
  if (mouse_event == "down"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_position_x, last_position_y);
    ctx.lineTo(currentmouseX, currentmouseY);
    ctx.stroke();
  }
  last_position_x = currentmouseX;
  last_position_y = currentmouseY;
}
function clear_all(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}
var last_position_touch_x, last_position_touch_y;
var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
if (width < 992){
    document.getElementById("my_canvas").style.width = new_width;
    document.getElementById("my_canvas").style.height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener ("touchstart", my_touchstart);
function my_touchstart(e){
   color = document.getElementById("color").value;
   line_width = document.getElementById("line_width").value;
   console.log(e);
   last_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
   last_position_touch_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
   current_position_touch_y = e.touches[0].clientY - canvas.offsetTop;
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = line_width;
   ctx.moveTo(last_position_touch_x, last_position_touch_y);
   ctx.lineTo(current_position_touch_x, current_position_touch_y);
   ctx.stroke();
   last_position_touch_x = current_position_touch_x;
   last_position_touch_y = current_position_touch_y;
   
}