//You need to write two functions.

//A function to add two values together. This function needs to define two parameters - the two numbers that you want to add together.
const addFunction = (num1,num2) =>
{
    let addition = num1 + num2
    return addition
}
//A function to multiply a single number by 2. This function takes one parameter - the number you want to multiply by 2.
const multiplyFunction = (num1) =>
{
    let multiply = num1 * 2
    return multiply
}
//In the adding function, add the values of the two parameters and return the result
const addition = addFunction(4,14)
console.log(addition)

//In the multiplication function, multiply the value of the single parameter by 2 and return the result.
const multiplication = multiplyFunction(addition)
console.log(multiplication)

