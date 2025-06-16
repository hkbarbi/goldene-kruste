const linkFace = document.querySelector('#linkfacebook');
const linkLocation = document.getElementById('linklocation');
const linkInsta = document.getElementById('linkinsta');
const hamMenu = document.querySelector('.menu__bar');
const offScreenMenu = document.querySelector('.menu__offscreen');
const spans = document.querySelectorAll('.span')
const footerLinks = document.querySelectorAll('.footer__link');
const footerYear = document.querySelector('.footer__year');
const formBtn = document.querySelector('.form__btn');
const allSections = document.querySelectorAll('.section')

const handleObserver = () => {
	const currentScroll = window.scrollY
	let activeSection = null;

	allSections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		if (currentScroll >= sectionTop -50 && currentScroll < sectionTop + sectionHeight) {
			activeSection = section;
		} })

		if (activeSection) {
		if (activeSection.classList.contains('white-section')) {
			spans.forEach((span) => span.classList.add ("black"))
		} else{
			spans.forEach((span) =>span.classList.remove ("black"))
		}
	}
};
window.addEventListener('scroll', () => {handleObserver()});

linkFace.addEventListener('click', () => {
	window.location.replace('https://www.facebook.com/');
});

linkLocation.addEventListener('click', () => {
	window.location.replace('https://www.google.com/maps');
});

linkInsta.addEventListener('click', () => {
	window.location.replace('https://www.instagram.com/');
});

hamMenu.addEventListener('click', () => {
	offScreenMenu.classList.toggle('active');
	spans.forEach(span => span.classList.toggle('active'));
	spans.forEach(span => span.classList.toggle('white'));
});


footerLinks.forEach((footerLink) =>
	footerLink.addEventListener('mouseenter', () => {
		footerLink.classList.toggle('active');
	})
);

footerLinks.forEach((footerLink) =>
	footerLink.addEventListener('mouseout', () => {
		footerLink.classList.toggle('active');
	})
);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};


formBtn.addEventListener('click', () => {
	formBtn.style.backgroundColor = '#c9c9c9';
	formBtn.style.color = '#483214';

	// Setze die Hintergrundfarbe nach einer Sekunde zurück
	setTimeout(() => {
		formBtn.style.backgroundColor = '#5a5249';
		formBtn.style.color = '#f7f7f7';
	}, 1000);
});

handleCurrentYear();

