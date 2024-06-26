
// // function palindrome(arr){
// //   return arr ===+arr.toString().split("").reverse().join("")
// // }
// //  let check = palindrome(121)
// //  console.log(check);




// // //use number convet to string formate use +function.tostring()
// //  function pali(number){
// //     return number ==+number.toString().split("").reverse().join("")
// //  }
// //  let palindr = pali(345665432)
// //  console.log(palindr);

// // //here only reverse number
// //  function data (num){
// //     return num.split("").reverse().join("")
// //  }
// //  let check1 = data("ashok")
// //  console.log(check1)



// // //use == to get true or false
// //  function rev(nummm){
// //     return nummm == nummm.split("").reverse().join('')
// //  }
// //  let convet = rev("rahul")
// //  console.log(convet);


// // function getdata(n){
// //     return n == n.split("").reverse().join("")
// // }
// // let dhinda = getdata("rahul")
// // console.log(dhinda);
// // async function fetchData() {
// //     try {
// //       const response = await fetch('https://fakestoreapi.com/users');
// //       const data = await response.json();
// //       console.log("DATA", data);
// //     } catch (error) {
// //       console.log("error-11", error)
// //     }
// //   }
// //   fetchData();
// function printPattern(n) {
//   let space = 1;
//   let nofStar = Math.floor(n / 2) + 1;

//   for (let i = 1; i <= n; i++) {
//     let stars = '*'.repeat(nofStar);
//     let spaces = ' '.repeat(space);

//     console.log(stars + spaces + stars);

//     if (i < Math.floor(n / 2) + 1) {
//       nofStar--;
//       space += 2;
//     } else {
//       nofStar++;
//       space -= 2;
//     }
//   }

//   // Additional rows based on the example provided
//   //console.log('*'.repeat(n * 2));
//   //console.log('*'.repeat(n * 2 + 4));
// }

// let n = 7; // Adjusting n to meet the pattern example exactly
// printPattern(n);


/// reverse a string///

// function reverse(num) {

//   let resversed = num.split("").reverse().join("");
//   console.log(resversed);
// }
// reverse("ashok")
 
// let bag = ""
// function number(num) {
//   for (let i = num.length - 1; i >= 0; i--){
//       bag =bag+" "+ num[i]
//   }
//   console.log(bag);
// }
// number("ashok")