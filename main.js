const carrusel = ['https://i.ibb.co/9WNMV4J/01.jpg', 
                  'https://i.ibb.co/6gCHqgv/02.jpg', 
                  'https://i.ibb.co/Y3vJrmV/04.jpg', 
                  'https://i.ibb.co/N3nmV8K/04.jpg', 
                  'https://i.ibb.co/9gvSfzq/05.jpg', 
                  'https://i.ibb.co/P4xMRtg/06.jpg', 
                  'https://i.ibb.co/GMdFwd3/07.jpg'];

let buttonNext = document.getElementById('next')
let buttonBack = document.getElementById('back')
let imgActual = 0
let imgContainer = document.getElementById('img-principal')

function galeria (imgName) {
    imgContainer.innerHTML = `<img src="${imgName}" alt="imagenes">`
}
function next () {
    if(imgActual < carrusel.length -1){
        imgActual++
        galeria(carrusel[imgActual])
    }else if (imgActual > 0){
        imgActual = 0
        galeria(carrusel[imgActual])
    }
}

function back () {
    if(imgActual > 0){
        imgActual--
        galeria(carrusel[imgActual])
    }else if (imgActual < carrusel.length -1) {
        imgActual = 6
        galeria(carrusel[imgActual])
    }
}

buttonNext.addEventListener('click', next)
buttonBack.addEventListener('click', back)