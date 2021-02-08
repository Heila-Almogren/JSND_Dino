






document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById("btn").addEventListener("click", prepareInfographic)
    document.getElementById("return").addEventListener("click", returnForm)

    // Create Dino Constructor
    function dino(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact
    }

    // Create Dino Objects
    Triceratops = new dino(
        "Triceratops",
        13000,
        114,
        "herbavor",
        "North America",
        "Late Cretaceous",
        "First discovered in 1889 by Othniel Charles Marsh"
    )

    Tyrannosaurus = new dino(
        "Tyrannosaurus Rex",
        11905,
        144,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "The largest known skull measures in at 5 feet long."
    )

    Anklyosaurus = new dino(

        "Anklyosaurus",
        10500,
        55,
        "herbavor",
        "North America",
        "Late Cretaceous",
        "Anklyosaurus survived for approximately 135 million years."
    )

    Brachiosaurus = new dino(
        "Brachiosaurus",
        70000,
        "372",
        "herbavor",
        "North America",
        "Late Jurasic",
        "An asteroid was named 9954 Brachiosaurus in 1991."
    )

    Stegosaurus = new dino(
        "Stegosaurus",
        11600,
        79,
        "herbavor",
        "North America, Europe, Asia",
        "Late Jurasic to Early Cretaceous",
        "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    )


    Elasmosaurus = new dino(
        "Elasmosaurus",
        16000,
        59,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Elasmosaurus was a marine reptile first discovered in Kansas."
    )

    Pteranodon = new dino(
        "Pteranodon",
        44,
        20,
        "carnivor",
        "North America",
        "Late Cretaceous",
        "Actually a flying reptile, the Pteranodon is not a dinosaur."
    )

    Pigeon = new dino(
        "Pigeon",
        0.5,
        9,
        "herbavor",
        "World Wide",
        "Holocene",
        "All birds are living dinosaurs."
    )

    dinos = [Triceratops, Tyrannosaurus, Anklyosaurus, Brachiosaurus, Stegosaurus, Elasmosaurus, Pteranodon]

    // Create Human Object
    function human(name, height, weight, diet) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet
    }
    // Use IIFE to get human data from form
    // human_data = (function () {
    //     var name = document.getElementById("name").value
    //     var feet = document.getElementById("feet").value
    //     var weight = document.getElementById("weight").value
    //     var diet = document.getElementById("diet").value
    //     hu = new human(name, feet, weight, diet)

    // })()


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 


    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    function generateTiles(creature) {
        if (creature instanceof dino) {
            Tile = '<h3>' + creature.species + '</h3><img src="images/' + creature.species + '.png" alt=""><p>' + creature.fact + '</p>'
        }

        if (creature instanceof human) {
            Tile = '<h3>' + creature.name + '</h3><img src="images/human.png" alt="">'

        }
        return Tile
    }

    // Add tiles to DOM
    function addTiles() {

        for (i = 0; i < 9; i++) {

            var tile = document.createElement("div");
            tile.classList.add("grid-item")

            if (i != 4) {
                creature = dinos[i]
            } else {
                creature = (function () {
                    var name = document.getElementById("name").value
                    var feet = document.getElementById("feet").value
                    var weight = document.getElementById("weight").value
                    var diet = document.getElementById("diet").value

                    hu = new human(name, feet, weight, diet)
                    return hu

                })()
            }
            tile.innerHTML = generateTiles(creature)
            document.getElementsByTagName("main")[0].appendChild(tile)
        }

    }

    // Remove form from screen
    function removeForm() {
        document.getElementById("dino-compare").style.display = "none"
        document.getElementById("return").style.display = "block"

    }

    function returnForm() {
        document.getElementById("dino-compare").style.display = "block"
        document.getElementById("return").style.display = "none"
        document.getElementsByTagName("main")[0].innerHTML = ""
    }
    // On button click, prepare and display infographic
    function prepareInfographic() {
        var name = document.getElementById("name").value

        if (name) {
            removeForm()
            addTiles()
        } else {
            alert("You should write your name!")
        }

    }
}

)

