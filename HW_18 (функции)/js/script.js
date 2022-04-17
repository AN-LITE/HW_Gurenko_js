'use strict'

const arr = [1, 2, 3, -1, -2, -3];


function positive (arr){
  
    const positiveArr= [];

    for (let i = 0; i < arr.length ;i++){

        if (arr[i]> 0){

            positiveArr.push(arr[i]);
            
        } 
       
    } 

    if (positiveArr.length === 0 ){ 
        
        return 'Массив пустой' ; 
    }

    return positiveArr; 
}

console.log(positive(arr));
