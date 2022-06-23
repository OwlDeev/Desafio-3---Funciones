//EXTRA DEL EJERCICIO
var maxLeft;
var maxTop;
var canvas = document.getElementById('canvas');
var ele1 = document.getElementById("ele1");
var dot = document.getElementsByClassName("dot");
var labelLuciernagas = document.getElementById("labelLuciernagas");
var activeLuciernagasDiv = document.getElementById("activeLuciernagasDiv");
var restartArrow = document.getElementById("restartArrow");
var body = document.body;
body.style.backgroundImage = "url('assets/imgs/fondoPintarHtml.jpg')";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundAttachment = "fixed";
body.style.backgroundPosition = "center";

function visibleDot() {
  for (var i=1;i<dot.length;i++){
    dot[i].style.visibility = 'visible'
  }
}

var spanStandar = function(span){
  span.fadeOut(1000, function () {
  var leftPos = Math.floor(Math.random() * (maxLeft + 1));
  var topPos = Math.floor(Math.random() * (maxTop + 1));
  span.css({ left: leftPos, top: topPos }).fadeIn(1000);
  })
};

function moveDiv() {
  
  var span1 = $("#dot1");
  var span2 = $("#dot2");
  var span3 = $("#dot3");
  var span4 = $("#dot4");
  var span5 = $("#dot5");
  var span6 = $("#dot6");
  var span7 = $("#dot7");

  function maxLeftTop(span){
    maxLeft = $(window).width() - span.width();
    maxTop = $(window).height() - span.width();
    spanStandar(span);
  }

  maxLeftTop(span1);
  maxLeftTop(span2);
  maxLeftTop(span3);
  maxLeftTop(span4);
  maxLeftTop(span5);
  maxLeftTop(span6);
  maxLeftTop(span7);
  visibleDot();
  
};

activeLuciernagasDiv.onclick = function(){
  labelLuciernagas.style.color = "green";
  setInterval("moveDiv()",1000);
}

restartArrow.onclick = function(){
  location.reload();
}