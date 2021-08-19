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

$(document).ready(function () {
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
function contactFunction() {
    document.getElementById("hidden-content").className = "d-inline"
}

function hideFunction() {
    document.getElementById("hidden-content").className = "d-none"
}

// Grp Text Hover 
function grpTextIn() {
    document.getElementsByClassName("grp-text")[0].style.opacity = "1"
    document.getElementsByClassName("grp-text")[0].style.zIndex = "7"
}

function grpTextOut() {
    document.getElementsByClassName("grp-text")[0].style.opacity = "0"
    document.getElementsByClassName("grp-text")[0].style.zIndex = "0"
}

var size = window.matchMedia("(max-width: 500px)")

// Commercial Hover
function commercialIn() {
    document.getElementsByClassName("hover_center")[0].style.zIndex = "0"
    document.getElementsByClassName("dots")[0].classList.add("d-none")
    document.getElementsByClassName("expand")[0].classList.remove("d-none")
    if (!size.matches) {
        document.getElementsByClassName("res-hover")[0].style.zIndex = "1"

    } else {
        document.getElementsByClassName("feature-content")[0].classList.remove("d-none");
        document.getElementsByClassName("close-service")[0].classList.remove("d-none");
        document.getElementsByClassName("tp_innerdiv")[0].classList.add("show");
        document.getElementsByClassName("tp_divone")[0].classList.add("d-none");
    }
}

function commercialOut() {
    document.getElementsByClassName("hover_center")[0].style.zIndex = "4"
    document.getElementsByClassName("dots")[0].classList.remove("d-none")
    document.getElementsByClassName("expand")[0].classList.add("d-none")
    if (!size.matches) {
        document.getElementsByClassName("res-hover")[0].style.zIndex = "-1"
    } else {
        document.getElementsByClassName("feature-content")[0].classList.add("d-none");
        document.getElementsByClassName("close-service")[0].classList.add("d-none");
        document.getElementsByClassName("tp_innerdiv")[0].classList.remove("show");
        document.getElementsByClassName("tp_divone")[0].classList.remove("d-none");
    }
}

// Home Hover

function homeIn() {
    document.getElementsByClassName("dots")[1].classList.add("d-none")
    document.getElementsByClassName("expand")[1].classList.remove("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[1].style.zIndex = "3"
    } else {
        document.getElementsByClassName("tp_innerdiv")[1].classList.add("show")
        document.getElementsByClassName("hover_left")[0].classList.add("d-none")
        document.getElementsByClassName("tp_divone")[0].classList.add("d-none")
        document.getElementsByClassName("feature-content")[1].classList.remove("d-none")
        document.getElementsByClassName("close-service")[1].classList.remove("d-none")
    }
}

function homeOut() {
    document.getElementsByClassName("dots")[1].classList.remove("d-none")
    document.getElementsByClassName("expand")[1].classList.add("d-none")
    if (!size.matches) {
        document.getElementsByClassName("res-hover")[1].style.zIndex = "-1"
    } else {
        document.getElementsByClassName("hover_left")[0].classList.remove("d-none")
        document.getElementsByClassName("feature-content")[1].classList.add("d-none");
        document.getElementsByClassName("close-service")[1].classList.add("d-none");
        document.getElementsByClassName("tp_innerdiv")[1].classList.remove("show");
        document.getElementsByClassName("tp_divone")[0].classList.remove("d-none");
    }
}

// Plumbing Hover

function plumbingIn() {
    document.getElementsByClassName("dots")[2].classList.add("d-none")
    document.getElementsByClassName("expand")[2].classList.remove("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[2].style.zIndex = "1"
        document.getElementsByClassName("hover_center")[1].style.zIndex = "0"
        document.getElementsByClassName("hover_right")[0].style.zIndex = "0"
    } else {
        document.getElementsByClassName("tp_innerdiv")[2].classList.add("show")
        document.getElementsByClassName("hover_center")[2].classList.add("d-none")
        document.getElementsByClassName("hover_right")[0].classList.add("d-none")
        document.getElementsByClassName("tp_divone")[1].classList.add("d-none")
        document.getElementsByClassName("feature-content")[2].classList.remove("d-none")
        document.getElementsByClassName("close-service")[2].classList.remove("d-none")
    }
}

function plumbingOut() {
    document.getElementsByClassName("dots")[2].classList.remove("d-none")
    document.getElementsByClassName("expand")[2].classList.add("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[2].style.zIndex = "-1"
        document.getElementsByClassName("hover_center")[1].style.zIndex = "4"
        document.getElementsByClassName("hover_right")[0].style.zIndex = "6"
    } else {
        document.getElementsByClassName("tp_innerdiv")[2].classList.remove("show")
        document.getElementsByClassName("hover_center")[2].classList.remove("d-none")
        document.getElementsByClassName("hover_right")[0].classList.remove("d-none")
        document.getElementsByClassName("tp_divone")[1].classList.remove("d-none")
        document.getElementsByClassName("feature-content")[2].classList.add("d-none")
        document.getElementsByClassName("close-service")[2].classList.add("d-none")
    }
}

// Electrical Hover

function electricalIn() {

    document.getElementsByClassName("dots")[3].classList.add("d-none")
    document.getElementsByClassName("expand")[3].classList.remove("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[3].style.zIndex = "3"
        document.getElementsByClassName("hover_right")[0].style.zIndex = "0"
    } else {
        document.getElementsByClassName("tp_innerdiv")[3].classList.add("show")
        document.getElementsByClassName("hover_left")[1].classList.add("d-none")
        document.getElementsByClassName("hover_right")[0].classList.add("d-none")
        document.getElementsByClassName("tp_divone")[1].classList.add("d-none")
        document.getElementsByClassName("feature-content")[3].classList.remove("d-none")
        document.getElementsByClassName("close-service")[3].classList.remove("d-none")
    }
}

function electricalOut() {
    document.getElementsByClassName("dots")[3].classList.remove("d-none")
    document.getElementsByClassName("expand")[3].classList.add("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[3].style.zIndex = "-1"
        document.getElementsByClassName("hover_right")[0].style.zIndex = "6"
    } else {
        document.getElementsByClassName("tp_innerdiv")[3].classList.remove("show")
        document.getElementsByClassName("hover_left")[1].classList.remove("d-none")
        document.getElementsByClassName("hover_right")[0].classList.remove("d-none")
        document.getElementsByClassName("tp_divone")[1].classList.remove("d-none")
        document.getElementsByClassName("feature-content")[3].classList.add("d-none")
        document.getElementsByClassName("close-service")[3].classList.add("d-none")
    }
}

// Sewage Hover

function sewageIn() {
    document.getElementsByClassName("dots")[4].classList.add("d-none")
    document.getElementsByClassName("expand")[4].classList.remove("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[4].style.zIndex = "5"
    } else {
        document.getElementsByClassName("tp_innerdiv")[4].classList.add("show")
        document.getElementsByClassName("hover_left")[1].classList.add("d-none")
        document.getElementsByClassName("hover_center")[1].classList.add("d-none")
        document.getElementsByClassName("tp_divone")[1].classList.add("d-none")
        document.getElementsByClassName("feature-content")[4].classList.remove("d-none")
        document.getElementsByClassName("close-service")[4].classList.remove("d-none")
    }
}

function sewageOut() {
    document.getElementsByClassName("dots")[4].classList.remove("d-none")
    document.getElementsByClassName("expand")[4].classList.add("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[4].style.zIndex = "-1"
    } else {
        document.getElementsByClassName("tp_innerdiv")[4].classList.remove("show")
        document.getElementsByClassName("hover_left")[1].classList.remove("d-none")
        document.getElementsByClassName("hover_center")[1].classList.remove("d-none")
        document.getElementsByClassName("tp_divone")[1].classList.remove("d-none")
        document.getElementsByClassName("feature-content")[4].classList.add("d-none")
        document.getElementsByClassName("close-service")[4].classList.add("d-none")
    }

}

// Pest-control Hover

function pestIn() {
    document.getElementsByClassName("dots")[5].classList.add("d-none")
    document.getElementsByClassName("expand")[5].classList.remove("d-none")
    if (!size.matches) {
        document.getElementsByClassName("res-hover")[5].style.zIndex = "1"
        document.getElementsByClassName("hover_center")[2].style.zIndex = "0"
        document.getElementsByClassName("hover_right")[1].style.zIndex = "0"
    } else {
        document.getElementsByClassName("hover_center")[2].classList.add("d-none")
        document.getElementsByClassName("hover_right")[1].classList.add("d-none")
        document.getElementsByClassName("tp_innerdiv")[5].classList.add("show")
        document.getElementsByClassName("tp_divone")[2].classList.add("d-none")
        document.getElementsByClassName("feature-content")[5].classList.remove("d-none")
        document.getElementsByClassName("close-service")[5].classList.remove("d-none")
    }
}

function pestOut() {
    document.getElementsByClassName("dots")[5].classList.remove("d-none")
    document.getElementsByClassName("expand")[5].classList.add("d-none")
    if (!size.matches) {
        document.getElementsByClassName("res-hover")[5].style.zIndex = "-1"
        document.getElementsByClassName("hover_center")[2].style.zIndex = "4"
        document.getElementsByClassName("hover_right")[1].style.zIndex = "6"
    } else {
        document.getElementsByClassName("hover_center")[2].classList.remove("d-none")
        document.getElementsByClassName("hover_right")[1].classList.remove("d-none")
        document.getElementsByClassName("tp_innerdiv")[5].classList.remove("show")
        document.getElementsByClassName("tp_divone")[2].classList.remove("d-none")
        document.getElementsByClassName("feature-content")[5].classList.add("d-none")
        document.getElementsByClassName("close-service")[5].classList.add("d-none")
    }
}

// Painting Hover

function paintingIn() {

    document.getElementsByClassName("dots")[6].classList.add("d-none")
    document.getElementsByClassName("expand")[6].classList.remove("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[6].style.zIndex = "3"
        document.getElementsByClassName("hover_right")[1].style.zIndex = "0"
    } else {
        document.getElementsByClassName("tp_innerdiv")[6].classList.add("show")
        document.getElementsByClassName("hover_left")[2].classList.add("d-none")
        document.getElementsByClassName("hover_right")[1].classList.add("d-none")
        document.getElementsByClassName("tp_divone")[2].classList.add("d-none")
        document.getElementsByClassName("feature-content")[6].classList.remove("d-none")
        document.getElementsByClassName("close-service")[6].classList.remove("d-none")
    }
}

function paintingOut() {

    document.getElementsByClassName("dots")[6].classList.remove("d-none")
    document.getElementsByClassName("expand")[6].classList.add("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[6].style.zIndex = "-1"
        document.getElementsByClassName("hover_right")[1].style.zIndex = "6"
    } else {
        document.getElementsByClassName("tp_innerdiv")[6].classList.remove("show")
        document.getElementsByClassName("hover_left")[2].classList.remove("d-none")
        document.getElementsByClassName("hover_right")[1].classList.remove("d-none")
        document.getElementsByClassName("tp_divone")[2].classList.remove("d-none")
        document.getElementsByClassName("feature-content")[6].classList.add("d-none")
        document.getElementsByClassName("close-service")[6].classList.add("d-none")
    }
}

// Furniture Hover

function furnitureIn() {

    document.getElementsByClassName("dots")[7].classList.add("d-none")
    document.getElementsByClassName("expand")[7].classList.remove("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[7].style.zIndex = "5"
    } else {
        document.getElementsByClassName("tp_innerdiv")[7].classList.add("show")
        document.getElementsByClassName("hover_left")[2].classList.add("d-none")
        document.getElementsByClassName("hover_center")[2].classList.add("d-none")
        document.getElementsByClassName("tp_divone")[2].classList.add("d-none")
        document.getElementsByClassName("feature-content")[7].classList.remove("d-none")
        document.getElementsByClassName("close-service")[7].classList.remove("d-none")
    }
}

function furnitureOut() {

    document.getElementsByClassName("dots")[7].classList.remove("d-none")
    document.getElementsByClassName("expand")[7].classList.add("d-none")
    if (!window.matchMedia("(max-width: 500px)").matches) {
        document.getElementsByClassName("res-hover")[7].style.zIndex = "-1"
    } else {
        document.getElementsByClassName("tp_innerdiv")[7].classList.remove("show")
        document.getElementsByClassName("hover_left")[2].classList.remove("d-none")
        document.getElementsByClassName("hover_center")[2].classList.remove("d-none")
        document.getElementsByClassName("tp_divone")[2].classList.remove("d-none")
        document.getElementsByClassName("feature-content")[7].classList.add("d-none")
        document.getElementsByClassName("close-service")[7].classList.add("d-none")
    }
}

// Grp Text Hover 

function grpTextIn() {
    document.getElementsByClassName("grp-text")[0].style.opacity = "1"
    document.getElementsByClassName("grp-logo")[0].style.opacity = "0.7"
    document.getElementsByClassName("grp-text")[0].style.zIndex = "7"
}

function grpTextOut() {
    document.getElementsByClassName("grp-text")[0].style.opacity = "0"
    document.getElementsByClassName("grp-logo")[0].style.opacity = "0.2"
    document.getElementsByClassName("grp-text")[0].style.zIndex = "0"
}

// Gallery Function

function galFunc(img) {

    document.getElementsByClassName("carousel-item active")[0].classList.remove("active");

    var carouselElements = document.getElementsByClassName("carousel-item");

    for (let i = 0; i < carouselElements.length; i++) {
        if ((carouselElements[i].children[0].src == img.src)) {
            carouselElements[i].classList.add("active");
            break;
        }
    }
}

function openGallery() {
    document.getElementsByClassName("gal-section")[0].classList.remove("d-none");
}

function closeGallery() {
    document.getElementsByClassName("gal-section")[0].classList.add("d-none");
}