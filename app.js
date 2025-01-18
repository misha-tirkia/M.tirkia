document.addEventListener('DOMContentLoaded', function () {
    let circle = document.getElementsByClassName('circle')[0];
    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        circle.style.left = x + "px";
        circle.style.top = y + "px";
    });
});

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    document.getElementsByClassName('window')[0].style.display = 'flex';
});


var closebtn = document.getElementsByClassName('closebtn')[0];
closebtn.addEventListener('click', function(){
    document.getElementsByClassName('window')[0].style.display = 'none';
});
