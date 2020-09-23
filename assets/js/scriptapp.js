//Animating SVG Checkbox
var checkbox = document.getElementById('checkbox');
var box = document.getElementById('box');
var check = document.getElementById('check1');
checkbox.addEventListener('click', function () {
    check.style.strokeDashoffset = 0;
    box.style.strokeDashoffset = 800;
    box.style.fill = 'transparent';
    check.style.fill = 'transparent';
})

//Animating delete all SVG
var deleteButton = document.getElementById('delete');
var bigCheck = document.getElementById('big-check')
var bigTick = document.getElementById('big-tick')
var circle = document.getElementById('circle');

deleteButton.addEventListener('click', function () {
    bigCheck.style.width = 65 + '%';
    circle.style.strokeDashoffset = 0;
    bigTick.style.strokeDashoffset = 0;
})