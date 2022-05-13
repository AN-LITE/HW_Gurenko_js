'use strict'

const closure = () =>{

    let numberRand = [];

    const generation = () =>{

        if (numberRand.length === 100) returt;

        let num = Math.floor(Math.random () * 100);

        if (!numberRand.includes(num)){
            
            numberRand.push (num);
        }

    }

    for (let i = 0; numberRand .length < 100 ; i++ )

    generation()

    return numberRand 
}

let result = closure();

console.log(result);

