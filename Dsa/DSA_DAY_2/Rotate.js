

function rotate(arr, k) {
    
    let sp = 0;
    let ep = arr.length - 1;
    while (sp < ep) {
        let temp = arr[sp]
        arr[sp]= arr[ep]
        arr[ep] = temp;
        sp++;
        ep--
    }
    let ksp = 0;
    let kep = k - 1;
    while (ksp<kep) {
        let temp = arr[ksp]
        arr[ksp]= arr[kep]
        arr[kep]=temp
        ksp++;
        kep--
        
    }
    console.log(arr);
}

let newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
rotate(newarr,4)