"use strict";

class Factorial {
  constructor(value) {
    let value = this.value;
  }
  get value (){
    return this._value;
  }
  set value (){
    if (typeof value !== "number"){
      throw new error ("value is NaN");
    }

    this._value = value;
  }
  // recursive function
  // factorial(value) => {
  //   if (value === 1){
  //     return 1;
  //   } else {
  //     return value * factorial(value - 1);
  //   }
  // }

  // iterative count
  factorial (value) => {
    let iter = (counter, acc) => {
      if (counter === 1){
        return acc;
      }
      return iter(counter - 1 , counter * acc);
    }
    return iter (value, 1);
  }
}


module.exports Factorial;
