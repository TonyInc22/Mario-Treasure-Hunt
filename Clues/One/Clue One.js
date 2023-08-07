var currOrder = 0;
var lock = false;

var audio = {
	death : new Audio("Resources/Audio/Death Sound.mp3"),
	coin : new Audio("Resources/Audio/Coin Sound.mp3"),
	win : new Audio("Resources/Audio/Level Complete Sound.mp3"),
}

var games = {
	'Super%20Mario%20Bros.jpg' : 1,
	'Super%20Mario%20Bros%20Lost%20Levels.webp' : 2,
	'Super%20Mario%20Bros%202.png' : 3,
	'Super%20Mario%20Bros%203.webp' : 4,
	'Super%20Mario%20Land.png' : 5,
	'Super%20Mario%20World.png' : 6,
	'Super%20Mario%20Land%202.webp' : 7,
	'Super%20Mario%2064.webp' : 8,
	'Super%20Mario%20Sunshine.png' : 9,
	'New%20Super%20Mario%20Bros.png' : 10,
	'Super%20Mario%20Galaxy.jpg' : 11,
	'New%20Super%20Mario%20Bros%20Wii.webp' : 12,
	'Super%20Mario%20Galaxy%202.webp' : 13,
	'Super%20Mario%203D%20Land.webp' : 14,
	'New%20Super%20Mario%20Bros%202.webp' : 15,
	'New%20Super%20Mario%20Bros%20U.webp' : 16,
	'Super%20Mario%203D%20World.png' : 17,
	'Super%20Mario%20Odyssey.jpg' : 18
}

$(function () {
	Object.keys(games).forEach(game => audio[game.split('.')[0]] = new Audio('Resources/Audio/' + game.split('.')[0] + '.mp3'));
	displayGames();
	lvlPassword = 'mario';
	nextClue = 'Two';
});

function displayGames() {
	$(".gameRow img").remove();
	
	var imgList = shuffleArray(Object.keys(games));
	
	for (let i = 0; i < 18; i++) {
		let sound = imgList[i].split('.')[0];
		$("#"+(i < 9 ? "row1" : "row2")).append("<img onmouseover=gameSound('"+sound+"',true); onmouseout=gameSound('"+sound+"',false); onclick='checkOrder(this);' src='Resources/Images/"+imgList[i]+"'></img>");
	}
	Object.keys(games).forEach(game => audio[game.split('.')[0]].pause())
}

function checkOrder(img) {
	if (lock) return;
	lock = true;
	test = img;
	let order = games[$(img)[0].currentSrc.split('/').pop()]
	
	if (order - currOrder === 1) {
		currOrder = order;
		img.style.filter = "brightness(20%)";
		currOrder == 18 ? showClue() : playSound(audio.coin);
		lock = false;
	} else resetOrder();
}

function resetOrder() {
	playSound(audio.death)
	Object.keys(games).forEach(game => audio[game.split('.')[0]].pause())
	currOrder = 0;
	setTimeout(function () {
		displayGames();
		lock = false;
	},2800);
}

function showClue() {
	Object.keys(games).forEach(game => audio[game.split('.')[0]].pause())
	playSound(audio.win)
	audio = {};
	$("#container img").remove();
	
	setTimeout(function(){revealClue('Mario was forced to leave his job behind to save princess peach and the mushroom kingdom from the evil king bowser and his army of koopas.')}, 5800);
}

gameSound = (key,isPlay) => isPlay ? playSound(audio[''+key]) : audio[''+key].pause();