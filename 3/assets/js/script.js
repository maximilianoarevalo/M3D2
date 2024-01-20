// Funcion para verificar password y mostrar mensaje
function checkPassword(){
    //Se obtienem los valores
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;
    let number3 = document.querySelector('#number3').value;

    // Se suman directamente, ya que se trataran como strings
    let combination = number1 + number2 + number3;

    // Caso password 1
    if(combination === '911'){
        document.querySelector('.password-text').innerHTML = 'password 1 correcto';
    }
    // Caso password 2
    else if (combination === '714'){
        document.querySelector('.password-text').innerHTML = 'password 2 correcto';
    }
    // Caso incorrecto
    else{
        document.querySelector('.password-text').innerHTML = 'password incorrecto';
    }

}