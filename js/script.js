//header


// change color of active link in header item


//control in width of home section
var header_ele = document.querySelector(".header");
var first_ele = document.querySelector(".home");
first_ele.style.height = window.innerHeight - header_ele.offsetHeight + "px"
first_ele.style.marginTop = header_ele.offsetHeight + "px"


//change the icon of dark-light header
var dark = document.querySelector(".navbar-light .nav-link i");
dark.onclick = function () {
    dark.classList.toggle("fa-moon");
    dark.classList.toggle("fa-sun");
}

//scrolling
var button_scroll = document.querySelector(".button-scroll");
window.onscroll = function () {
    //show/hide button scroll when scrolling
    if (pageYOffset > 500) {
        button_scroll.classList.add("show");
        button_scroll.classList.remove("hide1");
    } else {
        button_scroll.classList.add("hide1")
        button_scroll.classList.remove("show")
    }
    //put shadow on header when scrolling
    if (pageYOffset > 30) {
        header_ele.classList.add("shadow")
    } else {
        header_ele.classList.remove("shadow")
    }

}
button_scroll.onclick = function () {
    first_ele.scrollIntoView({ block: "end", behavior: "smooth" })
}


//loder
window.onload = function () {
    document.querySelector(".preloader").classList.add("hidep")
}



//msg-contact me info
var button_msg = document.querySelector("#liveToastBtn");
var button_msg_close = document.querySelector(".btn-close");
var msg = document.querySelector(".msg-contact div");
button_msg.onclick = function () {
    msg.classList.remove("hide")
}
button_msg_close.onclick = function () {
    msg.classList.add("hide")
}

setTimeout(function () {
    msg.classList.remove("hide");
}, 60000)


//dark theme
var dark_button = document.querySelector(".dark-theme");
// document.querySelector("body").classList.toggle("the-dark");
dark_button.onclick = function () {
    document.querySelector("body").classList.toggle("the-dark");
}






