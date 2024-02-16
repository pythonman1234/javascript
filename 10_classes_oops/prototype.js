let myHeroes = ["ranbir", "kapoor"];

let heroPower = {
  ranbir: "axe",
  kapoor: "hammer",

  getKapoorPower: function () {
    console.log(`kapoor power is ${this.kapoor}`);
  },
};

Object.prototype.sigma = function () {
  console.log(`sigma is present in all objects`);
};

Array.prototype.heySigma = function () {
  console.log(`Sigma says hello`);
};

//heroPower.sigma();
//myHeroes.sigma();
//myHeroes.heySigma();
//heroPower.heySigma();

// inheritance
const user = {
  name: "king",
  email: "king@google.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
