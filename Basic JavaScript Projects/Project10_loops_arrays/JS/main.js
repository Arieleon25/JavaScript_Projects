//LOOPS and ARRAYS //

//WHILE LOOP//

function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//LENGTH PROPERTY//

function length_Str() {
    let text = "This is a length property";
    let length = text.length;
    document.getElementById("Length").innerHTML = length
}

//FOR LOOPS//

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//ARRAYS AND OBJECTS//

function Array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "purring";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " + 
    Dog_Picture[2] + " . ";
}

//CONST KEYWORD//

function constant_Function() {
    const Musical_Instrument = {type:"guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    Musical_Instrument.rating = 8.7
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price + " with a rating of " + Musical_Instrument.rating;
}

//LET KEYWORD//

var X = 90;
document.write(X);
{
    let X = 20;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//RETURN KEYWORD//

function return_Function() {
    return Math.PI;
}

document.getElementById("return").innerHTML = return_Function();

//OBJECTS KEYWORD//

let car = {
    make: "Mazda ",
    model: "3",
    year: "2017 ",
    color: "Black",
    description: function() {
        return "The car is a " + this.year + this.make + this.model;
    }
} ;
document.getElementById("car").innerHTML = car.description();

//BREAK STATEMENT//

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "the number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;

//CONTINUE STATEMENT//

let textCon = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    textCon += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = textCon;

