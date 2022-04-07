'use srtict'

let num = +prompt('Введите число');
let result = true

if (num === 1){

    alert(false);

}else if (num > 1){

    for (let i = 2 ; i < num ; i++ ){
        if(num % i === 0){
            result = false
            break
        }   
    }
   
    alert (result);

}

