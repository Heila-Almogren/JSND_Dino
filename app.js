
function prepareInfographic() {

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


    // Create Human Object
    function human(name, height, weight, diet) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet
    }


    // Create Dino Objects
    const dinos_array = Dinos.map(function (d) {
        return new dino(d.species, d.weight, d.height, d.diet, d.where, d.when, d.fact)
    });

    // Create Human Object
    var hu = new human()

    // Use IIFE to get human data from form
    human_data = (function () {
        hu.name = document.getElementById("name").value.trim()
        hu.feet = document.getElementById("feet").value.trim()
        hu.weight = document.getElementById("weight").value.trim()
        hu.height = document.getElementById("feet").value.trim()
        hu.diet = document.getElementById("diet").value.trim()
    })()


    // Generate Tiles for each Dino in Array
    function generateTiles() {
        counter = 0

        dinos_array.forEach(function (d) {
            addTiles(d)
            if (counter == 3) {
                addTiles(hu)
            }
            counter++;
        })
    }

    // Add tiles to DOM
    function addTiles(creature) {

        fact = random_fact.call(hu, creature)
        var tile = document.createElement("div");
        tile.classList.add("grid-item")
        if (creature instanceof dino) {
            tile.innerHTML = '<h3>' + creature.species + '</h3><img src="images/' + creature.species + '.png" alt=""><p>' + fact + '</p>'
        }

        if (creature instanceof human) {

            tile.innerHTML = '<h3>' + creature.name + '</h3><img src="images/human.png" alt="">'
        }
        document.getElementsByTagName("main")[0].appendChild(tile)
    }



    // Remove form from screen
    function removeForm() {
        document.getElementById("dino-compare").style.display = "none"
        document.getElementById("return").style.display = "block"
    }

    if (!hu.name) {
        alert("You should write your name!")
        return
    }
    if (!hu.height) {
        alert("You should write your height!")
        return
    }

    if (!hu.weight) {
        alert("You should write your weight!")
        return
    }

    if (!hu.diet) {
        alert("You should write your diet!")
        return
    }
    generateTiles()
    removeForm()

}


function getFact() {

    let all_chosens = []

    return function (creature) {
        // if pigeon ==> return only the fact
        if (creature.species == "Pigeon") return creature.fact

        // If w ran out of numbers => repeat the game
        if (all_chosens.length == 9) {
            all_chosens = []
        }

        // Get a random number that wasn't chosen before
        rand = Math.floor(Math.random() * 9);
        chosen = all_chosens.includes(rand)

        while (chosen) {
            rand = Math.floor(Math.random() * 9);
            chosen = all_chosens.includes(rand)
        }
        all_chosens.push(rand)


        switch (rand) {
            case 0: {
                return creature.species + " was " + creature.weight + " lbs weight!"
            }
            case 1: {
                return creature.species + " was " + creature.height + " inches long!"
            }
            case 2: {
                return creature.species + " is a " + creature.diet + "!"
            }
            case 3: {
                return creature.species + " lived in " + creature.where + "!"
            }
            case 4: {
                return creature.species + " lived in " + creature.when + "!"
            }
            case 5: {
                return creature.fact
            }
            case 6: {
                return compareWeight(this, creature)
            }

            case 7: {
                return compareHeight(this, creature)
            }
            case 8: {
                return compareDiet(this, creature)
            }

        }
        return 'no match'


    }
}

let random_fact = getFact();





// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click", prepareInfographic)
document.getElementById("return").addEventListener("click", function () {
    document.getElementById("dino-compare").style.display = "block"
    document.getElementById("return").style.display = "none"
    document.getElementsByTagName("main")[0].innerHTML = ""
})



// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 

function compareWeight(hu, dino) {
    huWeight = parseInt(hu.weight)
    dinoWeight = parseInt(dino.weight)
    times = Math.round(dinoWeight / huWeight)
    if (times == 1) {
        return 'You and ' + dino.species + ' are on the same weight!'
    } else {
        return dino.species + " is " + dinoWeight / huWeight + " times your weight!"
    }
}


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(hu, dino) {
    huHeight = parseInt(hu.height)
    dinoHeight = parseInt(dino.height)

    times = Math.round(dinoHeight / huHeight)
    if (times == 1) {
        return 'You and ' + dino.species + ' are on the same height!'
    } else {
        return dino.species + " is " + dinoHeight / huHeight + " times your height!"
    }
}

//parseInt()
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

function compareDiet(hu, dino) {
    if (hu.diet.toLowerCase() == dino.diet.toLowerCase()) {
        return dino.species + " is " + dino.diet + " like you!"
    } else {
        return "Unlike you, " + dino.species + " is " + dino.diet
    }


}