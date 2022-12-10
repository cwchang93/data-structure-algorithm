let name = {
  firstName: 'Jinwei',
  lastName: 'Chang',
  printFullName(){
    console.log(this.firstName + this.lastName);
  }
}

// name.printFullName();

// function borrowing
let name2 = {
  firstName:'JW',
  lastName:'Chen'
}

name.printFullName.call(name2);


// bind會 return function
// => 增加附用性

