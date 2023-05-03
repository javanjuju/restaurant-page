import {homePage} from './js-modules/home';
import {contactPage} from './js-modules/contact';
import {menuPage} from './js-modules/menu';
import '/home/javan/repos/personal-projects/restaurant-page/src/styles.css';

const page = (() => {
	const mainHeading = document.createElement('div');
	mainHeading.setAttribute('id', 'main-heading');
	mainHeading.textContent = 'Sanji\'s';
	document.body.append(mainHeading);
	const header = document.createElement('div');
	const content = document.createElement('div');
	header.classList.add('header');
	content.classList.add('content');

	(() => {
		const contentIds = ['home', 'menu', 'contact'];
		let i;
		for (i = 0; i < 3; i++) {
			const cell = document.createElement('div');
			cell.setAttribute('id', contentIds[i]);
			cell.setAttribute('data-tabs', '');
			content.appendChild(cell);
		}
	})();

	const headerElements = header.children;
	const contentElements = content.children;
	contentElements[0].classList.add('active');
	document.body.append(header, content);
	return {
		header,
		content,
		headerElements,
		contentElements,
	};
})();
page.header.append(homePage.homeTab, menuPage.menuTab, contactPage.contactTab);
page.contentElements[0].append(homePage.heading, homePage.welcomeMessage, homePage.hours);
page.contentElements[1].append(menuPage.menuItems);
page.contentElements[2].append(contactPage.area, contactPage.number, contactPage.email);

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tabs]');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('active');
		});
		target.classList.add('active');
	});
},
);
