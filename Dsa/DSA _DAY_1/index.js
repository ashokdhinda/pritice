// let sum = 0;
// function sumofarr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }
// let arr = [3, 5, 14, 55, 67, 78];
// sumofarr(arr);

// max of array elelment

// function maxnum(arr) {
// let max = arr[0];
//   for (let i = 0; i <arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }
// let arr = [-10, -30, -50, -22, -34];
// maxnum(arr);

// reverse array
// function reverse(arr) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--
//     }
//     console.log(arr);
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// reverse(arr)

// function reverse(arr) {
//     let bag = ''
//     for (let i = arr.length-1; i >= 0; i--){
//         bag = bag + arr[i]
//     }
//     console.log(bag);
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// reverse(arr)

// function reverse(arr) {
//     return arr.toString().split(",").reverse().join(",")
   
// }
// let arr = reverse([1,2,3,4,5,6])
// console.log(arr);