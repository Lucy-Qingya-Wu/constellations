//This JavaScript file is what generates your stars!!

$(function(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  canvas.width = 1580;

  canvas.height = 560;


  function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {

      cy = 580 - cy;

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


  var constellation = stars;

  var factor1, factor2;
  for (var ind = 0; ind < constellation["stars"].length; ind++) {
    if (constellation["name"] == "Ursa Major - bear"){
      factor1 = 23;
    }else{
      factor1 = 27;
    };
    if (constellation["name"] == "Orion - archor"){
      factor2 = 20;
    }else{
      factor2 = 120;
    };
    drawStar(constellation["stars"][ind]["x_coordinate"]*factor1, 
             constellation["stars"][ind]["y_coordinate"]*8 + factor2,
             constellation["stars"][ind]["numPoints"], 
             10,
             5, 
             constellation["stars"][ind]["color"]);

  }  
  console.log(constellation["stars"].length);

});




