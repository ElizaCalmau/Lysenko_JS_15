//1 

function randomResolve(){
    const n = Math.floor(Math.random() * (6 - 1)) + 1;
    console.log(n);
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(n % 2 === 0){
                resolve(`${n} is even`);
            } else {
                reject(`${n} is odd`)
            }
        }, n * 1000)
    })
}

randomResolve().then((even)=>{ console.log(even)}, (odd)=>{ console.log(odd)});

//2 Promise API

function createPromiseArr(n){
    const promiseArr = [];
    for(let i = 1; i <= n; i++){
        promiseArr.push(randomResolve());
    }
    return Promise.all(promiseArr).then((result)=>{
        console.log(`🥳 Yasss, the result is ${result}`)
    }).catch((e)=>{
        console.error(`okay ;( ${e}`)
    })
}

console.log(createPromiseArr(2));

// 3 Modify with async await 2nd task

const printResponse = async (n) => {
    const promiseArr = [];
    for(let i = 1; i <= n; i++){
        promiseArr.push(randomResolve());
    }
    let result = await Promise.all(promiseArr);
    console.log(result);
    return result;
  };

  printResponse(2).then((result)=>{
    console.log(`🥳 Yasss, the result is ${result}`)
  }).catch((err)=>{
    console.error(`rejected because ${err}`)
  })



  //4 casino

  const randomNums = () =>{
    const n = Math.floor(Math.random() * (10 - 1)) + 1;
    console.log(`${n} seconds have passed`);
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        if(n % 2 === 0){
            resolve({value: n, color: 'red', num: 'even'});
        } else {
            reject ({value: n, color: 'black', num: 'odd'},)
        }

    }, n * 1000);
    })
    
  }
//   let stakes;
//   randomNums().then((res) => {
//     console.log(res);
//     stakes = Object.values(res);
//     console.log(stakes)
//   }).catch((err) => {
//     console.log(err);
//     stakes = Object.values(err);
//     console.log(stakes)
//   }) ;

const stakeResults = async () => {
    const fulfilledStake = await Promise.any([randomNums(), randomNums()]);
    console.log(`here's yours 💵`)
    return fulfilledStake;
}
stakeResults();