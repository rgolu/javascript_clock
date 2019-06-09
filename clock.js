var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");
const radius = 225;
ctx.translate(250,250);

setInterval(drawClock,1000);
function drawClock(){
ctx.beginPath();
ctx.arc(0,0,radius,0,2*Math.PI);
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
//gradient
var grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
grad.addColorStop(0,"#333");
grad.addColorStop(0.5,"white")
grad.addColorStop(1,"#333");
ctx.strokeStyle = grad;
ctx.lineWidth = radius*0.1;
ctx.stroke();
///

//
///
ctx.beginPath();
ctx.arc(0,0,15,0,2*Math.PI);
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.fill();
//

////
//drawing digit
const pi = Math.PI;
theta =3*pi/2;
ctx.textBaseline = "middle";
ctx.textAlign = "center";
for(let i=1;i<=12;i++)
{
	theta+=pi/6;
	ctx.font="30px Arial";
ctx.fillText(i,0+190*Math.cos(theta),0+190*Math.sin(theta));
}

////
//drawTime

var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
hour%=12;


// hour hand
ctx.lineWidth = 10;
theta =(3*pi)/2+ (hour*pi/6)+(minute*pi/(6*60))+(second*pi/(360*60));
console.log(hour);
console.log(theta);
ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(0,0);
ctx.lineTo(0+100*Math.cos(theta),0+100*Math.sin(theta));
ctx.stroke();
//
//minute hand
ctx.lineWidth = 10;
 theta =(3*pi)/2+ (minute*pi/30)+(second*pi/(30*60))
console.log(minute);
console.log(theta);
ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(0,0);
ctx.lineTo(0+160*Math.cos(theta),0+160*Math.sin(theta));
ctx.stroke();
//
//second hand
ctx.lineWidth = 5;
theta =(3*pi)/2+second*pi/30;
console.log(second);
console.log(theta);
ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(0,0);
ctx.lineTo(0+180*Math.cos(theta),0+180*Math.sin(theta));
ctx.stroke();


}

///
