const generalMenu = {
  currentMenu: null,

  closeMenu: function(menuID) {
    let menuDom = document.getElementById(menuID);
    menuDom.style.zIndex = -1;
  },

  openMenu: function(menuID) {
    let menuDom = document.getElementById(menuID);
    menuDom.style.zIndex = 1;
  },



};