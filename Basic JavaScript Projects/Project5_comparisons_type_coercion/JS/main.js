document.write(typeof "word");

document.write(typeof 5);

document.write("10" + 5);

//Functions related to NaN, isNaN, infinity and -infinity//

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_FunctionTrue() {
    document.getElementById("true").innerHTML = isNaN('This is a sting');
}

function my_FunctionFalse() {
    document.getElementById("false").innerHTML = isNaN('007');
}

function Pinfinity() {
    document.write(2E310)
    document.getElementById("positive").innerHTML = Pinfinity;
}

function Ninfinity() {
    document.write(-3E310)
    document.getElementById("negative").innerHTML = Ninfinity;
}

//BOOLEANS//

function True(){
    document.write(10 > 2);
    document.getElementById("true").innerHTML = True;
}

function False(){
    document.write(10 < 2);
    document.getElementById("false").innerHTML = False;
}

// CONSOLE.LOG METHOD//

console.log(2 + 2);

// CONSOLE.LOG METHOD BOOLEAN CHALLENGE//

console.log(2 > 5);

// DOUBLE EQUAL SIGNS//

function Equal(){
    document.write(50 == 50);
    document.getElementById("equal").innerHTML = Equal;
}

function Nequal(){
    document.write(25 == 50);
    document.getElementById("notequal").innerHTML = Nequal;
}

// TRIPLE EQUAL SIGNS//

function Tequal(){
    X = 10;
    Y = 10;
    document.write(X === Y);
    document.getElementById("tequal").innerHTML = Tequal;
}

function TNequal(){
    W = 50;
    Z = 40;
    document.write(W === Z);
    document.getElementById("tnotequal").innerHTML = TNequal;
}

function TSequal(){
    A = "Arie";
    B = "Arie";
    document.write(A === B);
    document.getElementById("tsequal").innerHTML = TSequal;
}

function TSNequal(){
    A = "Arie";
    Z = 40;
    document.write(A === Z);
    document.getElementById("tsnotequal").innerHTML = TSNequal;
}

// BOOLEAN LOGIC OPERATORS//

function AndOp(){
    document.write(5 > 2 && 10 > 4);
    document.getElementById("andop").innerHTML = AndOp;
}

function NAndOp(){
    document.write(5 > 10 && 10 > 4);
    document.getElementById("nandop").innerHTML = NAndOp;
}

function OrOp(){
    document.write(5 > 10 || 10 > 4);
    document.getElementById("orop").innerHTML = OrOp;
}

function NOrOp(){
    document.write(5 > 10 || 10 > 20);
    document.getElementById("norop").innerHTML = NOrOp;
}

function not_Function() {
    document.getElementById("not").innerHTML = !(20 > 10);
}

function not_Function2() {
    document.getElementById("not2").innerHTML = !(5 > 10);
}