document.addEventListener('DOMContentLoaded', function () {
	const linkFace = document.querySelector('#linkfacebook');
	const linkLocation = document.getElementById('linklocation');
	const linkInsta = document.getElementById('linkinsta');
	const hamMenu = document.querySelector('.menu__bar');
	const offScreenMenu = document.querySelector('.menu__offscreen');
	const spans = document.querySelectorAll('.span');
	const footerLinks = document.querySelectorAll('.footer__link');
	const footerYear = document.querySelector('.footer__year');

	const cards = document.querySelectorAll('.kurse__cards-container');
	const beschB = document.querySelector('.kurse__cards-container-div-beschB');
	const beschC = document.querySelector('.kurse__cards-container-div-beschC');
	const beschM = document.querySelector('.kurse__cards-container-div-beschM');
	const priceB = document.querySelector('.priceB');
	const priceC = document.querySelector('.priceC');
	const priceM = document.querySelector('.priceM');

	const cakeBtn = document.querySelector('.cake__btn');
	const macaronBtn = document.querySelector('.macaron__btn');
	const breadBtn = document.querySelector('.bread__btn');

	const gutscheinBtn = document.querySelector('.gutschein__btn');

	// Funktion zum Hinzufügen von Event-Listenern basierend auf dem Media Query
	function applyCardEventListeners() {
		const isSmallScreen = window.matchMedia('(max-width: 767.98px)').matches;

		cards.forEach((card) => {
			// Entferne die vorherigen Event-Listener, um doppelte Event-Listener zu vermeiden
			removeMouseListeners(card);

			// Wenn es ein kleiner Bildschirm ist, verwenden wir den 'click' Event
			if (isSmallScreen) {
				card.addEventListener('click', () => {
					// Stelle sicher, dass alle anderen Karten zurückgesetzt werden
					cards.forEach((otherCard) => {
						if (otherCard !== card) {
							resetCard(otherCard);
						}
					});

					// Änderungen nur für die angeklickte Karte
					applyCardChanges(card);
				});
			} else {
				// Bei größeren Bildschirmen verwenden wir 'mouseenter' und 'mouseleave'
				addMouseListeners(card); // Füge mouseenter/mouseleave Event-Listener hinzu
			}
		});
	}

	// Hilfsfunktion, um alle mouseenter/mouseleave-Listener hinzuzufügen
	function addMouseListeners(card) {
		card.addEventListener('mouseenter', () => {
			applyCardChanges(card);
		});

		card.addEventListener('mouseleave', () => {
			resetCard(card);
		});
	}

	// Hilfsfunktion, um alle mouseenter/mouseleave-Listener zu entfernen
	function removeMouseListeners(card) {
		card.removeEventListener('mouseenter', () => {
			applyCardChanges(card);
		});

		card.removeEventListener('mouseleave', () => {
			resetCard(card);
		});
	}

	// Hilfsfunktion, um alle Stile zurückzusetzen
	function resetCard(card) {
		const otherContainerDiv = card.querySelector('.kurse__cards-container-div');
		const otherContainerDivB = card.querySelector(
			'.kurse__cards-container-div-beschB'
		);
		const otherContainerDivC = card.querySelector(
			'.kurse__cards-container-div-beschC'
		);
		const otherContainerDivM = card.querySelector(
			'.kurse__cards-container-div-beschM'
		);
		const otherBtn = card.querySelector('.card__btn');
		const otherPriceB = card.querySelector('.priceB');
		const otherPriceC = card.querySelector('.priceC');
		const otherPriceM = card.querySelector('.priceM');

		// Zurücksetzen der Stile auf Standard
		card.setAttribute('style', 'padding: 1.5rem');
		if (otherContainerDiv)
			otherContainerDiv.setAttribute('style', 'background-color: transparent');
		if (otherContainerDivB)
			otherContainerDivB.setAttribute('style', 'display: none');
		if (otherContainerDivC)
			otherContainerDivC.setAttribute('style', 'display: none');
		if (otherContainerDivM)
			otherContainerDivM.setAttribute('style', 'display: none');
		if (otherBtn) otherBtn.setAttribute('style', 'display: none');
		if (otherPriceB) otherPriceB.setAttribute('style', 'display: none');
		if (otherPriceC) otherPriceC.setAttribute('style', 'display: none');
		if (otherPriceM) otherPriceM.setAttribute('style', 'display: none');
	}

	// Hilfsfunktion, um die Stile für die angeklickte bzw. hoverte Karte anzuwenden
	function applyCardChanges(card) {
		const containerDiv = card.querySelector('.kurse__cards-container-div');
		const containerDivB = card.querySelector(
			'.kurse__cards-container-div-beschB'
		);
		const containerDivC = card.querySelector(
			'.kurse__cards-container-div-beschC'
		);
		const containerDivM = card.querySelector(
			'.kurse__cards-container-div-beschM'
		);
		const btn = card.querySelector('.card__btn');

		if (
			containerDiv &&
			(containerDivB || containerDivC || containerDivM) &&
			btn &&
			(priceB || priceC || priceM)
		) {
			// Anwenden der Änderungen auf die angeklickte bzw. hoverte Karte
			card.setAttribute('style', 'padding: 0.7rem');
			containerDiv.setAttribute('style', 'background-color: #ffffffe6');

			if (containerDivB) containerDivB.setAttribute('style', 'display: block');
			if (containerDivC) containerDivC.setAttribute('style', 'display: block');
			if (containerDivM) containerDivM.setAttribute('style', 'display: block');
			if (btn) btn.setAttribute('style', 'display: block');
			if (priceB) priceB.setAttribute('style', 'display: block');
			if (priceC) priceC.setAttribute('style', 'display: block');
			if (priceM) priceM.setAttribute('style', 'display: block');
		} else {
			console.log(
				'Ein oder mehrere der erforderlichen Elemente existieren nicht.'
			);
		}
	}

	// Event-Listener für Buttons "Mehr" und "Weniger"
	breadBtn.addEventListener('click', () => {
		if (beschB.classList.contains('bread1')) {
			beschB.classList.remove('bread1');
			beschB.classList.add('bread2');
			breadBtn.innerHTML = breadBtn.innerHTML.replace('MEHR', 'WENIGER');
			priceB.innerHTML = '120,- pro Person<br />ca. 3 Stunden<br />';
		} else {
			beschB.classList.remove('bread2');
			beschB.classList.add('bread1');
			breadBtn.innerHTML = breadBtn.innerHTML.replace('WENIGER', 'MEHR');
			priceB.innerHTML = '';
		}
	});

	cakeBtn.addEventListener('click', () => {
		if (beschC.classList.contains('cake1')) {
			beschC.classList.remove('cake1');
			beschC.classList.add('cake2');
			cakeBtn.innerHTML = cakeBtn.innerHTML.replace('MEHR', 'WENIGER');
			priceC.innerHTML = '140,- pro Person<br />ca. 5 Stunden<br />';
		} else {
			beschC.classList.remove('cake2');
			beschC.classList.add('cake1');
			cakeBtn.innerHTML = cakeBtn.innerHTML.replace('WENIGER', 'MEHR');
			priceC.innerHTML = '';
		}
	});

	macaronBtn.addEventListener('click', () => {
		if (beschM.classList.contains('macaron1')) {
			beschM.classList.remove('macaron1');
			beschM.classList.add('macaron2');
			macaronBtn.innerHTML = macaronBtn.innerHTML.replace('MEHR', 'WENIGER');
			priceM.innerHTML = '100,- pro Person<br />ca. 4-5 Stunden<br />';
		} else {
			beschM.classList.remove('macaron2');
			beschM.classList.add('macaron1');
			macaronBtn.innerHTML = macaronBtn.innerHTML.replace('WENIGER', 'MEHR');
			priceM.innerHTML = '';
		}
	});

	// Initialisiere Event-Listener
	applyCardEventListeners();

	// Optional: Aktualisieren der Event-Listener, wenn das Fenster die Größe ändert
	window.addEventListener('resize', applyCardEventListeners);

	gutscheinBtn.addEventListener('click', () => {
		gutscheinBtn.style.backgroundColor = '#eaeaea';
		gutscheinBtn.style.color = '#463114';

		// Setze die Hintergrundfarbe nach einer Sekunde zurück
		setTimeout(() => {
			gutscheinBtn.style.backgroundColor = '#463114';
			gutscheinBtn.style.color = '#eaeaea';
		}, 1000);
	});

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
		spans.forEach((span) => span.classList.toggle('active'));
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

	handleCurrentYear();
});
