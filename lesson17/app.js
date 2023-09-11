// 1. Task#1  Return arr of numbers with values that are in range from 'from' param and to 'to' param

function filterRange(arr, from, to){
    console.log(arr.slice(from, to));
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterRange(arr, 3, 7);



// 2. Task #2 Sort arr from least to biggest

const arrOfNums = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
const sortArr = (arr) => {
    console.log(arr.sort((a, b) => { return a-b }))
}
sortArr(arrOfNums);


// 3. Task #3 Sort arr of strings from shortest to longest

const arrOfStrings = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];

const sortArray = (arr) => {
    console.log(arr.sort((a, b) => {return a.length - b.length})); 
}
sortArray(arrOfStrings);


// 4. Task #4 Calculate average age of users older then 17 and younger then 55

const arrOfPerson = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
  ];

  const averageAge = (arr) =>{
    const range = arr.filter((el) => {return el.age > 17 && el.age < 55});//returns a filtered array
    const ages = range.reduce((acc, val) => {
        acc.push(val.age);
        return acc;
    }, []);
    let sum = 0;
    ages.forEach(el => { sum += el;});
    const average = sum / range.length;
    console.log(average);
  };

  averageAge(arrOfPerson);


// 5. Task#5 Sort arr by name if 2 elements have same name sort by age

const usersArr = [
    { name: "John", age: 25 },
    { name: "John", age: 5 },
    { name: "John", age: 2 },
    { name: "John", age: 45 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Mary", age: 2 },
    { name: "Taras", age: 25 },
    { name: "Taras", age: 19 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Alan", age: 32 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
    { name: "Elizabeth", age: 8 },
  ];

const sortUsers = (arr) =>{
    let newArray = arr.sort((a,b) =>{
        let aToLower = a.name.toLowerCase();
        let bToLower = b.name.toLowerCase();
        if(aToLower < bToLower){
            return -1;
        } else if( aToLower > bToLower){
            return 1;
        } else if (aToLower === bToLower){ //or we can just write else {}
            return a.age - b.age;
        }
    })
    console.log(newArray)
}
  
sortUsers(usersArr);

// 6. Task #6 Find min and max and return obj {min, max}
//Use reduce method

const minMaxAge = (arr) =>{
    let obj = arr.reduce((acc, value) => {
        if(value.age < acc.min){
            acc.min = value.age;
        }
        if(value.age > acc.max){
            acc.max = value.age
        } 
        return acc;
    }, {min: 100, max: -100})
    console.log(obj)
}
minMaxAge(arrOfPerson);





// 7. Save unique values from arr to uniqueArr
const strings = [
    "HELLO",
    "World",
    "JS",
    "Js",
    "HI",
    "Hello",
    "HTML",
    "CSS",
    "js",
  ];

const unique = (arr) => {
    const uniqueArr = [];
    arr.forEach( (el) => {
        let transformedEl = el.toUpperCase();
        let stringsMatch = uniqueArr.find( (str) => {
            return str.toUpperCase() === transformedEl;
        });
        if (!stringsMatch) {
            uniqueArr.push(el);
        }
    })
    console.log(uniqueArr);
}  
unique(strings);

// 5. Task#5 Sort arr by name if 2 elements have same name sort by age 
//Taras solution ==>>

// const peopleArr = [
//     { name: "John", age: 25 },
//     { name: "John", age: 5 },
//     { name: "John", age: 2 },
//     { name: "John", age: 45 },
//     { name: "Pete", age: 30 },
//     { name: "Mary", age: 29 },
//     { name: "Mary", age: 2 },
//     { name: "Taras", age: 25 },
//     { name: "Taras", age: 19 },
//     { name: "Kate", age: 74 },
//     { name: "Chris", age: 14 },
//     { name: "Alan", age: 5 },
//     { name: "Alan", age: 32 },
//     { name: "Boris", age: 55 },
//     { name: "Elizabeth", age: 48 },
//     { name: "Elizabeth", age: 8 },
//   ];

// const sortUsers = (arr) =>{    
//     let alphabethSorted = arr.sort((a, b) => {
//         const transformedA = a.name.toLowerCase();
//         const transformedB = b.name.toLowerCase();
//         return transformedA < transformedB ? -1 : transformedA > transformedB? 1: a.age - b.age;

//     });
//     console.log(alphabethSorted);
// }
  
// sortUsers(peopleArr);




// 6. Task#6 Find min and max and return obj {min, max}  Use reduce method

// const minMaxAge = (arr) => {
//     return arr.reduce( (acc, student) => {
//         if(student.age > acc.max) {
//             acc.max = student.age;
//         }
//          if(student.age < acc.min){
//             acc.min = student.age
//         }
//         return acc;
//     }
//     ,{min: Infinity, max: - Infinity})
//     }

// minMaxAge(arrOfPerson);




// 8. Task #8 Find the Longest Consecutive Sequence

// Write a function called findLongestConsecutive that takes an array of numbers
// and finds the longest consecutive subarray of consecutive integers in the given array.
// For example, for the array [1, 2, 3, 4, 5, 2, 3, 4, 5], the function should return [1, 2, 3, 4, 5].
// Sequence should start from 1

const findLongestConsecutive = (arr) => {
    const result = [];
    arr.reduce( (acc, val) => {
        let checker = acc[acc.length - 1] || 0;
        if(checker + 1 === val){
            acc.push(val);
        }
        if(result.length < acc.length){
            result.length = 0;
            result.push(...acc);
        }
        return acc;
    }, [])
    console.log(result)
  }
  
const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9];
findLongestConsecutive(numbers);