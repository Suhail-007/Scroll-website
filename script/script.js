let button = document.querySelector('button');
let header = document.querySelector('header')
button.addEventListener('click', () => {
//		const nav = button.closest('#nav');
		//when user is at the top of the screen
		header.classList.toggle('show-links');
})

