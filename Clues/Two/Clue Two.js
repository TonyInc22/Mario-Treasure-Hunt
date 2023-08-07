var backPosition = 0;
var moveLock = 0;
var loops = 0;
var coinStatus = {
	'coin1' : 0,
	'coin2' : 0,
	'coin3' : 0,
	'coin4' : 0,
	'coin5' : 0,
};
var clueRevealed = '';
var audio = {
	coin: new Audio("Resources/Audio/Coin Sound.mp3"),
	win: new Audio("Resources/Audio/Level Complete Sound.mp3")
};
var coin5min;
var coin5max;

$(function () {
	lvlPassword = 'luigi';
	nextClue = 'Three';
	
	var audioElement = document.getElementById('theme');
	
	audioElement.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	
	document.onkeydown = function(event) {
		if (clueRevealed) return;
		$("#theme")[0].play();
		switch (event.key) {
			case 'a':
			case "ArrowLeft":
				!moveLock && move(false);
				break;
			case 'd':
			case "ArrowRight":
				!moveLock && move(true);
				break;
			case 'w':
			case "ArrowUp":
				!coinStatus.coin1 && $('#coin1').show();
		}
	};
	document.onkeyup = function(event) {
		$('#coin1').hide();
		$("#mario").css('background-position','-192px');
		document.getElementById('mario').style.animation = 'none';
		moveLock = 0;
	};
	
});

function move(right) {
	moveLock = 1;
	$("#mario").css('transform', 'scaleX('+(right ? -1 : 1)+')');
	$("#mario").css('background-position','0px');
	document.getElementById('mario').style.animation = 'walk 0.3s steps(3) infinite';
	stepLoop(right);
}

function stepLoop (right) {
	setTimeout(function () {
		backPosition += right ? -10 : 10;
		if (backPosition > 2270 || backPosition < -2270) {
			if (!loops) {
				coin5min = backPosition > 0 ? -1550 : 1500;
				coin5max = backPosition > 0 ? -1500 : 1550;
			}
			backPosition = 0;
			loops++;
		}
		(loops >= 1 && !coinStatus.coin5 && backPosition < coin5max && backPosition > coin5min) ? $('#coin5').show() : $('#coin5').hide();
		if (!coinStatus.coin2 && loops >= 5) document.getElementById('coin2').style.animation = 'coinFlight 4s infinite';
		
		$("#lvlBackground").css('background-position', backPosition+'px');
		if (moveLock) stepLoop(right);
	},30)
}

function coinClick (coinID) {
	playSound(audio.coin);
	coinStatus[coinID]++;
	$('#'+coinID).hide();
	if (Object.values(coinStatus).every(coin => coin)) {
		clueRevealed = true;
		$("#theme")[0].pause();
		playSound(audio.win);
		setTimeout(function () {revealClue('The mario franchise is famous for fantastic music. Take the Donut Plains theme you just heard for example... If you owned a copy where would you keep it?')},5800);
	}
}