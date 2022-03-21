const menu = document.getElementsByClassName('links');
const iconMenu = document.getElementsByClassName('menu_toggle_icon');
const sideMenu = document.getElementsByClassName('side_menu');

const openMenu = () => {
  if (menu[0].clientHeight > 0) {
    iconMenu[0].innerHTML = '<i class="fas fa-caret-down menu_toggle_icon"></i>';
    menu[0].style.cssText = 'height:0px;overflow:hidden;';
  } else {
    iconMenu[0].innerHTML = '<i class="fas fa-caret-up menu_toggle_icon"></i>';
    menu[0].style.cssText = 'height:fit-content';
  }
};

const toggleSideMenu = () => {
  if (sideMenu[0].clientHeight > 0) {
    sideMenu[0].style.cssText = 'height:0; transition:height:0.4s';
  } else {
    sideMenu[0].style.cssText = 'height:25vh; transition:height:0.4s';
  }
};
