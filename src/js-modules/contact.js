const contactTab = document.createElement('div');
const number = document.createElement('div');
const area = document.createElement('div');
const email = document.createElement('div');

contactTab.textContent = 'Contacts';
email.textContent = 'sanjiskitchen@gmail.com';
number.textContent = 'Number: XXXXXXXXX';
area.textContent = 'Location: XXXXXXX';

const contactPage = (() => {
	contactTab.setAttribute('data-tab-target', '#contact');
	number.classList.add('contact');
	area.classList.add('contact');

	return {
		email,
		contactTab,
		number,
		area,
	};
})();

export {contactPage};
