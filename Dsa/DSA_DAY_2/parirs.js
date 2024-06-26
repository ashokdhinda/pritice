//given N array elements ,check if there exist a pair (i,j) such that arr[i]+arr[j]==k and i=!j
//k=15

function paris(arr, k) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        console.log(arr[i], arr[j]);
      }
    }
  }
}
let num = [4, 5, 9, 3, 6, 23, 14];
paris(num, 20);
