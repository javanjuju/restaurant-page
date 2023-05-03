const homeTab = document.createElement('div');
const heading = document.createElement('h1');
const hours = document.createElement('div');
const welcomeMessage = document.createElement('div');

homeTab.textContent = 'Home';
hours.textContent = 'Open daily from 11am to 11pm';
welcomeMessage.textContent = 'A kitchen with a view of the blue seas. Located on a remote island by the Kenyan shore one can enjoy fresh and amazing seafood and local cuisine';
heading.textContent = 'Welcome To Sanji\'s Kitchen';

const homePage = (() => {
	homeTab.setAttribute('data-tab-target', '#home');
	hours.classList.add('home', 'active');
	welcomeMessage.classList.add('home', 'active');
	heading.classList.add('home', 'active');

	return {
		homeTab,
		heading,
		hours,
		welcomeMessage,
	};
})();

export {homePage};
