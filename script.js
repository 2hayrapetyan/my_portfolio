const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnimg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnimg.src = "./img/close.svg";
  } else {
    navBtnimg.src = "./img/NAV.svg";
  }
};

AOS.init();
let switched = document.querySelector(".dark");

let header = document.querySelector("header");
let services = document.querySelector(".services");
let portfolio = document.querySelector(".portfolio");
let contacts = document.querySelector(".contacts");

switched.addEventListener("click", () => {
  if (header.classList.contains("dark-mode")) {
    header.classList.remove("dark-mode");
    services.classList.remove("dark-mode");
    portfolio.classList.remove("dark-mode");
    contacts.classList.remove("dark-mode");
    switched.textContent = "dark";
    console.log("if");
  } else {
    header.classList.add("dark-mode");
    services.classList.add("dark-mode");
    portfolio.classList.add("dark-mode");
    contacts.classList.add("dark-mode");
    switched.textContent = "light";
    console.log("else");
  }
});

let slide = document.querySelector('.project');
let next = document.querySelector('.right');
let prev = document.querySelector('.left');



function nextImage(){
  let i=Array.from(slide.children).findIndex((item)=>item.classList.contains('active'))
  if(i<slide.children.length-1){
    i++;
    slide.children[i-1].classList.remove('active')
  }else{
    slide.children[i].classList.remove('active')
    i = 0
  }
 
 slide.children[i].classList.add('active')
}

next.addEventListener('click',nextImage)


function previousImage(){
let i=Array.from(slide.children).findIndex((item)=>item.classList.contains('active'));
console.log(i);
  if(i > 0){
    i--;
   slide.children[i+1].classList.remove('active')
  }else {
       slide.children[i].classList.remove('active')
    i = slide.children.length - 1 
    
  }

 slide.children[i].classList.add('active')
}

prev.addEventListener('click',previousImage)

