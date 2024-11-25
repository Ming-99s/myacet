
function scroll() {
    let navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 1) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};
window.onscroll = scroll;
