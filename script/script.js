const menuBtn = document.querySelector('button');
const header = document.querySelector('header');

const linksContainer = document.querySelector('.nav-links');
const links = document.querySelector('.links');

menuBtn.addEventListener('click', () => {
		const linksContainerHeight = linksContainer.getBoundingClientRect().height;
		const linksHeight = links.getBoundingClientRect(). height;
		
		if (linksContainerHeight === 0) {
				linksContainer.style.height = `${linksHeight}px`;
				header.classList.add('show-links');
		} else {
				linksContainer.style.height = 0;
				header.classList.remove('show-links');
		}
});

const nav = document.getElementById('nav')
const backToTop = document.querySelector('.arrow');
const sections = document.querySelectorAll('section > h2');


window.addEventListener('scroll', () => {
const scrollHeight = window.pageYOffset;
const linksContainerHeight = linksContainer.getBoundingClientRect().height;

		if (scrollHeight > linksContainerHeight) {
				nav.classList.add('fixed-nav');
		} else {
				nav.classList.remove('fixed-nav');
		}
		
		//****Back To Top arrow*****
		if (scrollHeight > 400) {
				backToTop.classList.add('show-links');
		} else {
				backToTop.classList.remove('show-links');
		}		

const navHeight = nav.getBoundingClientRect().height;

sections.forEach(section => {
		if (scrollHeight > section.offsetTop) {
				section.classList.add('position');
				section.style.top = `${navHeight}px`;
		}
})		
})

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(scrollLink => {
		scrollLink.addEventListener('click', e => {
		//prevent default behaviour
				e.preventDefault();
				
			//calculate height	
			const linksContainerHeight = linksContainer.getBoundingClientRect().height;
			const navHeight = nav.getBoundingClientRect().height;
			const fixedNav = nav.classList.contains('fixed-nav');
			
		//get element			
			const id = e.currentTarget.getAttribute('href');
			const element = document.getElementById(id.slice(1));
			let position = element.offsetTop - navHeight;
			
			window.scrollTo({
					top: position,
					left: 0,
			})
			
		//to close nav			
			linksContainer.style.height = 0;	
			header.classList.remove('show-links');
		})
})
