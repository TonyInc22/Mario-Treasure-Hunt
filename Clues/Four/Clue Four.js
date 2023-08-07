var audio = {
	death : new Audio("Resources/Audio/Death Sound.mp3"),
	coin : new Audio("Resources/Audio/Coin Sound.mp3"),
	win : new Audio("Resources/Audio/Level Complete Sound.mp3"),
	gameOver: new Audio("Resources/Audio/Game Over Sound.mp3")
}
$(function () {
	lvlPassword = 'toad';
	nextClue = 'Five';
})

var TwoTruthsOneLie = [
	{
		truthOne: "Super Mario Bros. 2 has a different name in Japan",
		truthTwo: "Super Mario Bros: Lost Levels has a different name in Japan",
		Lie: "Super Mario Land has a different name in Japan"
	},
	{
		truthOne: "Mario was originally called Jumpman",
		truthTwo: "Mario was originally a carpenter",
		Lie: "Mario was originally British"
	},
	{
		truthOne: "The Mario main theme was in the billboard charts for ringtones",
		truthTwo: "The Mario main theme has been played live in concert by orchestras",
		Lie: "The Mario main theme was made for a different Nintendo game"
	},
	{
		truthOne: "Chain chomp was inspired by a dog that attacked one of the creators",
		truthTwo: "Boo was inspired by one of the creator's wives",
		Lie: "Yoshi was inspired by one of the creator's favorite dinosaur"
	},
	{
		truthOne: "There are multiple Mario movies",
		truthTwo: "There are multipe Mario TV shows",
		Lie: "There are multiple Mario vinyl records"
	},
	{
		truthOne: "The voice of Mario is also the voice of Waluigi",
		truthTwo: "The voice of Mario is also the voice of Luigi",
		Lie: "The voice of Mario is also the voice of Bowser"
	},
	{
		truthOne: "Mario has sold over 240 million games",
		truthTwo: "Mario has made over 200 games",
		Lie: "Mario has been in music charts for over 200 weeks"
	},
	{
		truthOne: "Mario has saved Princess peach from Bowser",
		truthTwo: "Mario has saved Princess Daisy from Tatanga",
		Lie: "Mario has saved Princess Rosalina from Wart"
	},
	{
		truthOne: "Yoshi was in the first Mario Kart",
		truthTwo: "Yoshi was first a playable character in Super Mario 64",
		Lie: "Yoshi was introduced first in Super Mario Land"
	},
	{
		truthOne: "Birdo is actually a guy",
		truthTwo: "Mario and Luigi are actually twins",
		Lie: "Bowser is actually an alligator"
	}
];
var GuessTheGame = [
	{
		img: 
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	}
];
var WhoDidIt = [
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		situation:
		optionOne:
		optionTwo:
		correctOption:
	}
]
var MarioOrNot = [
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	},
	{
		img:
		optionOne:
		optionTwo:
		correctOption:
	}
];