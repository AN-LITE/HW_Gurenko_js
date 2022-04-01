'use strict'

let old = prompt('Какого ты года рождения?');
let city = prompt('В каком городе ты живешь?');
let sport = prompt('Какой твой любимый вид спорта?');

let age 

//  (old <= 2022) ? (age = 2022 - old) : alert('Жаль,шо ты не ввел свой год рождения');



 
if (old <= 2022){ 
    age = (2022 - old)

} else {
    alert('Жаль,шо ты не ввел свой год рождения')
}
 
 

let town ;
 
if (city === 'Киев'){ 
    town = ('Ты живешь в столице Украины')
   
 
}else if (city === 'Москва'){ 
    town = ('Ты живешь в столице России')  
    
 
}else if (city === 'Минск'){ 
    town = ('Ты живешь в столице Беларусии') 
   

}else if (typeof city === null || typeof city === 'null' || typeof city === '' ){
    alert ('Жаль,но ты по моему перепутал')
   

}else if (typeof city === 'string'){
    town = 'Ты живешь в городе ' + city
    
        
}else {
    alert ('Жаль,шо ты нигде не живешь..')
}


let yourSport ;


if (sport === 'Шахматы'){
    yourSport = ( 'Круто! хочешь быть как я??')

}else if (sport === 'кс го'){
    yourSport = ( 'Круто! хочешь быть как Симпл?')

}else if (sport === 'дока 2'){
    yourSport = ( 'Круто! хочешь быть как Денди?')

}else if (typeof sport === '' || typeof sport === 'null' || typeof sport === null ){
    yourSport = ('По-моему ты что-то перепутал')


}else if (typeof sport === 'string'){
    yourSport =('Ты любишь ' + sport)

} else {
     alert ('Жаль,шо ты ноль')
}

if (typeof sport === 'undefined' || old === 'undefined' || city === 'undefined'){
    alert ('Ты шо-то ввел не то')
        
}else 
    alert(` Тебе ${age}\n ${town}\n ${yourSport} `);
    
   




