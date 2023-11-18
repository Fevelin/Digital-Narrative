// // how to position images making an arc in html and css



// for (var i = 0; i < points.length; i++) {
//   var point = points[i];
//   // Continue with the rest of the code
// }

// point.style.left = (x + 200) + 'px';
// point.style.top = (200 - y) + 'px';
// var points = document.getElementById('point');

// function ellipse(x) {
//   // (x/2)^2 + y^2 = 100^2
//   var ySquare = 10000 - (x / 2) * (x / 2)
//   ySquare = Math.abs(ySquare)
//   return Math.sqrt(ySquare)
// }

// $(document).ready(function(){
//   $(".point").each(function(index) {
//     var x = 200 * (8 * index / 18 - 1)
//     var y = ellipse(x)
  
//     $(this).css('left', (x + 200) + 'px')
//     $(this).css('top', (100 - y) + 'px')
//   })
// })


  // context.beginPath();
  // context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
  // context.lineWidth = 30;

  // // line color
  // context.strokeStyle = 'red';
  // context.stroke();
  // // https://www.phind.com/search?cache=d7ai4u2bssq0yiw1dui06mo1

  // //

  function arc(x) {
    var ySquare = 10000 - (x ) * (x )
    ySquare = Math.abs(ySquare)
    return Math.sqrt(ySquare)
  }

  $(document).ready(function(){
    $(".point").each(function(index) {
      var x = 200 * (10 * index / 12 - 2)
      var y = arc(x)
      
      $(this).css('left', (x + 550) + 'px')
      $(this).css('top', ( 500 - y) + 'px')
    })
  })
  


  // var canvas = document.getElementById('myCanvas');
//   var context = canvas.getContext('2d');
//   var x = canvas.width / 2;
//   var y = canvas.height / 2;
//   var radius = 75;
//   var startAngle = .8 * Math.PI;
//   var endAngle = 2.2 * Math.PI;
//   var counterClockwise = false;

//   context.beginPath();
//   context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
//   context.lineWidth = 30;

//   // line color
//   context.strokeStyle = 'blue';
//   context.stroke();
//   var canvas = document.getElementById('myCanvas');
//   var context = canvas.getContext('2d');
//   var x = canvas.width / 2;
//   var y = canvas.height / 2;
//   var radius = 75;
//   var startAngle = 8 * Math.PI;
//   var endAngle =2.3 * Math.PI;
//   var counterClockwise = false;