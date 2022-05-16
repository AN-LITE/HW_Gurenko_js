'use strict'


// const counter = () => {

//     let i = 0;

//     let increseCount = 0;

//     let decreseCount = 0;

//     let resultInc = {};

//     let resultDec = {};


//     const increse = () => {

//         i += 1;

//         increseCount += 1;

//         resultInc = {

//             i,
//             increseCount,

//         }

//         return resultInc;
//     }

//     const decrese = () => {

//         i -= 1;
//         decreseCount += 1;

//         resultDec = {

//             i,
//             decreseCount,
            
//         }

//         return resultDec;
//     }

//     const value = () => {

//         return `Value ${i}`;

//     }

//     const getStatistic = () => {

//        return {'Вызовы':'',

//             ' Вызовы функции сложения ' : increseResult.increseCount,
//             ' Вызовы функции вычитания ' : decreseResult.decreseCount,
//             ' Текущее значние ' : i
//        }

//     }

//     const reset = () => {

//         i = 0;
//         increseCount = 0;
//         decreseCount = 0;
//         increseResult.increseCount = 0;
//         decreseResult.decreseCount = 0;

//         return ' Обнуление ';

//     }

//     return {
//         increse,
//         decrese,
//         value,
//         getStatistic,
//         reset
//     }
// }

// const counter1 = counter();

// console.log(counter1.increse());
// console.log(counter1.increse());
// console.log(counter1.increse());
// console.log(counter1.decrese());
// console.log(counter1.value());
// console.log(counter1.getStatistic());
// console.log(counter1.reset());
// console.log(counter1.getStatistic());
// console.log(counter1.increse());
// console.log(counter1.increse());
// console.log(counter1.decrese());
// console.log(counter1.getStatistic());
// console.log(counter1.reset());
// console.log(counter1.getStatistic());






const counter = () => {

    let i = 0;

    let increseCount = 0;

    let decreseCount = 0;

    let resultInc = {};

    let resultDec = {};


    const increse = () => {
        
        i += 5;

        increseCount += 1;

        resultInc = {

            i,
            increseCount,

        }

        return resultInc

    }

    const decrese = () => {

        i -= 2;
        decreseCount += 1;

        resultDec = {

            i,
            decreseCount,

        }

        return resultDec;

    }

    const value = () => {

        return `Value ${i}`

    }

    const getStatistic = () => {

        return {
            
            'Вызовы ':'',

            ' Вызовы функции сложения ' :  resultInc.increseCount,
            ' Вызовы функции вычитания ' : resultDec.decreseCount,
            ' Текущее значние ' : i
        }

    }

    const reset = () => {

        i = 0;
        increseCount = 0;
        decreseCount = 0;
        resultInc.increseCount = 0;
        resultDec.decreseCount = 0;

        return ' Обнуление : ';

    }

    return {

        increse,
        decrese,
        value,
        getStatistic,
        reset
    }

}

const conclusion = counter();

console.log(conclusion.increse());
console.log(conclusion.decrese());
console.log(conclusion.value());
console.log(conclusion.getStatistic());
console.log(conclusion.reset());





// const closure = () =>{

//     let numberRand = [];

//     const generation = () =>{

//         if (numberRand.length === 100) returt;

//         let num = Math.floor(Math.random () * 100);

//         if (!numberRand.includes(num)){
            
//             numberRand.push (num);
//         }

//     }

//     for (let i = 0; numberRand .length < 100 ; i++ )

//     generation()

//     return numberRand 
// }

// let result = closure();

// console.log(result);

