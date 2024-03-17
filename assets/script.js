//texto que digita-se automaticamente
const arq = document.querySelector("#text");
const text = "Sejam bem-vindos!";
const time = 100;

function showtime(arq,text,time){
    const char = text.split("").reverse();

    const type = setInterval(() => {

    if(!char.length) {
        return clearInterval(type);
    }

    const next = char.pop();

    arq.innerHTML += next;

     }, time);
}
showtime(arq,text,time);

//Evento de scroll,elementos aparecendo.

window.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){ 

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 350;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
    }
}

//Cabeçalho

const header = document.querySelector('.header')
const logo = document.querySelector('.logomarca')

window.addEventListener('scroll', minHeader)

function minHeader() {
    if(window.pageYOffset > 0 && header.classList.contains('max')) {
        header.classList.replace('max','min');
        logo.style.height = "100px"
    }else if(window.pageYOffset == 0 && header.classList.contains('min')){
        header.classList.replace('min','max');
        logo.style.height = "100px"
        logo.style.width = "100px"
    }
}

//Comando para chegar ao elemento.

const menuItem = document.querySelectorAll('#nav a')
const button = document.querySelectorAll('.slide button a')
const buttonb = document.querySelectorAll('.button-us a')
menuItem.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})
button.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})
buttonb.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTo(element){
    const id = element.getAttribute('href');
     return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTo(event.target) - 50;
    scrollToPosition(to);
}

function scrollToPosition(to){
    /*window.scroll({
        top: to,
        behavior: "smooth"
    });*/
    smoothScrollTo(0, to);
}

/** 
* Smooth scroll animation
* @param {int} endX: destination x coordinate
* @param {int} endY: destination y coordinate
* @param {int} duration: animation duration in ms
*/
function smoothScrollTo(endX, endY, duration) {
 const startX = window.scrollX || window.pageXOffset;
 const startY = window.scrollY || window.pageYOffset;
 const distanceX = endX - startX;
 const distanceY = endY - startY;
 const startTime = new Date().getTime();

 duration = typeof duration !== 'undefined' ? duration : 600;

 // Easing function
 const easeInOutQuart = (time, from, distance, duration) => {
   if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
   return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
 };

 const timer = setInterval(() => {
   const time = new Date().getTime() - startTime;
   const newX = easeInOutQuart(time, startX, distanceX, duration);
   const newY = easeInOutQuart(time, startY, distanceY, duration);
   if (time >= duration) {
     clearInterval(timer);
   }
   window.scroll(newX, newY);
 }, 1000 / 60); // 60 fps
};

//Comando de subir para o topo da página

const btn = document.querySelector('.Top_window')

btn.addEventListener('click',() =>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})

document.addEventListener('scroll',ocult)

function ocult(){
    if(window.scrollY > 200){
        btn.style.display = "flex"
    }else{
        btn.style.display = "none"
    }
}

//Menu mobile

const mobile = document.querySelector('#mobile'); 

function toggleMenu(event) {

    if(event.type === 'touchstart') preventDefault();
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains ('active');
    event.currentTarget.getAttribute('aria-expanded', active);
    if(active) {   
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }  

} 
mobile.addEventListener('click', toggleMenu);
mobile.addEventListener('touchstart', toggleMenu);


