function createImg(src, alt) {
    let img = document.createElement('img');
    let container = document.querySelector('.container');
    img.src = src;
    img.alt = alt;
    container.append(img);
}
//'MIDpdacjifSU395EcnZAHn79VQE9eBWwNLyGOHkV'


async function loadImg() {
    let url = new URL('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?');
    url.searchParams.set('sol', 900);
    url.searchParams.set('camera', 'pancam');
    url.searchParams.set('api_key', 'MIDpdacjifSU395EcnZAHn79VQE9eBWwNLyGOHkV');
    let resp = await fetch(url);
    let convertedData = await resp.json();
    let src = '';
    for (let i = 0; i < 6; i++) {
        src = convertedData.photos[i].img_src;
        createImg(src, 'PanCam')
    }
    //let imgSrc = convertedData.photos[2].img_src;


}

//loadImg();


const tableArr = [
    { header: "Name", data: ["Taras", "Yana"] },
    { header: "Age", data: [25, 25] },
    { header: "Learn Js", data: [true, true] },
];

// function createTable() {
//     let table = document.createElement('table');
//     let thead = document.createElement('thead');
//     let tbody = document.createElement('tbody');
//     table.style.border = '1px solid black';

//     tableArr.forEach((el) => {
//         let th = document.createElement('th');
//         th.innerText = el.header;
//         th.style.border = '1px solid black';
//         thead.append(th);
//     });

//     for(let i = 0; i < tableArr[0].data.length; i++){
//         let row = document.createElement('tr');
        
//             tableArr.forEach( (el) => {
//             let td = document.createElement('td');
//             td.innerText = el.data[i];
//             td.style.border = '1px solid black';
//             row.append(td);
            
//         });
//         tbody.append(row)
//     }
    
//     table.append(thead, tbody);
//     document.body.append(table);

// }


function createTable(){
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    const thead = document.createElement('thead');
    table.style.border = '1px solid black';
    tableArr.forEach( (el) => {
        let th = document.createElement('th');
        th.innerText = el.header;
        th.style.border = '1px solid black'
        thead.append(th);
    })

    let rowLength = tableArr[0].data.length;

    for(let i = 0; i < rowLength; i++){
        let tr = document.createElement('tr');
        tableArr.forEach( (el) => {
            let td = document.createElement('td');
            td.innerText = el.data[i];
            td.style.border = '1px solid black';
            if([i] % 2 == 0){
                td.style.backgroundColor = 'grey'
            }
            tr.append(td);
        })
        tbody.append(tr);
    }

    table.append(thead, tbody);
    document.body.append(table);
}

createTable();