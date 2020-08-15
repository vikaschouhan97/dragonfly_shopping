

document.querySelector(".medium").addEventListener("click", function(){
    document.body.style.backgroundColor = "#0f4c75";
    document.body.style.color = "#e4f9ff";
    $("nav").removeClass("navbar-light");
    $("nav").addClass("navbar-dark");
});

document.querySelector(".dark").addEventListener("click", function(){
    document.body.style.backgroundColor = "#050505";
    document.body.style.color = "#e4f9ff";
    $("nav").removeClass("navbar-light");
    $("nav").addClass("navbar-dark");
});

document.querySelector(".light").addEventListener("click", function(){
    document.body.style.backgroundColor = "#f7e7bd";
    document.body.style.color = "#050505";
    $("nav").removeClass("navbar-dark");
    $("nav").addClass("navbar-light");
});

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
