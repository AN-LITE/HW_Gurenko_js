'use strict';

void function ()  {

    const ul = document.querySelector('ul');
    const arrLi = Array.from(ul.children);
    const arrCars = [];

    for (let node of arrLi) {

        console.log(node);
    }

    console.log(arrLi.length);

    for (let node of arrLi) {
        
        arrCars.push(node.innerHTML);
    }

    console.log(arrCars);

}();






