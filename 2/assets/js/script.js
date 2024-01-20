// Funcion para contar stickers y mostrar mensaje
function checkStickers(){
    //Se obtienen los valores enteros para cada sticker
    let sticker1 = parseInt(document.querySelector('#sticker1').value);
    let sticker2 = parseInt(document.querySelector('#sticker2').value);
    let sticker3 = parseInt(document.querySelector('#sticker3').value);

    // Se valida si algun valor es negativo
    if (sticker1 < 0 || sticker2 < 0 || sticker3 < 0){
        alert("La cantidad de stickers no puede ser negativa.");
    }
    // Se valida si algun valor no se ingresa
    else if (isNaN(sticker1) || isNaN(sticker2) || isNaN(sticker3)){
        alert("Todos los stickers deben tener un valor.")
    }
    // Si pasa las validaciones anteriores se aplica la logica
    else{
        // Se convierten los valores a int y se uman
        let totalStickers = sticker1 + sticker2 + sticker3;

        // Si esta dentro de lo permitido se muestra el mensaje con un display block
        if(totalStickers <= 10){
            document.querySelector('.result-message').innerHTML = 'Llevas ' + totalStickers + ' stickers';
            document.getElementById('#result-message').style.display = 'block';
        }
        // Si no es dentro de lo permitido se muestra el mensaje con un display block
        else{
            document.querySelector('.result-message').innerHTML = 'Llevas demasiados stickers';
            document.getElementById('#result-message').style.display = 'block';
        }
    }

    

}