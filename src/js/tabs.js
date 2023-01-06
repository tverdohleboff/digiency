function initializeTabs() {
  const tabs = document.querySelectorAll('.our-work__examples-category');
  for (const tab of tabs) {
    tab.addEventListener('click', clickTab);
  }

  function clickTab(event) {
    const tab = event.target;
    const dataTab = tab.getAttribute('data-tab');

    const selectedTab = document.querySelector('.selected');
    selectedTab.classList.remove('selected');
    tab.classList.add('selected');

    const activeTabContent = document.querySelector('.active');
    activeTabContent.classList.remove('active');

    const nextActiveTabContent = document.querySelector(
      `[data-tab-content="${dataTab}"]`
    );
    nextActiveTabContent.classList.add('active');
  }
}

export default initializeTabs;
