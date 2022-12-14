$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3,
               

            },
            1200: {
                items: 6
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
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
                items: 6
            },
            1600: {
                items: 6
            }
        }
    })

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
const menuItems = document.querySelectorAll(".nav-link");
const navMenu = document.querySelector("#nav-menu");
const navMenuIcon = document.querySelector("#hamburger-menu");
menuItems.forEach((item) => item.addEventListener("click",function() {
    navMenu.classList.remove("active");
    navMenuIcon.classList.remove("active")
}))
// ---------scroll--------
function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
// -------tab---
const tabList= document.querySelectorAll(".tab-item");
const tabConten= document.querySelectorAll(".showtime-list");
[...tabList].forEach((item)=>item.addEventListener("click",handelTabClick));
function handelTabClick(event) {
    // forEach()
    // event.target.classList.remove("is-active")
    [...tabList].forEach((item)=> item.classList.remove("is-active"));
    // console.log(event.target)
    event.target.classList.add("is-active");
    const numberData= parseInt(event.target.dataset.tab);
    // console.log(numberData)
    [...tabConten].forEach((item)=>item.classList.remove("show-active"));
    [...tabConten][numberData-1].classList.add("show-active")
}


// ---------------------Modal-----------
const btnPhotoVideo = document.querySelector(".custom-btn.btn-11.hover-active");
const modal =`<div class="modal">
<div class="modal-overlay"></div>
<div class="modal-content">
  <span class="modal-close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </span>
  <div class="modal-main">
    <form action="" class="form-field">
                <img src="./images/Vector.png" alt="" class="form-field--background">
                <h1 class="form-heading">????ng Nh???p</h1>
                <div style="padding: 15px 30px;">
                    <div class="form-login--name">
                        <input type="text" class="form-input" placeholder=" ">
                        <label for="" class="form-label">FullName</label>
                    </div>
                    <div class="form-login--pass">
                        <input type="password" class="form-input" placeholder=" "/>
                        <label for="" class="form-label">Password</label>
                    </div>
                    
                     <div class="form-forgot">
                    <a href="#" class="form-login--link">Qu??n m???t kh???u ?</a>
                    </div> 
                    <div class="form-checkmark"> 
                        <input type="checkbox" class="form-checkmark--input">                   
                        <label for="" class="form-checkmark--text">Nh??? m???t kh???u</label>
                    </div>
                    
                   
                    <div class="form-btn">
                        <button class="formt-btn--shared formt-btn--login">????ng Nh???p</button>
                        
                    </div>
                    
                    <div class="create-account">
                        <span class="create-account--text">Ch??a c?? t??i kho???n ? 
                            <a href="form_signup.html" target="_self" class="create-account--link">T???o t??i kho???n</a>
                        </span>
                    </div>
                    <div class="sign-with">
                        <p class="sign-with--line">---Ho???c---</p>
                        <p class="sign-with--text">????ng k?? qua</p>
                        <div class="sign-with--list">
                            <a href="#" class="sign-with--link">
                            <img class="sign-with--icon" src="./images/Googel.png" alt="">
                            </a>
                            <a href="#" class="sign-with--link">
                                <img class="sign-with--icon" src="./images/Insta.png" alt="">
                            </a>
                            <a href="#" class="sign-with--link">
                                <img class="sign-with--icon" src="./images/Twitter.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
    
                <img src="./images/DownWave.png" alt="" class="form-field--background">
            </form>
   
    
  </div>
</div>
</div>`;
btnPhotoVideo.addEventListener("click",function() {
    document.body.insertAdjacentHTML("beforeend",modal);
})
// -----close-modal-------
document.body.addEventListener("click",handelClickModal);
function handelClickModal(e) {
    // console.log(e.target);
    if(e.target.matches(".modal-close")) {
        const modalClose= e.target.parentNode.parentNode;
        modalClose.parentNode.removeChild(modalClose);
    }
    else if(e.target.matches(".modal-overlay")) {
        // console.log(e.target.parentNode)
        const overModal = e.target.parentNode;
        overModal.parentNode.removeChild(overModal);
      
    }
}

