//1 Timeout

let count = 0;
let timerId = setInterval(() => {
    console.log(++count);
    if(count === 5){
        clearInterval(timerId);
    }
}, 1000)

//2 Delay

let i = 0;
function counter(){
    i++;
    console.log(i);
    setTimeout(counter, 1000)
}
setTimeout(counter, 1000)

    
//3 random state of promise
let n = (Math.random()).toFixed(1);
console.log(n);

let prom = new Promise((resolve, reject) =>{
    if(n >= 0.5 ){
        return resolve('ok');
    } 
    if(n < 0.5){
        return reject('no');
    }
});
prom.catch((err)=>{
    console.log('Threw error')
});
prom.then(() =>{
    console.log('everything works properly');
}, () =>{
    console.log('404 not found');
})
console.log(prom);


//4 Server

const users = [
    {
      id: 1,
      name: "Taras",
      age: 30,
      movies: [],
    },
    {
      id: 2,
      name: "Kate",
      age: 45,
      movies: ["Titanic", "Avatar"],
    },
  ];

function getUserData(id){
    return new Promise((resolve, reject) => {
         for (let obj of users) {
            if(obj.id === id){
                resolve('id exitst');
                return;
            }
         }
         reject('id not found');
    }); 
  };

getUserData(2).then((result)=> {
    console.log(result);
}).catch((error)=>{
    setTimeout(()=>{
         console.log(error);
    }, 1000)
  })  



