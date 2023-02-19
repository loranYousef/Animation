const menu = document.querySelector('.menu-btn')
function navToggle(e){
gsap.to('.line1',0,5,{rotate:"45",y:4,background:"black"})
gsap.to('.line2',0,5,{rotate:"-45",y:-4,background:"black"})
gsap.to('#logo',{color:"black"})
}


menu.addEventListener('click',navToggle)