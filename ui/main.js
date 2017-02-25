console.log('Loaded!');

var img = document.getElementById('madi');

var marginleft =0

function moveRight() {
    marginLeft = marginleft + 10;
	img.style.marginLeft = marginleft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 100);
}