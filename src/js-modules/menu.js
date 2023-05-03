const menuTab = document.createElement('div');
const menuItems = document.createElement('div');

menuItems.textContent = 'Empty for Now';
menuTab.textContent = 'Menu';
const menuPage = (() => {
	menuTab.setAttribute('data-tab-target', '#menu');
	return {
		menuTab,
		menuItems,
	};
})();

export {menuPage};
