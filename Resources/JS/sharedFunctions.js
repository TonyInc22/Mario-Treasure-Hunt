var MARIO_BLUE = '#009bd9';
var MARIO_RED = '#e62310';
var MARIO_GREEN = '#44af35';
var MARIO_YELLOW = '#fccf00';
var lvlPassword;
var nextClue;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
	return array;
}

function revealClue(clueText) {
	$('<div class="clue"></div>').appendTo('body');
	setTimeout(function(){
		$(".clue").addClass('reveal');
		$(".clue").append('<span id="clueText">'+clueText+'</span><input style="top:15px;opacity:0;transition: all 3s;" placeholder="Enter Code Here" onkeyup="checkPassword(this.value.toLowerCase());" id="passWord"></input>');
		setTimeout(function () {
			Array.from($(".clue").children()).forEach(domElement => $(domElement).css('opacity',1))
		}, 3000)
	},20);
}

playSound = sound => {sound.currentTime = 0; sound.play()};
checkPassword = guess => guess === lvlPassword && location.replace("../../Clues/"+nextClue+"/Clue "+nextClue+".html");