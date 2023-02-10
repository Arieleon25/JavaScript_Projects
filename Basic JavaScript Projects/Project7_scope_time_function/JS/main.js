//SCOPE - Global Variable //

var X = 10
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}

Add_numbers_1();
Add_numbers_2();

//SCOPE - Local Variable //

function Add_numbers_3() {
    var Y = 30;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}

Add_numbers_3();
Add_numbers_4();

//SCOPE - Console.log //

function Add_numbers_5() {
    var Z = 15;
    console.log(60 + Z);
}
function Add_numbers_6() {
    console.log (Z + 100);
}

Add_numbers_5();
Add_numbers_6();

// Adding IF STATEMENTS //

function get_Drink() {
    if (new Date().getFullYear() > 2002) {
        document.getElementById("valid").innerHTML = "You can drink!";
    }
}

// Adding ELSE STATEMENTS //

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Drink_Function() {
    Edad = document.getElementById("drink").value;
    if (Edad >= 21) {
        Drink = "You are old enough to drink!";
    }
    else {
        Drink = "You are not old enough to drink";
    }
    document.getElementById("yourage").innerHTML = Drink;
}

// Adding ELSE IF STATEMENTS //

function Time_function() {
    var Time = new Date().getHours();
    var Replay;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }

    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }

    else {
        Replay = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Replay
}

