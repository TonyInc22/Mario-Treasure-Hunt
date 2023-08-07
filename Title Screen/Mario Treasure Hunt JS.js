$(function(){

	var audioElement = document.getElementById('theme');
	
	audioElement.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	
	createIcons();
})

function showTitle() {
	$("#preScreen").hide();
	$("#title").show();
}

function createIcons() {
	for (let i = 1; i < 6; i++) {
		let icons = "";
		let iconArr = shuffleArray(['coin','coinBlock','block','flower','coinBlock','star','coin','block'])
		iconArr.forEach(icon => icons += "<div id='" + icon + "'></div>");		
		$("#con"+i).prepend(icons);
	}
}

function transition(element) {
	new Audio("Resources/Audio/YAHOO SOUND EFFECT (MARIO).mp3").play();
	$(".startMSG").css('cursor','default')
	$(".container div").each((i,e) => $(e).addClass('fade'));
	$("#theme")[0].pause();
	setTimeout(function () {
		$('.startMSG').addClass('fade');
		document.body.style.background = 'black';
	},1000)
	setTimeout(function () {
		location.replace("../Clues/One/Clue One.html")
	},3000)
}
