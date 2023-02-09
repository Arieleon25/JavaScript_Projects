//Food Dictionary Function//

function my_Dictionary() {
    var Dishes = {
        
        Plate: "Arepas",
        Taste: "Salty",
        Temperature: "Hot",
        Score: 80,
        Smell: "Corn"
    }
    delete Dishes.Smell; //Deleting smell//
    document.getElementById("Score").innerHTML = Dishes.Score;
    document.getElementById("Smell").innerHTML = Dishes.Smell;
}
