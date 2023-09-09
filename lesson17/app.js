// 1. Task#1  Return arr of numbers with values that are in range from 'from' param and to 'to' param

function filterRange(arr, from, to){
    console.log(arr.slice(from, to));
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterRange(arr, 3, 7);



// 2. Task #2 Sort arr from least to biggest

const arrOfNums = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
let sortArr = (arr) => {
    console.log(arr.sort((a, b) => { return a-b }))
}
sortArr(arrOfNums);


// 3. Task #3 Sort arr of strings from shortest to longest

const arrOfStrings = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];

let sortArray = (arr) => {
    console.log(arr.sort((a, b) => {return a.length - b.length})); // чомусь від найбільшого працює, а від найменшого не зовсім вірно ['', 'a', ' ', 'bb', '4534', 'sdfds', 'r4rdv-']
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

  let averageAge = (arr) =>{
    let range = arr.filter((el) => {return el.age > 17 && el.age < 55});//returns a filtered array
    let ages = range.reduce((acc, val) => {
        acc.push(val.age);
        return acc;
    }, []);
    let sum = 0;
    ages.forEach(el => { sum += el;});
    let average = sum / range.length;
    console.log(average);
  };

  averageAge(arrOfPerson);



// 5. Task#5 Sort arr by name if 2 elements have same name sort by age


const peopleArr = [
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
    let alphabethSorted = (arr.sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt()));
    console.log(alphabethSorted);
    console.log(alphabethSorted.sort((a, b) => {return a.age - b.age}));// i need more time and help   
}
  
sortUsers(peopleArr);




// 6. Task#6 Find min and max and return obj {min, max}  Use reduce method

const minMaxAge = (arr) => {
    let sorted = arr.sort((a, b) => {return a.age - b.age});
    sorted.reduce((acc, val)=> {
        console.log()
    }, {})
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

let unique = (arr) => {
    let unAr = []
    arr.forEach((item) => {
        unAr.forEach((a, b) =>{
            console.log(unAr.a);
        if(a.includes(b)){
             unAr.push(item);
        }
        })
    
    })
    console.log(unAr)
}




unique(strings);