const menuTab = document.createElement('div');
menuTab.textContent = 'Menu';
const menuPage = (() => {
	menuTab.setAttribute('data-tab-target', '#menu');
	return {
		menuTab,
	};
})();

export {menuPage};
