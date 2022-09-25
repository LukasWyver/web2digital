$(document).ready(function () {
  // Progress bar
  let containerA = document.getElementById("circleA");
  let containerB = document.getElementById("circleB");
  let containerC = document.getElementById("circleC");
  let containerD = document.getElementById("circleD");

  let circleA = new ProgressBar.Circle(containerA, {
    color: "#149bad",
    strokeWidth: 8,
    duration: 1400,
    from: { color: "#aaa" },
    to: { color: "#149bad" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 60);
      circle.setText(value);
    },
  });

  let circleB = new ProgressBar.Circle(containerB, {
    color: "#149bad",
    strokeWidth: 8,
    duration: 1700,
    from: { color: "#aaa" },
    to: { color: "#149bad" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 254);
      circle.setText(value);
    },
  });

  let circleC = new ProgressBar.Circle(containerC, {
    color: "#149bad",
    strokeWidth: 8,
    duration: 2000,
    from: { color: "#aaa" },
    to: { color: "#149bad" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 32);
      circle.setText(value);
    },
  });

  let circleD = new ProgressBar.Circle(containerD, {
    color: "#149bad",
    strokeWidth: 8,
    duration: 2200,
    from: { color: "#aaa" },
    to: { color: "#149bad" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      let value = Math.round(circle.value() * 5346);
      circle.setText(value);
    },
  });

  //iniciando o loader quando o usuario chega no elemento.
  let dataAreaOffset = $("#data-area").offset();
  let stop = 0;

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();

    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
  });

  // Parallax
  setTimeout(function () {
    $("#data-area").parallax({ imageSrc: "img/cidadeparallax.png" });
  }, 250);
});
