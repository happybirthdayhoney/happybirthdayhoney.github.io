var slidePosition = 1;
SlideShow(slidePosition);

function plusSlides(n) {
  SlideShow((slidePosition += n));
}
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

var countUp = new Date("Jan 25, 2020 00:00:00").getTime();
var countUp2 = new Date("Feb 10, 2021 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = now - countUp;
  var distance2 = now - countUp2;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor(
    (distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  document.getElementById("know").innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds ";

  document.getElementById("love").innerHTML =
    days2 +
    " days " +
    hours2 +
    " hours " +
    minutes2 +
    " minutes " +
    seconds2 +
    " seconds ";
}, 1000);
