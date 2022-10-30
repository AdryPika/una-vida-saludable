const gallery = document.querySelectorAll('galeria')
const contenedorslidercontainer = document.querySelector('galeria')
const menu1 = document.querySlector('menu-navegacion');

gallery.forEach(imagen =>{
    imagen.addEventListener('click' , ()=> {
        aparecerImagen(imagen.getAttribute('src'))
    }
)

contenedor.slider-container.addEventListener('click' , (e)=>{
    if(e.target !== slider-container){
        contenedor.slider-container.classList.toggle('galeria')
        .slider-container('img')
        menu1.style.opacity = '1'

    }
})

const aparecerImagen = (imagen)=>{
    slider-container.src = imagen
    contenedors.lider-container.classList.toggle('galeria')
    .slider-container('img')
    menu1.style.opacity = '0'