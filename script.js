const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnimg = document.querySelector('#nav-btn-img');

navBtn.onclick = () =>{
    if(nav.classList.toggle('open')){
        navBtnimg.src =  "./img/close.svg";
    }else{
navBtnimg.src = "./img/NAV.svg";
    }
}


AOS.init();
let switched = document.querySelector('.dark');

let header = document.querySelector('header');
let services = document.querySelector('.services');
let portfolio = document.querySelector('.portfolio')
let contacts = document.querySelector('.contacts')



switched.addEventListener('click', () =>{
    if(header.classList.contains('dark-mode')){
        header.classList.remove('dark-mode');
        services.classList.remove('dark-mode');
        portfolio.classList.remove('dark-mode');
        contacts.classList.remove('dark-mode');
        switched.textContent= 'dark';
        console.log('if');
    }else{
        header.classList.add('dark-mode')
        services.classList.add('dark-mode')
        portfolio.classList.add('dark-mode')
        contacts.classList.add('dark-mode')
        switched.textContent='light'
        console.log('else');
    }
})
















