var delay = 10000; // 10 seconds

var timer = null;
var isButts = false;
function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(buttsify, delay);
}

var els = document.querySelectorAll('*');
for (var i = 0; i < els.length; i++) {
  if (els[i].children.length) {
    continue;
  }
  var orig = els[i].innerHTML;
  var butts = orig.replace(/brain/g, '<span class="brain"></span>')
    .replace(/Brain/g, '<span class="brain-cap"></span>');
  els[i].innerHTML = butts;
}

resetTimer();

function buttsify() {
  if (isButts) {
    return;
  }
  var brains = document.querySelectorAll('.brain');
  for (var i = 0; i < brains.length; i++) {
    brains[i].className = 'butt';
  }
  var Brains = document.querySelectorAll('.brain-cap');
  for (var i = 0; i < Brains.length; i++) {
    Brains[i].className = 'butt-cap';
  }
  isButts = true;
}

function undo() {
  if (!isButts) {
    return;
  }
  var butts = document.querySelectorAll('.butt');
  for (var i = 0; i < butts.length; i++) {
    butts[i].className = 'brain';
  }
  var Butts = document.querySelectorAll('.butt-cap');
  for (var i = 0; i < Butts.length; i++) {
    Butts[i].className = 'brain-cap';
  }
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
