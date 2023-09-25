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
    configurable: true,
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
