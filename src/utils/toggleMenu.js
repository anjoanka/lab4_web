function toggleMenu() {
    const menuList = document.getElementById('menuList');
    if (menuList.style.maxHeight === "0px" || !menuList.style.maxHeight) {
      menuList.style.maxHeight = "300px";
    } else {
      menuList.style.maxHeight = "0px";
    }
  }
  
export default toggleMenu;
  