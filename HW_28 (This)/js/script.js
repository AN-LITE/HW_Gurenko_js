'use strict'


let calculator = {

  read() {
 
    this.a = +prompt('Первое число');
    this.b = +prompt('Второе число');

    if (isNaN(calculator.a) || isNaN(calculator.b)) {
  
    }

  },

  sum() {

    return this.a + this.b;

  },

  mul() {
  
    
  return this.a * this.b;

  }
  
};
  
  calculator.read();

  if (isNaN(calculator.sum()) && isNaN(calculator.sum())) {
        
    alert('ты перепутал одно из чисел')

  }else{

    alert( calculator.sum() );
    alert( calculator.mul() );


  }



  