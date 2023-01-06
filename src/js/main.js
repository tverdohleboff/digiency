import '../scss/main.scss';

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

  const activeTabsContent = document.querySelectorAll('.active');
  for (const activeTabContent of activeTabsContent) {
    activeTabContent.classList.remove('active');
  }
  const nextActiveTabsContent = document.querySelectorAll(
    `[data-tab-content="${dataTab}"]`
  );
  for (const nextActiveTabContent of nextActiveTabsContent) {
    nextActiveTabContent.classList.add('active');
  }
}
