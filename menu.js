const menu = document.querySlector('menu-navegacion');
 
console.log(menu)
 
 
 
window.addEventListener('click', e=> {
   if(menu.classList.contains('spread') && e.target != menu   ){}
 
})

