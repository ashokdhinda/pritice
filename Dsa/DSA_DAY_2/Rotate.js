// Rotate the array;
// Given N element array ,Rotate array from last to first k times .<google,meta,amazon>; K=4

function rotate(arr, k) {
    //first reverse all element
    let sp = 0;
    let ep = arr.length - 1;
    while (sp < ep) {
        let temp = arr[sp]
        arr[sp]= arr[ep]
        arr[ep] = temp;
        sp++;
        ep--
    }
    //here reverse the first k element
    let ksp = 0;
    let kep = k - 1;
    while (ksp<kep) {
        let temp = arr[ksp]
        arr[ksp]= arr[kep]
        arr[kep]=temp
        ksp++;
        kep--
        
    }
    //here reverse the k element to arr.length-1
    let starp = k;
    let endp = arr.length - 1;
    while (starp < endp) {
        let temp = arr[starp]
        arr[starp] = arr[endp]
        arr[endp] = temp;
        starp++;
        endp--;
    }
    console.log(arr);

}

let newarr = [1, 2, 3, 4, 5, 6, 7, 8,9]
rotate(newarr,4)