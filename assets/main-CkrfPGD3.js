document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".burger-btn"),o=document.querySelector(".header__menu"),r=document.querySelector(".overlay"),d=document.querySelectorAll("[data-menu-close]"),l=document.querySelectorAll("[data-menu-toggle]");function s(t,c){t.classList.toggle(c)}d.forEach(t=>t.addEventListener("click",a)),l.forEach(t=>t.addEventListener("click",e));function a(){o.classList.remove("header__menu--open"),n.classList.remove("burger-btn--active"),r.classList.remove("overlay--active")}function e(){s(n,"burger-btn--active"),s(o,"header__menu--open"),s(r,"overlay--active")}window.addEventListener("resize",()=>{a()})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".rental-form__btn"),o=document.querySelectorAll(".step"),r=document.querySelector(".rental-steps"),d=document.querySelectorAll(".progress__item"),l=document.querySelector(".rental-card"),s=document.querySelector(".rental-steps__card"),a=document.querySelector(".rental-form");let e=0;function t(i){o.forEach((u,m)=>{u.classList.toggle("hide",m!==i)})}function c(i){d.forEach((u,m)=>{u.classList.toggle("progress__item--active",m===i)})}function v(){e=0,n.innerText="Proceed to Booking",t(null),c(0),l.classList.remove("hide"),s.classList.remove("hide"),r.classList.add("hide"),n.classList.remove("hide")}function g(){n.innerText="Continue",e===0?(l.classList.add("hide"),r.classList.remove("hide"),t(0),c(0)):e<o.length&&(t(e),c(e)),e===o.length-1&&(s.classList.add("hide"),n.classList.add("hide")),e++,e>o.length&&v()}n.addEventListener("click",g),a.addEventListener("submit",g)});
