document.addEventListener('mousemove', (e) => {
    const circle = document.querySelector('.circle');
    circle.style.top = e.clientY + 'px';
    circle.style.left = e.clientX + 'px';
});

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    document.getElementsByClassName('window')[0].style.display = 'flex';
});


var closebtn = document.getElementsByClassName('closebtn')[0];
closebtn.addEventListener('click', function(){
    document.getElementsByClassName('window')[0].style.display = 'none';
});
