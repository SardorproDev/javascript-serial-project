window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// TabsContent start
	const tabcontent = document.querySelectorAll('.tabcontent'),
		tabheaderItem = document.querySelectorAll('.tabheader__item'),
		tabsParent = document.querySelector('.tabheader__items');

	// tabcontent hide func
	function hideTabContent() {
		tabcontent.forEach(tabs => {
			tabs.classList.add('hide')
		})
		tabheaderItem.forEach(item => {
			item.classList.remove('tabheader__item_active')
		})
	}

	// tabcontent hide func
	function showTabContent(i = 0) {
		tabcontent[i].classList.remove('hide');
		tabcontent[i].classList.add('slow')
		tabcontent[i].classList.add('show');
		tabheaderItem[i].classList.add('tabheader__item_active');
	}
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabheaderItem.forEach((item, idx) => {
				if (target === item) {
					hideTabContent();
					showTabContent(idx);
				}
			})
		}
	})

	// Loader start
	// const loader = document.querySelector('.loader');

	// setTimeout(() => {
	// 	loader.style.opacity = '0';
	// 	setTimeout(() => {
	// 		loader.classList.add('hide');
	// 	}, 500)
	// }, 1000);

	// modal start
	const modal = document.querySelector('.modal'),
		modalOpen = document.querySelector('[data-modal]'),
		modalClose = document.querySelector('[data-close]');

	const modalTimer = setTimeout(() => {
		showModal();
	}, 5000)
	function showModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		clearInterval(modalTimer);
	}
	function hideModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
	}
	modalOpen.addEventListener('click', showModal);
	modalClose.addEventListener('click', hideModal);
	modal.addEventListener('click', (e) => {
		if (modal === e.target) {
			hideModal();
		}
	})

	function showModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		clearInterval(modalTimer);
	}

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 1) {
			showModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);

	// Class

	class MenuCard {
		constructor(img, alt, title, descr, price, parenElement, ...classes) {
			this.img = img,
			this.alt = alt,
			this.title = title,
			this.descr = descr,
			this.price = price,
			this.transfer = 11000,
			this.parent = document.querySelector(parenElement),
			this.classes = classes,
			this.changeToUSZ()
		}

		changeToUSZ() {
			this.price = this.price * this.transfer
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else{ 
				this.classes.forEach(className => element.classList.add(className))
			}

			element.innerHTML = `
				<img src=${this.img} alt=${this.alt} />
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Price:</div>
					<div class="menu__item-total"><span>${this.price}</span> month</div>
				</div>
			`
			this.parent.append(element)
		}
	}

	new MenuCard(
		'img/tabs/1.png',
		'vegy',
		'Plan "Usual"',
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
		10,
		'.menu .container'
	).render()
	new MenuCard(
		'img/tabs/2.jpg',
		'elite',
		'Plan “Premium”',
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
		15,
		'.menu .container'
	).render()
	new MenuCard(
		'img/tabs/3.jpg',
		'post',
		'Plan "VIP"',
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
		20,
		'.menu .container'
	).render()
})