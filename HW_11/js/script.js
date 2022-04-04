'use strict'

let old = prompt('Какого ты года рождения?');

let age 
 
if (typeof age == "object") {

    alert('Жаль,шо ты не ввел свой год рождения')


} else if  (old <= 2022){ 
    age = 2022 - old
    console.log(age)

    let city = prompt('В каком городе ты живешь?');


    if (typeof city === "object") {
        alert ('Жаль,но ты по моему перепутал')
    }
    
    else if(city === 'Киев'){ 
        alert('Ты живешь в столице Украины')
       
     
    }else if (city === 'Москва'){ 
        alert ('Ты живешь в столице России')  
        
     
    }else if (city === 'Минск'){ 
        alert('Ты живешь в столице Беларусии')  
    
    }
   
    let sport = prompt('Какой твой любимый вид спорта?');

    if (typeof sport === "object") {
        alert ('Жаль,шо ты ноль')
    
    }else if (sport === 'Гольф'){
        alert ( 'Круто! хочешь быть как я??')
    
    }else if (sport === 'кс го'){
        alert ( 'Круто! хочешь быть как Симпл?')
    
    }else if (sport === 'дока 2'){
        alert ( 'Круто! хочешь быть как Денди?')
    
    }else if (typeof sport === '' || typeof sport === 'null' || typeof sport === null ){
        alert ('По-моему ты что-то перепутал')
    
    } else {  
        alert(` Тебе ${age}\n Ты живешь в городе ${city}\n Ты любишь ${sport} `);
        
    }
    
}



