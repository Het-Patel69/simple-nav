const navList = document.querySelector('.nav-list');
const navToggler = document.querySelector('.mobile-nav-toggle');

navToggler.addEventListener('click', () => {
    const visibility = navList.getAttribute('data-visible')
    if(visibility === "false"){
        navList.setAttribute('data-visible',"true")
        navToggler.setAttribute('area-expanded',"true")
    }
    else if(visibility === "true"){
        navList.setAttribute('data-visible',"false")
        navToggler.setAttribute('area-expanded',"false")
    }
});