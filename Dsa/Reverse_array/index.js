// function reversestring(num) {
//     return num = num.split("").reverse().join("")
// }
// let string = reversestring("Ashok kumar dhinda")
// console.log(string);

// // function number(string) {
//     let bag = ""
//     for (let i = string.length- 1; i >= 0; i--){
//         bag = bag + string[i];
//     }
//     console.log(bag);

// }
// number("Asish")

//check palindrom

// // function palindrom(string) {
// //     return string == string.split("").reverse().join("")

// // }
// // let newa = palindrom("racar")

// // console.log(newa);

// // function palindrom(string) {
// //     let bag = ''
// //     for (let i = string.length - 1; i >= 0; i--){
// //        bag = bag+string[i]

// //     }
// //     return bag == string

// // }

// // let numm= palindrom("ashok")
// // console.log(numm);

// // reverse array
// // function number(num) {
// //     return num ==+ num.toString().split("").reverse().join("")
// // }
// // let newNumber = number(346)
// // console.log(newNumber);

// function iphone1(ASIN, color, display, camera) {
//     let obj = {};
//     obj.ASIN = ASIN;
//     obj.color = color;
//     obj.display = display;
//     obj.color = camera;

//     obj.dial = function () {
//         return "tring.. tring..."
//     }
//     obj.sendMessage = function () {
//         return "Sending message..."
//     }
//     obj.cameraClick = function () {
//          return "Camera clicked"
//     }

//     return obj
// }

// function iphone2(ASIN, color, display, camera, bluetooth) {
//     let obj2 = iphone1(ASIN, color, display, camera)
//     obj2.bluetooth = bluetooth;
//     obj2.connectBluetooth = function () {
//         return "Bluetooth connected successfully..."
//     }
//     return obj2
// }

// let ip1 = iphone1()
// console.log(ip1.dial());
// console.log(ip1.sendMessage());
// console.log(ip1.cameraClick());

// let ip2 = iphone2()
// console.log(ip2.dial());
// console.log(ip2.sendMessage());
// console.log(ip2.cameraClick());
// console.log(ip2.connectBluetooth());

// function iphone1 (ASIN,color,camera,display){
//   let iphone1obj={}
//     iphone1obj.ASIN = ASIN;
//     iphone1obj.color = color;
//     iphone1obj.camera = camera;
//     iphone1obj.display = display;

//     iphone1obj.dial = function () {
//         return "tring.. tring..."
//     }
//     iphone1obj.sendMessage = function () {
//         return "Sending message..."
//     }
//     iphone1obj.cameraClick = function () {
//         return "Camera clicked"
//     }
//     return iphone1obj;
// }

// function iphone2(ASIN, color, camera, display, bluetooth) {
//     let iphone2obj = iphone1(ASIN, color, camera, display)
//     iphone2obj.bluetooth = bluetooth;
//     iphone2obj.connectBluetooth = function () {
//         return "Bluetooth connected successfully..."
//     }
//     return iphone2obj
// }

// let ip1= iphone1();
// console.log(ip1.dial());
// console.log(ip1.sendMessage());
// console.log(ip1.cameraClick());

// let ip2 = iphone2();
// console.log(ip2.dial());
// console.log(ip2.sendMessage());
// console.log(ip2.cameraClick());
// console.log(ip2.connectBluetooth());

// function Iphone(ASIN, color, display, camera, bluetooth) {

//     this.ASIN = ASIN;
//     this.color = color;
//     this.display = display;
//     this.camera = camera;
//     this.bluetooth = bluetooth;

//     this.dial = function () {
//         return "tring.. tring..."
//     }
//     this.sendMessage = function () {
//         return "Sending message..."
//     }
//     this.cameraClick = function () {
//         return "Camera clicked"
//     }

//     this.connectBluetooth = function () {
//         return "Bluetooth connected successfully..."
//     }
// }

// let ip2 = {}
//  Iphone.call(ip2,1, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
// console.log(ip2.ASIN);
// console.log(ip2.color);
// console.log(ip2.display);
// console.log(ip2.camera);
// console.log(ip2.bluetooth)

// console.log(ip2.dial());
// console.log(ip2.sendMessage());
// console.log(ip2.cameraClick());
// console.log(ip2.connectBluetooth());

// let num = [1, 2, 3, 5]
// let max = num[0]
// for (let i = 0; i < num.length; i++) {
//     if (max < num[i]) {
//         max=num[i]

//     }

// }
// console.log(max);
// let userInput = prompt("Please enter a number:");
// console.log(userInput);
//
// Function to check if numbers are divisible by 5

// function numb(num) {
//     for (let i = 0; i < num.length; i++){
//         if (num[i] % 5 === 0) {
//             console.log(num[i]);
//         }
//     }
// }

// let numarr = [2, 3, 5, 10, 30, 40, 59]
// numb(numarr)

// function divideby(numArray) {
//     for (let i = 0; i < numArray.length; i++) {
//         if (numArray[i]% 5 == 0) {

//           console.log(numArray[i]);
//         }
//     }
// }
//     let numArray = prompt();

// divideby(numArray);

// let temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp
// console.log(arr);
let arr = [1, 3];
for (let i = 0; i < arr.length; i++) {
  let temp = arr[0];
  arr[0] = arr[i];
  arr[i] = temp;
  console.log(arr);
}

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
// let sp= arr[3];
// let newtemp = arr.length-4;

// while (sp < newtemp) {
//     let temp = arr[sp]
//     arr[sp] = arr[newtemp]
//     arr[newtemp] = temp
//     sp++;
//     newtemp--
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let sp = 3;  // Start at index 3
// let newtemp = arr.length - 4;  // End at index 7 (inclusive)

// while (sp < newtemp) {
//     let temp = arr[sp];
//     arr[sp] = arr[newtemp];
//     arr[newtemp] = temp;
//     sp++;
//     newtemp--;
// }
// console.log(arr);

// let obj1 = {
//   name: "pavan",
// };

// let obj2 = {
//   age: 26,
// };

// Object.setPrototypeOf(obj1, obj2);
// let obj3 = {
//   city: "Pune",
// };
// Object.setPrototypeOf(obj2, obj3);

// console.log(obj1.age);

// class Person{
//     constructor(name,age){
//      this.name = name;
//      this.age = age
//     }

//     sayName(){
//         console.log(this.name)
//     }

//     increaseAge(value){
//         this.age += value
//     }
// }

// let p1 = new Person("Pavan", 23)
// p1.increaseAge(5);
// console.log(p1)

// class Employee extends Person {
//   constructor(name, age, salary) {
//     super(name, age)
//     this.salary=salary
//   }
//   printSalary() {
//     return this.salary
//   }
// }
// let em1 = new Employee("ashok" ,20,20000)
// console.log(em1);

// create a class called Employee extends from Person class
// name,age,salary
// printSalary() --- console the salary

// class Animal {
//   #sound;
//   constructor(sound, legs) {
//     this.#sound = sound;
//     this.legs = legs;
//   }
//   get animalSound(){
//     return this.#sound
//   }

//   set animalSound(value) {
//     this.#sound = value
//   }
//   static greet() {
//      console.log("hello");
//    }
// }

// let p1 = new Animal("woo", 4)
// console.log(p1);
// console.log(p1.animalSound); // get private
// p1.animalSound = "hoo hoo" /// set updete
// console.log(p1.animalSound);
// Animal.greet()
