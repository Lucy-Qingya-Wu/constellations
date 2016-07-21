(function(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  canvas.width = 1580;

  canvas.height = 580;


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
  document.getElementById("name").innerHTML = constellation["name"];

  var factor1, factor2;
  for (var ind = 0; ind < constellation["stars"].length; ind++) {
    if (constellation["name"] == "Draco - dragon"){
      factor1 = 18;
      factor2 = 240;
      factor3 = 11;
      factor4 = 30;
    }
    if (constellation["name"] == "Orion - archor"){
      factor1 = 12;
      factor2 = 500;
      factor3 = 8;
      factor4 = 12;
    }
    if (constellation["name"] == "Pegasus - winged horse"){
      factor1 = 14;
      factor2 = 360;
      factor3 = 12;
      factor4 = 10;
    }
    if (constellation["name"] == "Scorpius - scorpion"){
      factor1 = 24;
      factor2 = 100;
      factor3 = 10;
      factor4 = 20;
    }
    if (constellation["name"] == "Ursa Major - bear"){
      factor1 = 18;
      factor2 = 120;
      factor3 = 11;
      factor4 = 0;
    }


    drawStar(constellation["stars"][ind]["x_coordinate"]*factor1 + factor2, 
             constellation["stars"][ind]["y_coordinate"]*factor3 + factor4,
             constellation["stars"][ind]["numPoints"], 
             10,
             5, 
             constellation["stars"][ind]["color"]);

  }  
  console.log(constellation["stars"].length);

})();




