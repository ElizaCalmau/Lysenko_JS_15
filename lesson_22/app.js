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
    universityName: 'Polytechnic',

  };
  
  const faculty = Object.create(university, {
    facultyName:{ 
        value: 'Physics and mathematics',
        enumerable: true,
        writable:true,
        configurable: true
    },
    groups: {
        value: [],
        enumerable: true,
        writable:true,
        configurable: true
    }
}
  )

function enlistStudent(...val){
    if(this.groups.length < 12){
        return (this.groups.push(...val));
    } 
}
  
  faculty.universityName;
  // Polytechnic
  
  enlistStudent.apply(faculty, ["Taras","Angela","Serhii"])//"Julia", "Anna", "Andrii", "David", "Yana", "Olena", "Oleksandr", "Oleg", "Dmytro", "Mykola"]);
  enlistStudent.apply(faculty, ["Taras","Angela","Serhii",])
  enlistStudent.apply(faculty, ["Taras","Angela","Serhii",])
  enlistStudent.apply(faculty, ["Taras","Angela","Serhii","Yeuhen"])
  enlistStudent.apply(faculty, ["Yeuhen"])
  faculty.groups;
  // [['Taras']]