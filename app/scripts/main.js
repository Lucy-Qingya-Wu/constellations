var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {

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
    ctx.strokeStyle='yellow';
    ctx.stroke();
    ctx.fillStyle=color;
    ctx.fill();

}

var star1 = [
                      {
                      "x_coordinate":300,
                      "y_coordinate":100,
                      "color":"white",
                      "numPoints":5,
                      "innerRadius":1,
                      "outerRadius":2 },

                      {
                      "x_coordinate":400,
                      "y_coordinate":200,
                      "color":"red",
                      "numPoints":6,
                      "innerRadius":1,
                      "outerRadius":2 }

                      // {
                      // "x_coordinate":10,
                      // "y_coordinate":6,
                      // "color":"blue",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":6,
                      // "y_coordinate":10,
                      // "color":"green",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":5,
                      // "y_coordinate":31,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },,

                      // {
                      // "x_coordinate":6,
                      // "y_coordinate":33,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":11,
                      // "y_coordinate":37,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":14,
                      // "y_coordinate":31,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":17,
                      // "y_coordinate":24,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":19,
                      // "y_coordinate":19,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":25,
                      // "y_coordinate":12,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":29,
                      // "y_coordinate":7,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":36,
                      // "y_coordinate":8,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":47,
                      // "y_coordinate":20,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":53,
                      // "y_coordinate":35,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      // {
                      // "x_coordinate":57,
                      // "y_coordinate":41,
                      // "color":"yellow",
                      // "numPoints":6,
                      // "innerRadius":1,
                      // "outerRadius":2 },

                      
                ];

for (var ind = 0; ind < star1.length; ind++) {
  //go through JSON object
  console.log(star1[ind]);
  console.log(ind);
  drawStar(star1[ind]["x_coordinate"], 
         star1[ind]["y_coordinate"],
         star1[ind]["numPoints"], 
         star1[ind]["outerRadius"],
         star1[ind]["innerRadius"], 
         star1[ind]["color"]);
}
