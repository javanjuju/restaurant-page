import {homePage} from './js-modules/home';
import {contactPage} from './js-modules/contact';
import {menuPage} from './js-modules/menu';

const page = (() => {
	const header = document.createElement('div');
	const content = document.createElement('div');

	(() => {
		const contentIds = ['home', 'menu', 'about'];
		let i;
		for (i = 0; i < 3; i++) {
			const cell = document.createElement('div');
			cell.setAttribute('id', contentIds[i]);
			content.appendChild(cell);
		}
	})();

	const headerElements = header.children;
	const contentElements = content.children;

	document.body.append(header, content);
	return {
		header,
		content,
		headerElements,
		contentElements,
	};
})();

page.header.append(homePage.homeTab, contactPage.contactTab, menuPage.menuTab);

page.content.append(homePage.heading, homePage.hours, contactPage.number, contactPage.area);

