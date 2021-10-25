function Corgi(name, age) {
  this.name = name;
  this.age = age;
  this.image = "corgi.png";
  this.type = "Corgi";
}

function Chinchilla(name, age) {
  this.name = name;
  this.age = age;
  this.image = "chinchilla.png";
  this.type = "Chinchilla";
}

function Tiger(name, age) {
  this.name = name;
  this.age = age;
  this.image = "tiger.png";
  this.type = "Tiger";
}

var animals = [new Corgi(), new Chinchilla(), new Tiger()]
var names = ["Molo", "Wish", "Yo", "Jojo", "JL", "Eleven"]

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  var randomIdx = generateRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  return generateRandomIndex(8);
}

function generateRandomAnimal() {
  var randomIdx = generateRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Corgi)
  {
    return new Corgi(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Chinchilla)
  {
    return new Chinchilla(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Tiger)
  {
    return new Tiger(generateRandomName(), generateRandomAge());
  }
}

function onLoad() {
    animal = generateRandomAnimal();
    var img = document.getElementById("animal-img");
    img.src = animal.image;

    JSON.parse(localStorage.getItem("savedAnimal"));
    var saveStatus = false;

    if (animal == null)
    {
      document.getElementById("button-storage").textContent = "Save Animal";
      animal = generateRandomAnimal();
    }
    else
    {
      document.getElementById("button-storage").textContent = "Clear Animal";
      saveStatus = true;
    }

    document.getElementById("animal-properties").textContent = animal.name + " " + animal.age + "years old";
    document.getElementById("animal-img").setAttribute("src", animal.image);

    document.getElementById("button-storage").addEventListener("click", function() {

      if (saveStatus)
      {
        localStorage.removeItem("savedAnimal");
        document.getElementById("button-storage").style.display = "none";
        document.getElementById("button-text").textContent = "Cleared!";
        document.getElementById("button-text").style.display = "block";
      }

      else
      {
        localStorage.setItem("savedAnimal", JSON.stringify(animal));
        document.getElementById("button-storage").style.display = "none";
        document.getElementById("button-action-text").textContent = "Saved!";
        document.getElementById("button-action-text").style.display = "block";
      }
    });

  }

