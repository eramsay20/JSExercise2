// QUESTION 1
/*
1. Create a function ​printSequence t​hat, given two numbers, returns a string 
of the values from the lowest number to the highest number.
    a. printSequence(3, 8) → '3, 4, 5, 6, 7, 8'
    b. printSequence(8, 3) → '3, 4, 5, 6, 7, 8'
*/

// Q1 ANSWER BELOW
let x = 1;
let y = 1;

function printSequence(x, y) {
    if (x == y) {
        document.write("Error: X & Y are the same number");
        }
    
    if (x < y) {
        let count = x;
        let z = "";
        while (count < y) {
            z = z + count + ", ";
            count++; 
        }
        document.write(`${z}${count}`+ "<br>")
        count = 0;
  
    }
    if (y < x) {
        let count = y;
        let z = "";
        while (count < x) {
            z = z + count + ", ";
            count++; 
        }
        document.write(`${z}${count}`+ "<br>")
        count= 0;
      
    }
}

printSequence(3,8); // 1.a
printSequence(8,3); // 1.b

// Q1 COMPLETE (ABOVE)

/* 
2. Create a function ​calculate t​ hat, given a string and two numbers, does the following
based on the value of the string:
    a. 'add' → add the two numbers and return the result
    b. 'subtract' → subtract the second number from the first and return the result
    c. 'multiply' → multiply the numbers together and return the result
    d. 'divide' → divide the first number by the second and return the result
    e. For everything else, do not return anything.
    */




    
/* 
3. Create a function ​validate t​ hat takes in 2 strings and a number
    a. Return false if either of the strings are undefined or empty (Hint: remember what
    values are falsey)
    b. Return false if the number is not undefined but is less than 0.
    c. For all other cases, return true.
    Stretch Requirements:
1. Create a function that, given a number, returns true if it can be reached by the Fibonacci sequence, else return false.
*/ 