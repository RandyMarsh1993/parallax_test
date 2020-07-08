'use strict';

let parallaxLines = document.querySelectorAll('.parallax');
let borderLines = document.querySelectorAll('.border-block');
let buttons = document.querySelectorAll('.rotateBtn');

function rotateContent() {
	parallaxLines.forEach(function(line) {
		line.classList.toggle('parallax__line_3d');
	});
	hideBorderBlocks();
}

function hideBorderBlocks() {
	borderLines.forEach(block => {
		block.classList.toggle('border-block_hidden');
	});
}

buttons.forEach(btn => {
	btn.addEventListener('click', rotateContent);
});

/*
старый код
function rotateContent() {
	
	let line = document.getElementsByClassName('parallax');
	let border = document.getElementsByClassName('border-block');
	
	for (let i = 0; i < line.length; i++) {
		line[i].classList.toggle('parallax__line_3d');
	}

	for (let i = 0; i < border.length; i++) {
		border[i].classList.toggle('border-block_hidden');
	}
}
*/