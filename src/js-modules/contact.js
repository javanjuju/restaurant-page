const contactTab = document.createElement('div');
const number = document.createElement('div');
const area = document.createElement('div');

contactTab.textContent = 'Contacts';
number.textContent = 'XXXXXXXXX';
area.textContent = 'XXXXXXX';

const contactPage = (() => {
	contactTab.setAttribute('data-tab-target', '#contact');
	number.classList.add('contact');
	area.classList.add('contact');

	return {
		contactTab,
		number,
		area,
	};
})();

export {contactPage};
