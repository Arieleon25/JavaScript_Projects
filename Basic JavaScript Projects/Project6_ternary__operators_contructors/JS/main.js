//Ternary Operators//

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = Can_Vote + " to vote.";
}

// Constructors "new" and "this" with cars//

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// Constructors "new" and "this" with Dogs//

function Dog(Breed, Gender, Age, Status) {
    this.Dog_Breed = Breed;
    this.Dog_Gender = Gender;
    this.Dog_Age = Age;
    this.Dog_Status = Status;
}

var Alfa = new Dog("German Shepard", "Female", 11, "Alive");
var Tacoyaki = new Dog("Shiba-Inu", "Male", 2, "Alive")
var Sasha = new Dog("Shnauzer", "Female", 10, "Deceased")
function dog_Function() {
    document.getElementById("New and This").innerHTML =
    "Alfa's is a " + Alfa.Dog_Gender + ", " + Alfa.Dog_Breed + " of " + Alfa.Dog_Age + " years old. She is " + Alfa.Dog_Status;
}

// Nested Function //

function nested_Function() {
    document.getElementById("Nested_Function").innerHTML = CountNest();
    function CountNest() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}