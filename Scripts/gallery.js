class PaintingSlot {
    constructor(name,  image) {
        this.name = name;
        this.image = image;
    }
}

let pets = [
    new PaintingSlot("Pet1",  "Assest/Gallery/Pets/Pet1.jpg"),
    new PaintingSlot("Pet2",  "Assest/Gallery/Pets/Pet2.jpg"),
    new PaintingSlot("Pet3",  "Assest/Gallery/Pets/Pet3.jpg"),
    new PaintingSlot("Pet4",  "Assest/Gallery/Pets/Pet4.jpg"),
    new PaintingSlot("Pet5",  "Assest/Gallery/Pets/Pet5.jpg"),
    new PaintingSlot("Pet6",  "Assest/Gallery/Pets/Pet6.jpg"),
    new PaintingSlot("Pet7",  "Assest/Gallery/Pets/Pet7.jpg"),
    new PaintingSlot("Pet8",  "Assest/Gallery/Pets/Pet8.jpg"),
]
let birds = [
    new PaintingSlot("Bird1",  "Assest/Gallery/Birds/Bird1.jpg"),
    new PaintingSlot("Bird2",  "Assest/Gallery/Birds/Bird2.jpg"),
    new PaintingSlot("Bird3",  "Assest/Gallery/Birds/Bird3.jpg"),
    new PaintingSlot("Bird4",  "Assest/Gallery/Birds/Bird4.jpg"),
    new PaintingSlot("Bird5",  "Assest/Gallery/Birds/Bird5.jpg"),
    new PaintingSlot("Bird6",  "Assest/Gallery/Birds/Bird6.jpg"),
    new PaintingSlot("Bird7",  "Assest/Gallery/Birds/Bird7.jpg"),
    new PaintingSlot("Bird8",  "Assest/Gallery/Birds/Bird8.jpg"),
]
let animals = [
    new PaintingSlot("Animal1", "Assest/Gallery/Animals/Animal1.jpg"),
    new PaintingSlot("Animal1", "Assest/Gallery/Animals/Animal2.jpg"),
    new PaintingSlot("Animal1", "Assest/Gallery/Animals/Animal3.jpg"),
    new PaintingSlot("Animal1", "Assest/Gallery/Animals/Animal4.jpg"),
    new PaintingSlot("Animal1", "Assest/Gallery/Animals/Animal5.jpg"),
    new PaintingSlot("Animal1", "Assest/Gallery/Animals/Animal6.jpg"),
    new PaintingSlot("Animal1", "Assest/Gallery/Animals/Animal7.jpg"),
    new PaintingSlot("Animal1", "Assest/Gallery/Animals/Animal8.jpg"),
]

const map = new Map();
map.set("1", pets);



function Start() {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    let images = document.getElementsByClassName("img");
}

function HandleSubmit(type) {
    switch (type) {
        case "1":
            SetImages(pets)
            break;
        case "2":
            SetImages(animals)
            break;
        case "3":
            SetImages(birds)
    }
}

function SetImages(array) {
    let images = document.getElementsByClassName("img");
    for(let i = 0; i < array.length; i++) {
        images[i].src = array[i].image;
    }
}

function openModal(image) {
    document.getElementById("preview").style.display = "block";
    document.getElementsByClassName("grid-container-in")[0].style.backgroundColor = "#C4C4C4";
    document.getElementsByClassName("grid-container-in")[0].style.opacity = "0.5";
    document.getElementById("enlarg-img").src = image.src;
}

function closeModal() {
    document.getElementById("preview").style.display = "none";
    document.getElementsByClassName("grid-container-in")[0].style.opacity = "1";
    document.getElementsByClassName("grid-container-in")[0].style.backgroundColor = "white";
}

window.onclick = function(event) {
    let modal = document.getElementById("preview")
    if (event.target === modal) {
        closeModal()
    }
}
