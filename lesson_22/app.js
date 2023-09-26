// function User (name, age, email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     return this;
// }

// User.prototype.getInfo = function (){
//     return `Name:${this.name}, Age: ${this.age}, E-mail: ${this.email} `;
// }

// var user1 = new User("Іван", 25, "ivan@example.com");
// var user2 = new User("Марія", 30, "maria@example.com");

//  console.log(user1.getInfo()); // Виводить: "Ім'я: Іван, Вік: 25, Email: ivan@example.com"
//  //user2.getInfo(); // Виводить: "Ім'я: Марія, Вік: 30, Email: maria@example.com"

const university = {
  universityName: "Polytechnic",
  dean: "mr. Sokol",
};

const faculty = Object.create(university, {
  facultyName: {
    value: "Physics and mathematics",
    configurable: true, // writable:true, and configurable:true - are defaults
  },
  groups: {
    value: [[]],
    configurable: true,
  },
});

function enlistStudent(student) {
  const lastGroup = this.groups[this.groups.length - 1];//the last group length
  if (lastGroup.length < 4) {
    //Made my condition shorter for more easy checking of result
    lastGroup.push(student); //no need to push last group in arr as i did it in 42-th string, beacuse it's already exists
  } else {
    const nextGroup = [];//new group
    nextGroup.push(student);
    this.groups.push(nextGroup);  // push new Array to Nested Array
  }
}

faculty.universityName;
// Polytechnic

enlistStudent.call(faculty, "Taras");
enlistStudent.call(faculty, "Julia");
enlistStudent.call(faculty, "Oleg");
enlistStudent.call(faculty, "Anna");
enlistStudent.call(faculty, "Yana");
enlistStudent.call(faculty, "Denys");
enlistStudent.call(faculty, "Olena");
enlistStudent.call(faculty, "Olga");
enlistStudent.call(faculty, "David");


// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.sayHello = function() {
//   console.log(`Привіт, я ${this.name}`);
// };

// function Cat(name, color) {
//   Animal.call(this, name); // Виклик конструктора батька
//   this.color = color;
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// // Тепер створимо об'єкт Cat
// const cat = new Cat("Мурка", "Сірий");
// console.log(cat.name); // Виведе: "Мурка"
// console.log(cat.color); // Виведе: "Сірий"
// cat.sayHello(); // Виведе: "Привіт, я Мурка"

function Animal(name) {
  this.name = name;
}

Animal.prototype.getInfo = function(obj){
  for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
  }
}

function Mammal(name, lives) {
  Animal.call(this, name);
  this.lives = lives;
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.run = function (){
  console.log(`${this.name} can run`);
  return this;
}

function Bird(name, lives) {
  Animal.call(this, name);
  this.lives = lives;
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function (){
  console.log(`${this.name} can fly`);
  return this;
}

function Dog(name, live, breed) {
  Mammal.call(this, name, live);
  this.breed = breed;
}
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;


function Penguin(name, live, species) {
  Bird.call(this, name, live);
  this.species = species;
}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function(){
  console.log(`${this.name} can't fly`);
  return this;
}

Penguin.prototype.swim = function (){
  console.log(`${this.name} can swim!`)
  return this;
}


const monkey = new Mammal('Chimpo', 'Jungles');
const bird = new Bird('Twitty', 'Forest');
const dog = new Dog ('Chuppy', 'House', 'Retriver');
const penguin = new Penguin('Denny', 'Alasca', 'Megadyptes antipodes');