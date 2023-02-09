// Math Operations//

//Addition//

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition;
}

//Subtraction//

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Sub").innerHTML = "5 - 2 = " + Subtraction;
}

//Multiplication//

function multiplication() {
    var Multiplication = 5 * 4;
    document.getElementById("Mult").innerHTML = "5 * 4 = " + Multiplication;
}

//Division//

function division() {
    var Division = 6 / 2;
    document.getElementById("Div").innerHTML = "6 / 2 = " + Division;
}

//Al together//

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("multipleOp").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//Modulus Operator %//

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("ModOp").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//Unary Operator//

function negation_Operator() {
    var x = 10;
    document.getElementById("NegOp").innerHTML = -x;
}

//increment number//

function increment_number() {
    var X = 5;
    X++;
    document.write(X);
}

//decrement number//

function decrement_number() {
    var Y = 5.25;
    Y--;
    document.write(Y);
}

//Random//

window.alert(Math.random() * 100);

// Math Objects//

function math_Object() {
    var pi_val = Math.PI;
    document.getElementById("Pi").innerHTML = pi_val
}