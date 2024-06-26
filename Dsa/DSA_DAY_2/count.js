//Given n array element count total no of element havind atlest 1 element grter then it self , (man elements of the array are invalid i menas max num)

function countvalid(arr) {
    let max = arr[0]
    // find max value in array
    for (let i = 0; i <= arr.length-1; i++){
        if (arr[i] > max) {
        max= arr[i]
        }
       
    }
    //console.log(max);
    let count = 0;
    for (let i = 0; i <= arr.length-1; i++){
        if (arr[i] != max) {
             count++
         }
    }
    console.log(count);
}

let num = [1, 56, 38, 23, 46, 12, 89, 32, 4, 5, 6, 5, 89, 56]
countvalid(num)