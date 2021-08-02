// Navbar autohide
$(document).ready(function () {

    el_autohide = document.querySelector('.autohide');
    
    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            } else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
        
    }
});

$(document).ready(function(){
    var Navbar = document.querySelector('.navbar')
    if (Navbar) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                Navbar.classList.add('navbar-bg');
            } else {
                Navbar.classList.remove('navbar-bg');
            }
            last_scroll_top = scroll_top;
        });
        
    }
})

//Transition
$(document).ready(function () {
    $(window).scroll(function () {
        $('.first_page').css("opacity", 1 - $(window).scrollTop() / 100)
        $('.second_page').css("opacity", $(window).scrollTop() / 300)
    })
})

//Contact Us

function contactFunction(){
    document.getElementById("hidden-content").className = "d-inline"
}

function hideFunction(){
    document.getElementById("hidden-content").className = "d-none"
}

function homeIn(){
    document.getElementsByClassName("res-hover")[0].style.zIndex = "3"
}

function homeOut(){
    document.getElementsByClassName("res-hover")[0].style.zIndex = "-1"
}