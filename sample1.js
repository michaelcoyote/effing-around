(function () {
  var canvas = document.querySelector('#canvas-1');
  var ctxWidth = canvas.width;
  var ctxHeight = canvas.height;
  var ctx = canvas.getContext('2d');
  var start = window.mozAnimationStartTime || new Date().getTime();
  var radius = 13;

  function init() {
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 11; j++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgb(' + Math.floor(255 - 112.5 * i) + ', ' +
                         Math.floor(195 - 20 * j) + ', ' + Math.floor(200 - 25 * j) + ')';
        ctx.arc(25 + j * 25, 25 + i * 25, radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }
    }
  }

  function render() {
    var randomColor = Math.floor(Math.random() * (95 - 50 + 1)) + 50;
    var randomPositionA = Math.floor(Math.random() * (10 + 1));
    var randomPositionB = Math.floor(Math.random() * (4 + 1));

    var x = 25 + randomPositionA * 25;
    var y = 25 + randomPositionB * 25;
    ctx.globalCompositeOperation = 'source-atop';
    ctx.beginPath();
    ctx.fillStyle = 'rgb(' + Math.floor(255 - randomColor * randomPositionB) + ', ' +
                     Math.floor(245 - randomColor * randomPositionA) + ', ' + Math.floor(randomColor * randomPositionA) + ')';
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

    requestAnimationFrame(render);
  }

  init();
  render();
})();