 


/* In javascript; callback function is a function that is used as an argument of an other
 function or a function that is accepted by another function as its argument.*/

let x = function() {
    console.log("Mum")

}
let y = function(callback) {
    console.log("God is good")
    callback()

}
y(x) //this is a callback function which takes arrow function x as an argument  and output will be God is good and Mum


 console.log("God")
 setTimeout(() => { //This  is arrow function  is used as an argument of settimeout function; arrow function is a callback
     console.log("Family")
 }, 3000);
 console.log("Coding");
 /*Here the output will be: God 
                           coding
                            family (after 3 seconds)

*/


function m(y) {
    console.log("God")
    y()
}

m(function y() {
        console.log("Mum")
    }) // Callback function and output will be God and Mum



 console.log("I like")
 var m = setInterval(() => {
     console.log(" javascript")
     clearInterval(m)
 }, 1000);
 /*  this is a callback function as it accepts another anonymous arrow function as argument
 and to stop if from execution i have  used clearInterval function
  */





 function sum(a, b) {
     console.log(a + b)
 }

 function main(x, sum) { //sum function is also used as an argument of main function. so;it is a callback function
     console.log(x)
 }
 main(3, sum(5, 5))
     /*when we call main function has it own parameter x and a callback function called sum
     output will be 10 and 3
      */
