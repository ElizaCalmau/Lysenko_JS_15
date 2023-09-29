// function squareSum(numbers){
//     let sum = 0;
//     numbers.forEach((num) => {
//       return sum += num**2;
//     })
//     return sum;
//   }

//   console.log(squareSum([1,2,4]));

//   function booleanToString(b){
//     return b.toString();
//   }

//  console.log(booleanToString(true));


//  function countPositivesSumNegatives(input) {
//     let positive = input.filter((num) => 
//     {
//         return num > 0
//     });
//     let negative = input.filter((num) => 
//     {
//         return num < 0
//     });

//     let lengthOfPos = positive.length;
//     let sumOfNeg = 0;
//     negative.forEach((el) => {
//         sumOfNeg += el;
//     })

//     let result = [];
//     result.push(lengthOfPos, sumOfNeg);
//      return result;
//   }

//   console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
//   console.log(countPositivesSumNegatives())
class Pet {
    constructor(nameOwner, namePet){
        this.nameOwner = nameOwner;
        this.namePet = namePet;
    };
    get getOwnerName(){
        return this.nameOwner;
    };
    get getPetName(){
        return this.namePet;
    };
    set setNames(names){
        const[owner, pet] = names.split(',');
        this.nameOwner = owner;
        this.namePet = pet;
    }
}

class Labrador extends Pet{
    constructor(nameOwner, namePet, age){
        super(nameOwner, namePet);
        this.age = age;
    }
    get getAge(){
        return this.age;
    };
    set setAge(age){
        this.age = age;
    };
    
}

let dog = new Pet('John', 'Chuppy');
dog.setNames = 'Andy, Lessy';

let Jenny = new Labrador('Kevin','Jenny', 10)