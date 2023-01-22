import '../scss/main.scss';
import initializeTabs from './tabs';
import initializeContactUsForm from './contactUsForm';
import initializeSubscribeForm from './subscribeForm';
import initializeScrollToTop from './scrollToTop';
import initializeShowBurgerMenu from './showBurgerMenu';
import initializeThemeSwitcher from './themeSwitcher';
import initializeCarousel from './carousel';

initializeContactUsForm();
initializeTabs();
initializeSubscribeForm();
initializeScrollToTop();
initializeShowBurgerMenu();
initializeThemeSwitcher();
initializeCarousel('clients-feedback__comments-container-mentions');
