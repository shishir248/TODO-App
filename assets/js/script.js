//Animating the home text
gsap.from(".a1", {
    opacity: 0,
    duration: 1,
    y: 50,
    stagger: 0.4
});
//Animating the button
gsap.from("#get-started", {
    opacity: 0,
    duration: 1,
    x: 50,
    delay: 1
});
//Animating slider
var start = document.getElementById('get-started');
start.addEventListener('click', function () {
    gsap.to(".animation-div", {
        y: -100 + '%',
        duration: 0.5,
    })
});