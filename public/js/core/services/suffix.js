'use strict';

Number.prototype.suffix = function(subject) {
	let number = Math.abs(this);

	let object = [];
	switch(subject) {
		case 'playlist':object = ['плейлистов', 'плейлист', 'плейлиста']; break;
		case 'track': 	object = ['треков', 'трек', 'трека']; break;

		case 'part': 	object = ['частей', 'часть', 'части']; break;
		case 'page': 	object = ['страниц', 'страница', 'страницы']; break;
		case 'word': 	object = ['слов', 'слово', 'слова']; break;
		case 'symbol': 	object = ['символов', 'символ', 'символа']; break;
		case 'work': 	object = ['работ', 'работа', 'работы']; break;
	}

	number %= 100;
	if (number >= 5 && number <= 20) return object[0];
	
	number %= 10;
	if (number === 1) return object[1];

	if (number >= 2 && number <= 4) return object[2];

	return object[0];
};