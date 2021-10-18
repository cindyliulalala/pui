function Corgi(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "My Molo";
  this.image = "corgi.png";
}

function Chinchilla(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "My Wish";
  this.image = "chinchilla.png";
}

function Tiger(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "My Yo";
  this.image = "tiger.png";
}

let animals = [new Corgi(), new Chinchilla(), new Tiger()]
let names = ["Molo", "Wish", "Yo", "Jojo", "JL", "Eleven"]

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  let randomIdx = generateRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  return generateRandomIndex(8);
}

function generateRandomAnimal() {
  let randomIdx = generateRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Corgi)
  {
    return new Corgi(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Chinchilla)
  {
    return new Chinchilla(generateRandomName(), generateRandomAge());
  }
  else of (randomAnimal instanceof Tiger)
  {
    return new Tiger(generateRandomName(), generateRandomAge());
  }
}


function onLoad() {
    var animal = generateRandomAnimal();
  }

