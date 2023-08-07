var audio = {
	c: new Audio("Resources/Audio/C.mp3"),
	cs: new Audio("Resources/Audio/Cs.mp3"),
	d: new Audio("Resources/Audio/D.mp3"),
	ds: new Audio("Resources/Audio/Ds.mp3"),
	e: new Audio("Resources/Audio/E.mp3"),
	f: new Audio("Resources/Audio/F.mp3"),
	fs: new Audio("Resources/Audio/Fs.mp3"),
	g: new Audio("Resources/Audio/G.mp3"),
	gs: new Audio("Resources/Audio/Gs.mp3"),
	a: new Audio("Resources/Audio/A.mp3"),
	as: new Audio("Resources/Audio/As.mp3"),
	b: new Audio("Resources/Audio/B.mp3"),
	c2: new Audio("Resources/Audio/C2.mp3"),
	cs2: new Audio("Resources/Audio/Cs2.mp3"),
	d2: new Audio("Resources/Audio/D2.mp3"),
	ds2: new Audio("Resources/Audio/Ds2.mp3"),
	e2: new Audio("Resources/Audio/E2.mp3"),
	f2: new Audio("Resources/Audio/F2.mp3"),
	fs2: new Audio("Resources/Audio/Fs2.mp3"),
	g2: new Audio("Resources/Audio/G2.mp3"),
	gs2: new Audio("Resources/Audio/Gs2.mp3"),
	a2: new Audio("Resources/Audio/A2.mp3"),
	as2: new Audio("Resources/Audio/As2.mp3"),
	b2: new Audio("Resources/Audio/B2.mp3"),
	death : new Audio("Resources/Audio/Death Sound.mp3"),
	coin : new Audio("Resources/Audio/Coin Sound.mp3"),
	win : new Audio("Resources/Audio/Level Complete Sound.mp3"),
	gameOver: new Audio("Resources/Audio/Game Over Sound.mp3"),
	startSound: new Audio("Resources/Audio/Start Sound.mp3") 
}
var gameData = {
	1: {
		theme: 'Super Mario Bros Theme',
		titleScreen: 'Resources/Images/Super Mario Bros Title Screen.jpg',
		lifeImg: 'Resources/Images/Super Mario Bros One Up.png',
		order: ['c2','g','e','a','b','as','a','g','e2','g2','a2','f2','g2','e2','c2','d2','b'],
		audioClip: new Audio("Resources/Audio/Super Mario Bros Clip.mp3"),
		audioClipLength: 4700
	},
	2: {
		theme: 'Delphino Plaza Theme',
		titleScreen: 'Resources/Images/Super Mario Sunshine Title Screen.jpg',
		lifeImg: 'Resources/Images/Super Mario Sunshine Shine Sprite.webp',
		order: ['e','cs2','cs2','e','d','b','e','cs2','cs2','cs2','d2','fs','fs','gs','a'],
		audioClip: new Audio("Resources/Audio/Delphino Plaza Clip.mp3"),
		audioClipLength: 6850
	},
	3: {
		theme: 'New Super Mario Bros Wii Theme',
		titleScreen: 'Resources/Images/New Super Mario Bros Wii Title Screen.jpg',
		lifeImg: 'Resources/Images/New Super Mario Bros Wii Propeller Mushroom.webp',
		order: ['g','a','c2','a','c2','d2','ds2','d2','c2','b','g','as','a','g','e','f','g','a','c2','b','a','g','f'],
		audioClip: new Audio("Resources/Audio/New Super Mario Bros Wii Clip.mp3"),
		audioClipLength: 8600
	}
}
var keyLock = true;
var gameOvers = 0;
var assist = false;
var lives = 0;
var currGame = 1;
var marioSpeed = .5;
var currOrderPos;
var keyPositions = {
	c: 0,
	cs: .5,
	d: 1,
	ds: 1.5,
	e: 2,
	f: 3,
	fs: 3.5,
	g: 4,
	gs: 4.5,
	a: 5,
	as: 5.5,
	b: 6
}
var pianoKeyWidth = 64;
var startNotePos = 409;

$(function () {
	lvlPassword = 'peach';
	nextClue = 'Four';
})

class pianoNote {
	constructor(note,noteTime) {
		this.id = currOrderPos;
		this.note = note.match(/[a-z]+/);
		this.timing = noteTime;
		this.octaveUp = note.includes('2');
	}
	sendMario() {
		$("#container").append("<div id='note"+this.id+"' class='note'></div>");
		$('#note'+this.id).css('left',(startNotePos + (this.octaveUp * 498) + pianoKeyWidth*keyPositions[this.note])+'px');
		document.getElementById('note'+this.id).style.animation = 'floatUp'+(this.note.input.includes('s') ? "Sharp" : "")+' '+this.timing+'s linear';
	}
}

function startGame() {
	if (!lives) for (;lives < 3; lives++) $('tbody').append("<tr><td class='life'></td></tr>");
	$('table').show();
	$('button').hide();
	$("#container").css("background-image","url('"+gameData[currGame].titleScreen+"')");
	$(".life").css("background-image","url('"+gameData[currGame].lifeImg+"')");
	currOrderPos = 0;
	sendNotes();
}

function sendNotes() {
	new pianoNote(gameData[currGame].order[currOrderPos], marioSpeed*2).sendMario();
	if (++currOrderPos < gameData[currGame].order.length) setTimeout(sendNotes,1000*marioSpeed);
	else {
		currOrderPos = 0;
		playSound(audio.startSound);
		setTimeout( function () {
			keyLock = false;
			$('.note').remove();
			if (assist) {
				$("#nextNote").show();
				$('#nextNote').text(gameData[currGame].order[0])
			}
		},4500)
	}
}

function keyPress(key) {
	if (keyLock) return;
	let noteName = key.className.split(' ')[1]+($(key).parent()[0].id === 'octave2' ? '2' : '');
	if (noteName == gameData[currGame].order[currOrderPos]) {
		Object.keys(audio).forEach(audioKey => audio[audioKey].pause());
		playSound(audio[noteName]);
		if (assist) {
			if (currOrderPos !== gameData[currGame].order.length) $('#nextNote').text(gameData[currGame].order[currOrderPos+1]);
			else $("#nextNote").hide();
		}
		if (++currOrderPos == gameData[currGame].order.length) {
			keyLock = true;
			setTimeout(function () {
				playSound(audio.coin);
				setTimeout(function () {
					playSound(gameData[currGame].audioClip);
					setTimeout(function () {
						if (currGame == 3) {
							$('table').hide();
							if (assist) $("#nextNote").hide();
							$("#container").css("background-image","none");
							revealClue("Mario's origin is from a place known for many talents. One of them being a new olympic sport they currently dominate.");
						} else nextGame()
					},gameData[currGame].audioClipLength);
				},1000);
			}, 1000)
		}
	} else {
		keyLock = true;
		playSound(audio.death)
		setTimeout(removeLife,2800);
	}
}

function removeLife() {
	$('table tr:last').remove();
	if (assist) $("#nextNote").hide();
	if (--lives === 0) {
		if (++gameOvers >= 3) assist = true;
		currGame = 0;
		if (marioSpeed <= .75) marioSpeed += .25;
		playSound(audio.gameOver);
		setTimeout(nextGame, 4000);
	}
	else startGame();
}

function nextGame() {
	currGame++;
	if (assist) $("#nextNote").hide();
	$('table').hide();
	$("#container").css("background-image","none");
	$('button').show();
}