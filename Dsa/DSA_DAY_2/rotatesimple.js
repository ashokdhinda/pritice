// Rotate the array;
// Given N element array ,Rotate array from last to first k times .<google,meta,amazon>; K=4
function Rotate(N, k) {
    k = k % N.length;
    function reverse(N, start, end) {
        while (start < end) {
            let temp = N[start]
            N[start]=N[end]
            N[end] = temp;
            start++;
            end--
        }
    }
    // reverse whole arr
    reverse(N,0,N.length-1)
    // reverse first k element
    reverse(N,0,k-1)
    //reverse rest element
    reverse(N,k,N.length-1)
console.log(N);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8,]
Rotate(arr,67)
