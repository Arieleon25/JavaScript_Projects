//STRING METHODS //

//concat() Method//

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("oracion").innerHTML = whole_sentence

}

// slice() Method //

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("rebanar").innerHTML = Section;
}

// toUpperCase() Method //

function UpperCase_Method() {
    let text = document.getElementById("Capital").innerHTML;
    document.getElementById("Capital").innerHTML = text.toUpperCase();
}

// search() Method //

function search_Method() {
    let text = "Please locate where 'Goku' is im this sentence";
    document.getElementById("busca").innerHTML = text.search("Goku");
}

// toString() Method //

function string_Method() {
    var X = 150;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// precision() Method //

function precision_Method() {
    var X = 12938.301655132156;
    document.getElementById("precision").innerHTML = X.toPrecision(10)
}

// toFixed() Method //

function toFixed_Method() {
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("fix").innerHTML = n;
}

//  ValueOf() Method //

function ValueOf_Method() {
    let text = "Hello World!";
    let result = text.valueOf();

    document.getElementById("value").innerHTML = result;
}




