var daBigBlock = document.getElementById("daBigBlock");
var daRandomHole = document.getElementById("daRandomHole");
var daChar = document.getElementById("daChar");
var daJump = 0;
var daScore = 0;


daRandomHole.addEventListener('animationiteration', () => {
	var randposi = -((Math.random() * 350) + 250);
	daRandomHole.style.top = randposi + 'px';
	daScore++;
});

var skidaddle = setInterval(function () {
	var chartop = parseFloat(window.getComputedStyle(daChar).getPropertyValue("top"));
	var blockleft = parseFloat(window.getComputedStyle(daBigBlock).getPropertyValue("left"));
	var holetop = parseFloat(window.getComputedStyle(daRandomHole).getPropertyValue("top")); 
	var chtop = (chartop - 530);
	var holebott = holetop + 250 + 'px';
	if (daJump == 0) {
		daChar.style.top = (chartop + 2) + 'px';

	}


	if ((chartop > 530) || ((blockleft < 100) && (blockleft > -100) && ((chtop <= holetop) || (chtop >= (holetop + 250))))) {
		daBigBlock.style.animationPlayState = "paused";
		daRandomHole.style.animationPlayState = "paused";
		clearInterval(skidaddle)
		alert("you suck at this game, you lost get outta here !! Score = " + daScore);
	}
}, 40);

function daClick() {
	daJump = 1;
	 var daCount = 0

	var daInterval = setInterval(function () {
		var chartop = parseFloat(window.getComputedStyle(daChar).getPropertyValue("top"));
		if (chartop >= 100) {
			daChar.style.top = (chartop - 3) + 'px';
		}
		if (daCount > 40) {
			clearInterval(daInterval)
			daJump = 0
			daCount = 0
			
		}
		daCount++
	}, 40);

}
