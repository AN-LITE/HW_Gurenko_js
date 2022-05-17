'use strict'



const counter = (num) => {

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

        

        return `Вызовы : \n * Вызовы функции сложения : ${resultInc.increseCount}\n * Вызовы функции вычитания : ${resultDec.decreseCount}\n * Текущее значние : ${i}`

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


