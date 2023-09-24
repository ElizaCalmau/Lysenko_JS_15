// 1. Task#1
const obj = {
  from: 1,
  to: 10,
  createArr,
};

function createArr() {
  const arr = [];
  this.arr = arr;
  for (let i = this.from; i < this.to; i++) {
    arr.push(i);
  }
  return this.arr;
}

obj.createArr(); // 1-st solution
console.log(obj.arr); // 1-st solution
const binded = createArr.bind(obj);
console.log(binded()); // 2-nd solution
console.log(createArr.call(obj)); //3-rd solution
console.log(createArr.apply(obj)); //3-rd solution

//2. Task#2  CALCULATOR
//First solution
const calculator1 = {
  result: 0,
  Sum,
  Sub,
  Mul,
  Div,
};

function Sum(arg) {
  this.result += arg;
  return this;
}
function Sub(arg) {
  this.result -= arg;
  return this;
}
function Mul(arg) {
  this.result *= arg;
  return this;
}

function Div(arg) {
  this.result /= arg;
  return this;
}
calculator1.Sum(2).Sub(1).Mul(199).Div(12);
const res = calculator1.result;
console.log(res);

//Second Solution
const calculator = {
  result: 0,
  sum: function (a) {
    this.result += a;
    return this;
  },
  sub(a) {
    this.result -= a;
    return this;
  },
  mul: function (a) {
    this.result *= a;
    return this;
  },
  div(a) {
    this.result /= a;
    return this;
  },
};
calculator.sum(3).mul(3).div(2);
const lastResult = calculator.result;
console.log(lastResult);



// 3. Task #3 Constructor Function, Create a Car Constructor
function startEngine (){
  if(this.checkGas){
    this.started = true;
    this.speed = 30;
    console.log(`You car is started`);
  }
  return this;
}

function speedUp (n) {
  if(this.speed > 0){
    this.speed += n;
    this.gasTank -= 5;
    if(this.gasTank <= 0){
      this.stop();
    }
  } 
  if(this.speed >= this.maxSpeed){
    this.speed = this.maxSpeed;
  }
  return this;
}

function stop(){
  if(this.gasTank <= 0){
    this.speed = 0;
    this.gasTank = 0;
    this.started = false;
    console.log(`You have ${this.gasTank} l of gas`)
  } 
  return this;
}

function slowDown(n){
  this.speed -= n;
  this.gasTank -= 5;
  if(this.gasTank <= 0){
    this.stop();
  }
  if(this.speed <= 0){
    this.started = false;
  }
  return this;

}

function addGas(n){
  this.gasTank += n;
  if(this.gasTank > this.maxTankVol){
    this.gasTank = this.maxTankVol;
  }
  return this;
}

function Car(model, color, age, speed, gasTank, started, maxSpeed, maxTankVol) {
  this.model = model;
  this.color = color;
  this.age = age;
  this.speed = speed;
  this.gasTank = gasTank;
  this.started = started;
  this.maxSpeed = maxSpeed;
  this.maxTankVol = maxTankVol;
  this.checkGas = function(){
    if(this.gasTank){
    }
    return this;
  }
  this.startEngine = startEngine;
  this.speedUp = speedUp;
  this.stop = stop;
  this.slowDown = slowDown;
  this.addGas = addGas;
  };



// Car.prototype.startEngine = function () {
//   if (this.gasTank > 0) {
//     this.started = true ? (this.speed += 30) : this.speed == 0;
//     console.log(this.model + "'s engine started." + " Speed is " + this.speed);
//   } else {
//     console.log(this.model + " can't start. Empty gas tank.");
//   }
//   return this;
// };

// Car.prototype.drive = function () {
//   if (this.gasTank > 0 && this.started) {
//     console.log("We are driving");
//     return this;
//   }
// };

// Car.prototype.stop = function () {
//   this.started = false;
//   this.speed = 0;
//   console.log("The car is stoped, the speed is " + this.speed);
//   return this;
// };

// Car.prototype.speedUp = function (arg) {
//   if (this.speed > 0 && this.speed < 200) {
//     this.speed += arg;
//     this.gasTank -= 5;
//     if (this.speed > 199) {
//       console.log("Maximum speed have been reached");
//       this.speed = 200;
//       return this;
//     } else if (this.gasTank <= 0) {
//         this.stop();
//       } else {
//         console.log(
//           "You are speeding up for " +
//             arg +
//             " kilomiters an hour" +
//             " The speed is " +
//             this.speed +
//             " The gas is " +
//             this.gasTank +
//             " litres"
//         );
//       }
//     } 
//      return this;
//   }



// Car.prototype.slowDown = function (arg) {
//   if (this.speed > 0) {
//     this.speed -= arg;
//     console.log(
//       "You are slowing down for " +
//         arg +
//         " kilomiters an hour" +
//         " The speed is " +
//         this.speed +
//         " The gas is " +
//         this.gasTank +
//         " litres"
//     );
//   }
//   if (this.speed == 0) {
//     this.stop();
//   }
//   return this;
// };

// Car.prototype.addGas = function (arg) {
//   this.gasTank += arg;
//   if (this.gasTank <= 20) {
//     console.log(
//       "You have added " +
//         arg +
//         " litres of gas to your " +
//         this.model +
//         " The main quantity of gas is " +
//         this.gasTank
//     );
//   } else {
//     console.log(
//       "Your tank car is 20 litres, you can not add more than 20 litres"
//     );
//     return (this.gasTank = 20);
//   }
//   return this;
// };
 let BMW = new Car("BMW", "red", 5, 0, 20, false, 200, 20);

// newCar.startEngine().drive().speedUp(100).slowDown(10).speedUp(90).slowDown(20).addGas(10).slowDown(160).speedUp(10).speedUp(20).speedUp(30).speedUp(2)


// 4. Task#4 Poker hand



function Poker(names) { 
  this.names = names;
  
  const suits = ['♦️', '♣️', '♥️', '♠️'];
  const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const desk = [];

  for(let suit of suits){
    for(let card of cards){
      desk.push(card+suit)
    };
  }
  desk.sort(() => Math.random() - 0.5);

  this.cardSet = {};
  for ( let name of this.names ){
    this.cardSet[name] = desk.splice(0,5); 
  }
}


function checkFlush(cards){
  const suitsArr = cards.map(card => card.slice(-1));
  const uniqueVals = [...new Set(suitsArr)];//Set returns an array with unique values
  return uniqueVals.length === 1;

}

function checkSequence(cards) {
  const order = 'A2345678910JQK'
  let indexOfVal = cards.map(card => order.indexOf(card.slice(0, -1))).sort((a, b) => a - b); 
  for (let i = 1; i < indexOfVal.length; i++) { 
    if (indexOfVal[i] !== indexOfVal[i - 1] + 1) { 
        return false; 
    } 
    return true;
} 

}

const game = new Poker(['Liza', 'Katya', 'Nastya']);

console.log(checkFlush(game.cardSet['Liza']));
console.log(checkSequence(game.cardSet['Liza']));