// ----------------modal-sigup-----------
const btnPhotoVideo2 = document.querySelector(".custom-btn.btn-11.hover-active.btn-sigup");
const modal2 =`<div class="modal">
<div class="modal-overlay"></div>
<div class="modal-content">
  <span class="modal-close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </span>
  <div class="modal-main">
  <form action="" class="form-field">
  <img src="./images/Vector.png" alt="" class="form-field--background">
  <h1 class="form-heading">????ng K??</h1>
  <div style="padding: 0 30px;">
      
          <div class="form-login--name">
              <input type="text" class="form-input" placeholder=" ">
              <label for="" class="form-label">Full Name</label>
          </div>
          
      <div class="form-login--name">
          <input type="email" class="form-input" placeholder=" ">
          <label for="" class="form-label">Email</label>
      </div>
      <div class="form-signup">
          <div class="form-login--name form-signup--mr">
              <input type="password" class="form-input" placeholder=" ">
              <label for="" class="form-label">Password</label>
          </div>
          <div class="form-login--name">
              <input type="password" class="form-input" placeholder=" ">
              <label for="" class="form-label">Confirm Password</label>
          </div>
      </div>
       
      <div class="form-rules"> 
          <input type="checkbox" class="form-checkmark--input">                   
          <p class="form-checkmark--text form-rules--text">T??i ????ng ?? v???i ??i???u kho???n c???a Movie - Platform</p>
      </div>
      
     
      <div class="form-btn">
          <button class="formt-btn--shared formt-btn--login">Sign up</button>
      </div>
      
      <div class="create-account">
          <span class="create-account--text">
              Don???t have account ? <a href="form_login.html" target="_selfe" class="create-account--link">Login</a>
          </span>
      </div>
      <div class="sign-with">
          
          <p class="sign-with--text">Sign in with </p>
          <div class="sign-with--list">
              <a href="#" class="sign-with--link">
              <img class="sign-with--icon" src="./images/Googel.png" alt="">
              </a>
              <a href="#" class="sign-with--link">
                  <img class="sign-with--icon" src="./images/Insta.png" alt="">
              </a>
              <a href="#" class="sign-with--link">
                  <img class="sign-with--icon" src="./images/Twitter.png" alt="">
              </a>
          </div>
      </div>
  </div>

  <img src="./images/DownWave.png" alt="" class="form-field--background">
</form>
   
    
  </div>
</div>
</div>`;
btnPhotoVideo2.addEventListener("click",function() {
    document.body.insertAdjacentHTML("beforeend",modal2);
})
document.body.addEventListener("click",handelClickModal);
function handelClickModal(e) {
    // console.log(e.target);
    if(e.target.matches(".modal-close")) {
        const modalClose= e.target.parentNode.parentNode;
        modalClose.parentNode.removeChild(modalClose);
    }
    else if(e.target.matches(".modal-overlay")) {
        // console.log(e.target.parentNode)
        const overModal = e.target.parentNode;
        overModal.parentNode.removeChild(overModal);
      
    }
}


// ----------navLink active-------
const navItems = document.querySelectorAll(".nav-link");
navItems.forEach((item) => item.addEventListener("click", function(e) {
    navItems.forEach((item) => {
    item.classList.remove("active")

    })
    e.target.classList.add("active");
}))
window.addEventListener("load",function() {

    // -----------Type-DROPDOWN---------
 
    const navType = document.querySelector(".nav-link--type")
    const dropdownListNav = document.querySelector(".type-list");
    const icon = document.querySelector(".nav-link-icon");
    const navItems = document.querySelectorAll(".type-item");
    
    navType.addEventListener("click", function(e) {
        dropdownListNav.classList.toggle("active");
        icon.classList.toggle("fa-caret-up");
       dropdownListNav.style.height= `${dropdownListNav.scrollHeight}px`;

       if(!dropdownListNav.classList.contains("active")) {
        dropdownListNav.style.height= "0px";    
    }
    });
// ----------CLICK ITEM OUT DROPDOWN---------
    // navItems.forEach((item) => item.addEventListener("click", function() {
    //     dropdownListNav.style.height= "0px";    
    //     icon.classList.remove("fa-caret-up");

    // }))

    // Click to document
    // document.addEventListener("click", function (e) {
    //     if (!dropdownNav.contains(e.target)) {
    //     icon.classList.remove("fa-caret-up");
    //     dropdownListNav.style.height= "0px";
    
    //     }
    //   });
})


// ---------BACKTOTOP---------
const backToTop =  document.querySelector(".backtotop")
window.addEventListener("scroll", debounceFn(function() {
    if(window.pageYOffset > 400) {
        backToTop.classList.add("active")
    } else {
        backToTop.classList.remove("active")

    }
    
}))

// ---------DAY-NIGHT---------
const dayNight = document.querySelector(".day-night");
const bgNav = document.querySelector(".nav-wrapper");
const bgBody = document.querySelector(".app");
const bgFooter = document.querySelector(".footer-bg");
const headingTypes = document.querySelectorAll(".booton-text")
const bgItems = document.querySelectorAll(".tab-item");
const bgBtns = document.querySelectorAll(".btn-11")
dayNight.addEventListener("click", function (e) {
    console.log(e.target);
    bgNav.classList.toggle("active")
    bgBody.classList.toggle("active")
    bgFooter.classList.toggle("active")
    headingTypes.forEach((item) => item.classList.toggle("active"))
    bgItems.forEach((item) => item.classList.toggle("bgdark"))
    bgBtns.forEach((item) => item.classList.toggle("btn-drak"))
})
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 1200) {
        dayNight.classList.add("active")
    } else {
        dayNight.classList.remove("active")

    }
    
})
// ------------SEARCH-------
$(".searchBtn").click(function () {        
    $(".icon-search").toggleClass("searchbtnActive");
    $("form").toggleClass("active");        
  });

  
  const header = document.querySelector(".nav-wrapper");
  const headerHeight = header && header.offsetHeight;
  window.addEventListener(
    "scroll",
    debounceFn(function (e) {
      const scrollY = window.pageYOffset;
      if (scrollY >= headerHeight) {
        header && header.classList.add("is-fixed");
        document.body.style.paddingTop = `${headerHeight}px`;
        // if (header) {
        //   header.classList.add("is-fixed");
        // }
      } else {
        header && header.classList.remove("is-fixed");
        document.body.style.paddingTop = 0;
      }
    }, 100)
  );