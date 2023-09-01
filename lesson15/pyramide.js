// // 5. Task #5 Pyramid

// const printPyramid = (n) => {
//     let colums = 1;
//     for (let i = 1; i < n; i++) {
//         colums += 2;
//     }
//     let rows = [];
//     let dashSpace = colums % n;
//     let starSpace = 1;
//     for (let i = 1; i < n-1; i++) {
//         let currentString = "#".repeat(dashSpace) + "*".repeat(starSpace) + "#".repeat(dashSpace);
//         dashSpace -= 2;
//         starSpace += 2;
//         rows.push(currentString);
//     }
//     console.log(rows)    
// };
// printPyramid(5);