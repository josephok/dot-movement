String.prototype.repeat = function(num) {
  return new Array(num + 1).join(this);
}

const NUM_OF_DOT = 100;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$(function init() {
  const $parent = $("#out");
  let inner = `<section class="inner"></section>`;

  $parent.html(inner.repeat(NUM_OF_DOT));

  let $inner = $(".inner");
  let parentWidth = $parent.width() - $inner.width();
  let parentHeight = $parent.height() - $inner.height();

  function move() {
    for (let i = 1; i <= NUM_OF_DOT; i++) {
      $(`.inner:nth-child(${i})`).css('background-color', function() {
        return getRandomColor();
      });
    }
    for (let i = 1; i <= NUM_OF_DOT; i++) {
      let x = Math.random() * parentWidth;
      let y = Math.random() * parentHeight;
      $(`.inner:nth-child(${i})`).css('transform', `translate(${x}px, ${y}px)`);
    }
  }

  move();

  let moveTimer = setInterval(move, 1000);

  $(window).resize(function() {
    clearInterval(moveTimer);
    parentWidth = $parent.width() - $inner.width();
    parentHeight = $parent.height() - $inner.height();
    moveTimer = setInterval(move, 1000);
  });

});
