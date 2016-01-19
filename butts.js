var delay = 10000; // 10 seconds
var body = document.querySelector('body');
var orig = body.innerHTML;

var timer = null;
var isButts = false;
function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(buttsify, delay);
}

resetTimer();

var butts = orig.replace(/brain/g, 'butt').replace(/Brain/g, 'Butt');

function buttsify() {
  if (isButts) {
    return;
  }
  body.innerHTML = butts;
  animateDots();
  isButts = true;
}

function undo() {
  if (!isButts) {
    return;
  }
  body.innerHTML = orig;
  animateDots();
  isButts = false;
}

document.onmousemove = function () {
  resetTimer();
  undo();
}

document.onscroll = function () {
  resetTimer();
  undo();
}

document.onkeypress = function () {
  resetTimer();
  undo();
}
