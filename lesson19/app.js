// 1. Task #1 Get days in year

const getDaysInYear = (year) => {
    const firstDate = new Date(year, 0);
    const lastDate = new Date(year, 12, 0);
    const aMS = firstDate.getTime();
    const bMS = lastDate.getTime();
    const differece = bMS - aMS;
    const daysInYear = differece/1000/60/60/24 + 1;
    console.log(daysInYear);
};

getDaysInYear(2021);
// 365
getDaysInYear(2020);
// 


// 2. Task #2 Day of a year. Return day number from date

const getDayNumber = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const startDate = new Date(year, 0);
    const diffInMS = newDate.getTime() - startDate.getTime();
    const formatted = Math.ceil(diffInMS/1000/60/60/24);
    console.log(formatted);
};

getDayNumber("2023-01-12");
// 12

getDayNumber("2023-02-26");
getDayNumber("2023-04-26");
// 57


// 3. Get fiscal quarters

const getQuarters = (date) => {
    const settedDate = new Date(date);
    const month = settedDate.getMonth();
    //console.log(month);
    if(Math.trunc(month / 3) === 0 ){
        console.log('I quarter: Jan - Mar')
    }
    if(Math.trunc(month / 3) > 0 && Math.trunc(month / 3) < 2){
        console.log('II quarter: Apr - Jun')
    }
    if(Math.trunc(month / 3) > 1 && Math.trunc(month / 3) < 3){
        console.log('III quarter: Jul - Sep')
    }
    if(Math.trunc(month / 3) > 2 && Math.trunc(month / 3) < 4){
        console.log('IV quarter: Oct - Dec')
    }
};

getQuarters("2023-02-26");
getQuarters("2023-04-26");
getQuarters("2023-07-26");
getQuarters("2023-09-26");
getQuarters("2023-10-26");


// 4/ Task #4 Write a function to calculate date diff


const calcDateDiff = (startDate, endDate) => {
    const diffMS = new Date(endDate).getTime() - new Date(startDate).getTime();
    const diffLength = diffMS.toString().split('').length;
    // if (diffLength <= 8 && (diffMS/1000/60) < 60){
    //    console.log(`${diffMS/1000/60} minutes`) 
    // }
    if (diffLength <= 8){
        const hours = Math.trunc(diffMS/1000/60/60);
        const minutes = diffMS/1000/60 - (hours * 60); 
        if(hours == 0) {
            console.log(`${minutes} minutes`)
        } else {
             console.log(`${hours} hours ${minutes} minutes`) 
        }      
     }
     if (diffLength > 8 && diffLength <= 10) {
        const days = Math.trunc(diffMS/1000/60/60/24);
        if (days > 30){
            const month = Math.trunc(diffMS/1000/60/60/24/30);
            console.log(`${month} month`)
        } else {
            console.log(`${days} days`);
        }
     } 
     if( diffLength > 10) {
        const years = Math.trunc(diffMS/1000/60/60/24/30/12);
        console.log(`${years} years`)
     }
};


calcDateDiff("2023-02-26 14:00", "2023-02-26 14:02");
//2 minutes
calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20");
// 20 minutes
calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30");
// 1 hours 30 minutes
calcDateDiff("2023-02-26 14:00", "2023-02-26 16:45");
// 2 hours 45 minutes
calcDateDiff("2023-02-26 13:00", "2023-02-26 18:15");
//5 hours 15 minutes
calcDateDiff("2023-02-26 13:00", "2023-02-27 11:59");
//22 hours 59 minutes
calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30");
// 2 days
calcDateDiff("2023-02-26 14:00", "2023-03-12 15:30");
// 2 days
calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30");
// 3 months
calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30");
// 2 years
calcDateDiff("2003-02-26 14:00", "2028-05-28 15:30");
//25 years
