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