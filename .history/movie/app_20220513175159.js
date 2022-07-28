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

// ----------storyline-cốt truyện-----------
const storylinebtn = document.querySelector(".storyline-block");
const storylineInfo = document.querySelector(".storyline-block--none");
console.log(storylineInfo);
    storylinebtn.addEventListener("click",function(e) {
        
        storylineInfo.classList.toggle("storyline-info--active");
        if(storylinebtn.textContent === "Xem Thêm") {
            storylinebtn.textContent = "Ẩn Bớt"
        } else {
            storylinebtn.textContent = "Xem Thêm";
        }
        
    });