// // function mimoh(a, b) {
// //   return a + b;
// // }

// // console.log(mimoh(3, 4));

// // const nefunction = function (a, b) {
// //   console.log(a + b);
// // };
// // nefunction(10, 30);

// // const function2 = (a, b) => {
// //   console.log(a + b);
// // };
// // function2(3, 4);

// // const good = (e, f) => console.log(e + f);
// // good(4, 5);

// // const ekaur = (ab, cd) => {
// //   console.log(ab + cd);
// // };
// // ekaur(9, 10);

// // const newwww = (a, b) => a + b + 100;
// // console.log(newwww(3, 4));

// // (a, b) => {
// //   console.log(a + b);
// // };
// // 49, 59;

// // const add = (a, b) => {
// //   c = a + b;
// //   console.log(c);
// // };

// // add(2, 3); // Outputs: 5

// // function calculate(val, val2, ...allvalue) {
// //   console.log(val, val2, allvalue);
// // }
// // calculate(1, 2, 3, 4, 5, 65, 6, 7, 8, 9);

// // function calculateCartPrice(val1, val2, ...num1) {
// //   return num1;
// // }

// // console.log(calculateCartPrice(200, 400, 500, 2000));

// // const object = {
// //   name: "mimohshukla",
// //   colledge: "iimt",
// // };

// // function handleobject(params) {
// //     console.log(`my name is ${object.name} and i am studying in ${object.colledge}`);

// // }
// // handleobject(object)

// // function one(){
// //     const username = "hitesh"

// //     function two(){
// //         const website = "youtube"
// //         console.log(username);
// //     }
// //     // console.log(website);

// //      two()

// // }

// // one()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// const chai = () => {
//   let username = "hitesh";
//   console.log(this.username);
// };
// chai();
// const chai2 = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };

// chai2();
// const addTwo = (num1, num2) => {
//   console.log(num1 + num2);
// };
// addTwo(
//   20,
//   49
// )


(function whoareyou() {
  console.log("whoareyou");
})();


(function name(params) {
    console.log(params);
    
})("whoareyouuuuuuuuuuuuuu");

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();






(function addtwo(a,b) {
    console.log(a+b);
    
})(20,40)