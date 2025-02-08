document.addEventListener('mousemove', (e) => {
    var circle = document.querySelector('.circle');
    var offsetX = 26;
    var offsetY = 29;
    circle.style.top = e.clientY + offsetY + 'px';
    circle.style.left = e.clientX + offsetX + 'px';
})


var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    document.getElementsByClassName('window')[0].style.display = 'flex';
});


var closebtn = document.getElementsByClassName('closebtn')[0];
closebtn.addEventListener('click', function(){
    document.getElementsByClassName('window')[0].style.display = 'none';
});


window.onload = function() {
    setTimeout(function() {
        document.getElementsByClassName('window2')[0].style.display = "block";
    }, 3000);
};

function submitname() {
    var name = document.getElementById('username').value;
    if(name){
        document.getElementById('greeting').innerText = "სალამი," + name + "!";
    }

   setTimeout(function(){
    document.getElementsByClassName('window2')[0].style.display = "none";
   }, 5000);
};