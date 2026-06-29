
/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ==========================
   STICKY HEADER
========================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 80){
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    }else{
        header.style.boxShadow = "none";
    }

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

            navLinks.classList.remove("active");

        }

    });

});


/* ==========================
   FAQ ACCORDION
========================== */

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const p=item.querySelector("p");

    p.style.display="none";

    item.addEventListener("click",()=>{

        faqItems.forEach(i=>{

            if(i!==item){
                i.querySelector("p").style.display="none";
            }

        });

        p.style.display=(p.style.display==="block")?"none":"block";

    });

});


/* ==========================
   SIMPLE SCROLL ANIMATION
========================== */

const reveals=document.querySelectorAll("section");

function revealSections(){

    const trigger=window.innerHeight-100;

    reveals.forEach(sec=>{

        const top=sec.getBoundingClientRect().top;

        if(top<trigger){

            sec.style.opacity="1";
            sec.style.transform="translateY(0)";

        }

    });

}

reveals.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(40px)";
    sec.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealSections);
window.addEventListener("load",revealSections);


/* ==========================
   CONTACT FORM
========================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const inputs=form.querySelectorAll("input[required]");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;
input.style.border="2px solid red";

}else{

input.style.border="1px solid #ddd";

}

});

if(valid){

alert("Thank you! Your request has been submitted.");

form.reset();

}

});

}


/* ==========================
   TESTIMONIAL AUTO SLIDER
========================== */

const slider=document.querySelector(".testimonial-slider");

if(slider){

let index=0;

setInterval(()=>{

const cards=slider.children;

index++;

if(index>=cards.length){

index=0;

}

slider.style.transform=`translateX(-${index*100}%)`;
slider.style.transition="0.7s";

},4000);

}


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#ff2d6f";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="22px";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/* ==========================
   HERO CAROUSEL
========================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slides.length > 0) {

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");

        if (dots[index]) {
            dots[index].classList.add("active");
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}