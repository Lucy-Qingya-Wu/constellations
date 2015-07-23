var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log('in here');

function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {

    if (cx > 1550){
        alert("x_coordinate is better to be less than 1550");
        console.log(cx, cy, spikes, outerRadius, innerRadius, color);
    }

    if (cy > 600){
        alert("y_coordinate is better to be less than 600");
        console.log(cx, cy, spikes, outerRadius, innerRadius, color);
    }

    cy = 600 - cy;

    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    ctx.beginPath();

    ctx.moveTo(cx, cy - outerRadius);

    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y)
        rot += step
    }

    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();
    ctx.lineWidth=5;
    ctx.strokeStyle=color;
    ctx.stroke();
    ctx.fillStyle=color;
    ctx.fill();
}


var constellation = ;

document.getElementById("name").innerHTML = constellation["name"];


for (var ind = 0; ind < constellation["stars"].length; ind++) {

  drawStar(constellation["stars"][ind]["x_coordinate"], 
           constellation["stars"][ind]["y_coordinate"],
           constellation["stars"][ind]["numPoints"], 
           constellation["stars"][ind]["outerRadius"],
           constellation["stars"][ind]["innerRadius"], 
           constellation["stars"][ind]["color"]);
}


