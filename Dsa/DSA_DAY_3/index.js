// // print matrix in coulume
// function twoDarray(arr) {

//     for (let j = 0; j < arr.length; j++){
//           let bag = [];
//         for (let i = 0; i < arr.length; i++){
//             bag.push(arr[i][j])

//         }
//          console.log(bag);

//     }
// }
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// twoDarray(arr)

// print a matrix in wave form print the gievn mat[n][m] in wave form
// 10 20 30 50 40
// 12 34 23 43 90
// 21 45 37 23 42
//121 100 170 240 250
// output
// 10 20 30 50 40
// 90 43 23 34 12
// 21 45 37 23 42
// 250 240 170 100 121

function wave(arr) {
  for (let i = 0; i <arr.length; i++) {
    let bag = [];
    if (i % 2 == 0) {
      for (let m = 0; m < arr[i].length; m++) {
        bag.push (arr[i][m]);
      }
    } else {
      for (let j = arr[i].length-1 ; j >= 0; j--) {
        bag.push (arr[i][j]);
      }
    }
    console.log(bag);
  }
}
let newarr = [
[10, 20, 30, 50, 40],
[90, 43, 23, 34, 12],
[21, 45, 37, 23, 42],
[250, 240, 170, 100, 121]
]
wave (newarr)