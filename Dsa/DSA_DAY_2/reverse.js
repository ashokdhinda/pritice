function reverse(arr) {
    let startpoint = 3;
    let endpoint = 7;
    while (startpoint < endpoint) {
        let temp = arr[startpoint]
        arr[startpoint]=arr[endpoint]
        arr[endpoint]= temp
        startpoint++;
        endpoint--
    }
    console.log(arr);
}
reverse([1,2,3,4,5,6,7,8,9,10])

