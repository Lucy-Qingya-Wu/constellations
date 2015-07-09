
// console.log('\'Allo \'Allo!');


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//var stars = {"coordinates": [
//  "constellationname": "Draco",
//  [102.0, 0.0, "yellow"],
//  [103.0, 1.0, "red"],
//  [104.0, 0.0, "pink"],
//  [105.0, 1.0, "cyan"]
//]};

//each json entry will include
//star coordinates + colors of each star + constellation name + number of points + inner and outter radius



function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;


    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)
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
    ctx.strokeStyle='yellow';
    ctx.stroke();
    ctx.fillStyle=color;
    ctx.fill();

}


drawStar(400, 200, 6, 30, 15, 'yellow');
drawStar(200, 200, 6, 30, 15, 'yellow');
drawStar(400, 200, 6, 130, 15, 'blue');
drawStar(500, 200, 5, 30, 15, 'green');
drawStar(600, 200, 6, 30, 15, 'purple');
drawStar(800, 200, 6, 30, 15, 'pink')

for (i = 0; i < spikes; i++) {
  //go through JSON object
  drawStar(400, 200, 6, 30, 15, 'yellow');
}
