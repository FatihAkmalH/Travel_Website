//toggle menu
function activeMenu() {
    const menu = document.querySelector('.menu'),
    navbar = document.querySelector('.navbar');
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}

//video 
function pvToggle() {
    const pv = document.querySelector('.promotion-video');
    const video = document.querySelector('video');

    pv.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}