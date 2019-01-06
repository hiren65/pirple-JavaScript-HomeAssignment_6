/*
* Homework Assignment #6: Loops
*
*/
// 1.Aim is write a programme that prints 1 to 100
// 2. But for multiples of 3 print "Fizz"
//    instead of the number and for the multiples of five print "Buzz".
// 3. for numbers multiples of both three and five print "FizzBuzz".

// create function
let lastNum = 100;
let main = function(num){
  for (let i = 1;i<num;i=i+1){
    console.log(i);
  }
}
main(101);
