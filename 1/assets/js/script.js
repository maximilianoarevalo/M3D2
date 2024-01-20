// Funcion que agrega o quita clase de borde a unage
function clickImage(){
    let imageClass = document.querySelector('#image').className;
    // Si la clase solo es image, se agrega border
    if (imageClass === 'image'){
        document.querySelector('#image').classList.add('border');
    }
    // Caso contrario posible: image border -> se quita border
    else{
        document.querySelector('#image').classList.remove('border');
    }
}