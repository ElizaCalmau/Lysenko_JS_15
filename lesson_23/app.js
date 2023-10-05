//1. Prototype inheritance

class bankAccount {
  constructor(balance, accountHolder) {
    this._balance = balance;
    this.accountHolder = accountHolder;
  }
  get balance() {
    return this._balance;
  }
  set balance(n) {
    if (n > 0) {
      return (this._balance = n);
    } else {
      console.log("The amount of money in your balance can not be less than 0");
    }
  }
  get getaccountHolder() {
    return this.accountHolder;
  }
  set setAccoutHolder(name) {
    this.accountHolder = name;
  }
}

let user = new bankAccount("100", "Alice");
console.log(`user's balance is ${user.balance}`);
console.log(`user's balance is ${user.balance = '1000'}`);

//2.Encapsulation

class BankAccount {
  #balance = 300;
  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }
  get balance() {
    return this.#balance;
  }
  get userName() {
    return this.accountHolder;
  }
  set userName(name) {
    if (name.length < 4) {
      console.log("Too short");
    } else {
      this.accountHolder = name;
    }
  }
}

let guest = new BankAccount("Jenny");
console.log(`guest's balance is ${guest.balance}`);
console.log(`guest's name is ${guest.userName}`);
console.log(`guest's name is ${guest.userName = 'Anna'}`);

// 3. Inheritance and Polymorphism

class Animal {
  constructor(name) {
    this.name = name;
  }
  getInfo() {
    let info = {
      name: this.name,
    }
    console.log(info);
    return info;
  }
}

class Mammal extends Animal {
  constructor(name, live) {
    super(name);
    this.live = live;
  }
  lives() {
    return this.live;
  }

  speedOfRun(n) {
    if (n > 0) {
      this.speed = n;
      console.log(`${this.name} runs with speed ${this.speed}`);
      return this.speed;
    } else {
      console.log(`${this.name} doesn't run at this moment`);
      return this.speed;
    }
  }
  getInfo(){
    super.getInfo();
    let info = {
      lives: this.lives(),
    }
    console.log(info);
     return info;
  }
}

class Bird extends Animal {
  constructor(name, live) {
    super(name);
    this.live = live;
  }
  lives() {
    return this.live;
  }
 
  fly() {
    this.flies = true;
    //console.log(`${this.name} can fly`);
    return this.flies;
  }
  getInfo(){
    super.getInfo();
    let info = {
      lives: this.lives(),
      fly: this.fly(),
    }
    console.log(info);
     return info;
  }
}

class Dog extends Mammal {
  constructor(name, live, breed) {
    super(name, live);
    this.breed = breed;
  }
  getBreed() {
    return this.breed;
  }
  getInfo(){
    super.getInfo();
    let info = {
      breed: this.getBreed(),
    }
    console.log(info);
    return info;
  }

}

class Penguin extends Bird {
  constructor(name, live, species) {
    super(name, live);
    this.species = species;
  }
  fly() {
    this.flies = false;
    console.log(`${this.name} can't fly`);
    return this.flies;
  }

}

const monkey = new Mammal("Chimpo", "Jungle");
const bird = new Bird("Twitty", "Forest");
const dog = new Dog("Chuppy", "Yard", "Bassed Hound");
const penguin = new Penguin("Pepe", "Australia", "Royal penguin");

monkey.getInfo();
bird.getInfo();
dog.speedOfRun(10);
dog.getInfo();
penguin.getInfo();
//4. Create class Vehicle

class Vehicle {
  constructor(power, gasTank, mass) {
    this.power = power;
    this.gasTank = gasTank;
    this.mass = mass; // in tones
  }
  get getMaxSpeed() {
    this.maxSpeed = Math.trunc((0.84 * this.power) / this.mass);
    console.log(`The max speed is ${this.maxSpeed} km/h`);
    return this;
  }
  gasUsage() {
    this.gasUs = Math.round((this.maxSpeed / this.power) * 10);
    return this;
  }
  get getGasUsage() {
    console.log(`It takes a ${this.gasUs} litres of gas per 100 km`);
    return this;
  }
  startEngine() {
    this.started = true;
    return this;
  }
  stopEngine() {
    this.started = false;
    this.speed = 0;
    return this;
  }
  drive(speed, distance) {
    if (this.started) {
      if (speed > this.maxSpeed) {
        this.speed = this.maxSpeed;
      }
      if (speed < 0) {
        this.speed = 0;
      } else {
        this.speed = speed;
      }
      console.log(`The speed is ${this.speed}`);
    }
    this.gasLeft = this.gasTank;
    this.gasSpent = (distance * this.gasUs) / 1000;
    console.log(
      `it takes ${this.gasSpent} liters of gas to drive ${distance} km`
    );
    this.gasLeft -= this.gasSpent;
    console.log(
      `You have a ${this.gasLeft} (of ${this.gasTank}) liters of gas`
    );
    return this;
  }
  addGas(n) {
    if (n > 0) {
      this.gasLeft += n;
      if (this.gasLeft > this.gasTank) {
        this.gasLeft = this.gasTank;
      }
      console.log(
        `You've added ${n} liters of gas, now you have ${this.gasLeft} (of ${this.gasTank}) ls of gas`
      );
    }
  }
  get printInfo(){
    console.log(`Your current speed is ${this. speed}. You have ${this.gasLeft} ls of gas. Your max Speed is ${this.maxSpeed}. Your gas usage is ${this.gasUs} ls/1000 km. The mass of car is ${this.mass} tones`)
  }
}

class Car extends Vehicle{
    constructor(power, gasTank, mass, type, maxPassengerCount){
        super(power, gasTank, mass);
        this.type = type;
        this.maxPassengerCount = maxPassengerCount;
    }
    get printInfo(){
        super.printInfo;
        console.log(`Type of car is ${this.type}, max quanitiy of passangers is ${this.maxPassengerCount}.`);
    };
    
}

class Bus extends Car{
    constructor(power, gasTank, mass, type, maxPassengerCount){
        super(power, gasTank, mass, type, maxPassengerCount)
    }
    updatePassengers(n){
        this.passangers = 0;
        if(this.passangers > this.maxPassengerCount){
            this.passangers = this.maxPassengerCount;
        } else if(this.passangers < 0){
            this.passangers = 0;

        } else {
            if(n > 0){
                this.passangers += n;
                console.log(`You've take ${n} passangers. Now it's ${this.passangers} passangers.`)
            }
            if (n < 0){
                this.passangers -= n;
                console.log(`You've disembark ${Math.abs(n)} passangers. Now it's ${this.passangers} passangers.`)
            }
        }
        return this.passangers;
    }
    get printInfo(){
        super.printInfo;
        console.log(`Passangers: ${this.passangers}`);
    }
}
let Mazda = new Car(191, 55, 1.2, 'SEDAN', 5);
Mazda.getMaxSpeed;
Mazda.gasUsage();
Mazda.getGasUsage;
Mazda.startEngine();
Mazda.drive(100, 50);
Mazda.addGas(1);
Mazda.addGas(10);
Mazda.printInfo;


let Bogdan = new Bus(129, 100, 5.6, 'MINIVAN', 25);
Bogdan.getMaxSpeed;
Bogdan.gasUsage();
Bogdan.getGasUsage;
Bogdan.startEngine().drive(15, 30);
Bogdan.updatePassengers(10)
Bogdan.updatePassengers(-5);
Bogdan.printInfo;