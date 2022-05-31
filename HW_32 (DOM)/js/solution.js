'use strcit'

void function (){

    const ul = document.querySelector('ul')
    const attributes = ul.attributes
    const myName = 'LITE'
    const newAttr = 'data-my-name'
    let arrName = []
    let arrValue = []
  
    for (let key of attributes) {

        arrName.push(key.name);
        arrValue.push(key.value)
    }
    console.log(arrName);  
    console.log(arrValue);
    
    ul.lastElementChild.innerHTML =  `Привет, меня зовут ${myName}`;
    ul.firstElementChild.setAttribute(newAttr, myName);
    ul.removeAttribute('data-dog-tail');

}();
