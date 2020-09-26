

document.querySelector(".medium").addEventListener("click", function(){
    document.body.style.backgroundColor = "#0f4c75";
    document.body.style.color = "#e4f9ff";
    $("nav").removeClass("navbar-light");
    $("nav").addClass("navbar-dark");
    $(".product-grid .product-content").css("background-color", "#0f4c75");
});

document.querySelector(".dark").addEventListener("click", function(){
    document.body.style.backgroundColor = "#050505";
    document.body.style.color = "#e4f9ff";
    $("nav").removeClass("navbar-light");
    $("nav").addClass("navbar-dark");
    $(".product-grid .product-content").css("background-color", "#000");
});

document.querySelector(".light").addEventListener("click", function(){
    document.body.style.backgroundColor = "#f7e7bd";
    document.body.style.color = "#050505";
    $("nav").removeClass("navbar-dark");
    $("nav").addClass("navbar-light");
    $(".product-grid .product-content").css("background-color", "#f7e7bd");
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

  var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
