$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('.movies-slide2').owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 3
            },
            1200: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})
const backToTop =  document.querySelector(".backtotop")
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 400) {
        backToTop.classList.add("active")
    } else {
        backToTop.classList.remove("active")

    }
})