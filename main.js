const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close_nav-btn');

//opens nav dropdown
const openNav = () =>{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
const closeNav = () =>{
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

const sidebar = document.querySelector('aside');
const showSideBarBtn = document.querySelector('#show_sidebar-btn');

const hideSideBarbtn= document.querySelector('#hide_sidebar-btn');


const showSideBar = () =>{
    sidebar.style.left = '0';
    showSideBarBtn.style.display ='none';
    hideSideBarbtn.style.display = 'inline-block';

}

const hideSideBar = () =>{
    sidebar.style.left = '-100%';
    showSideBarBtn.style.display ='inline-block';
    hideSideBarbtn.style.display = 'none';

}

showSideBarBtn.addEventListener('click', showSideBar);
hideSideBarbtn.addEventListener('click', hideSideBar);