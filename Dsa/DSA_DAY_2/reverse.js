//question given N array element and [s,e],reverse the array from[s,e] ,[3,7]
function reverse(n) {
    let startpoint = 3;
    let endpoint = 7;
    while (startpoint < endpoint) {
        let temp = n[startpoint]
        n[startpoint]=n[endpoint]
        n[endpoint]= temp
        startpoint++;
        endpoint--
    }
    console.log(n);
}
reverse([1,2,3,4,5,6,7,8,9,10])

