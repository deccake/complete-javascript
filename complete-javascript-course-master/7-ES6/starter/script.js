// // // // // Lecture Block & IIFE

// // // // //ES6
// // // // {
// // // //   const i = 8;
// // // //   let j = 4;
// // // //   var c = 10;
// // // // }

// // // // // console.log(c);

// // // // //ES5

// // // // (function () {
// // // //   var a = 3;
// // // // })();

// // // // // console.log(a);

// // // // //Lecture : Strings

// // // // let firstName = "John";
// // // // let lastName = "SMith";
// // // // let yearOfBirth = 1994;

// // // // function calcAge(year) {
// // // //   return 2020 - year;
// // // // }

// // // // console.log("This is " + firstName + lastName + ". I am born in " + yearOfBirth + ". Now my age is " + calcAge(yearOfBirth));
// // // // console.log(`this is ${firstName} ${lastName}. I am born in ${yearOfBirth}. I am ${calcAge(yearOfBirth)} year  old.`);

// // // // const name = `${firstName} ${lastName}`;
// // // // console.log(name.startsWith(`j`));
// // // // console.log(name.endsWith(`Th`))
// // // // console.log(name.includes(`M`))
// // // // console.log(`${firstName} `.repeat(5))

// // // //Lecture : Arrow Function

// // // // const years = [1993, 1994, 1965, 1991];

// // // // //es5

// // // // var ages5 = years.map(function (el) {
// // // //   return 2020 - el;
// // // // });

// // // // console.log(ages5);

// // // // //es6

// // // // let ages6 = years.map((el) => 2020 - el);

// // // // console.log(ages6);

// // // // ages6 = years.map((el, index) => `the age at element ${index + 1} : ${2020 - el}`);

// // // // console.log(ages6)

// // // // ages6 = years.map((el, index) => {
// // // //     const now = new Date().getFullYear();
// // // //     const age = now - el;
// // // //     return age;
// // // // })

// // // // console.log(ages6)

// // // //Lecture : Arrow Function 2

// // // //es5

// // // var box5 = {
// // //   color: "green",
// // //   position: 1,
// // //   clickMe: function () {
// // //     console.log(this);
// // //     var self = this;
// // //     document.querySelector(".green").addEventListener("click", function () {
// // //       console.log(self);
// // //       var str = "This box position at " + self.position + ". and color is " + self.color;
// // //       alert(str);
// // //     });
// // //   },
// // // };
// // // // box5.clickMe();

// // // //es6

// // // let box6 = {
// // //   color: "green",
// // //   position: 1,
// // //   clickMe: function () {
// // //     console.log(this);
// // //     document.querySelector(".green").addEventListener("click", () => {
// // //       console.log(this);
// // //       let str = `this is position ${this.position}. at color is ${this.color}`;
// // //       alert(str);
// // //     });
// // //   },
// // // };
// // // // box6.clickMe();

// // // function Person(name) {
// // //   this.name = name;
// // // }

// // // /*Person.prototype.myFriends5 = function (friends) {
// // //   // console.log(this.name)
// // //   // var self = this;
// // //   var arr = friends.map(
// // //     function (el) {
// // //       // console.log(self)
// // //       return this.name + " is friends with " + el;
// // //     }.bin   d(this)
// // //   );

// // //   console.log(arr);
// // // };*/

// // // //es6
// // // Person.prototype.myFriends5 = function (friends) {
// // //   const arr = friends.map((el) => `${this.name} is friends with ${el}`);

// // //   console.log(arr);
// // // };

// // // var friends5 = ["Bob", "Mike", "Jane"];
// // // new Person("Smith").myFriends5(friends5);

// // //Lecture: Destructuring

// // //es5

// // var john = ['John', 24];
// // // var name = john[0];
// // // var age = john[1];

// // //es6

// // const [name, age] = ['Smith', 32];
// // console.log(name,age)

// // const obj = {
// //     firstName: 'MIke ',
// //     lastName: 'Joe'
// // };

// // const { firstName, lastName } = obj;
// // console.log(firstName, lastName)

// // const {firstName:Name,lastName:Last } = obj;
// // console.log(Name)
// // console.log(Last)

// // function calcAgeAndRetirement(year) {
// //     const age = new Date().getFullYear() - year;
// //     return [age, 65 - age];
// // }

// // const [age, retirement] = calcAgeAndRetirement(1994);
// // console.log(age)
// // console.log(retirement)

// //Lecture : Arrays

// var boxes = document.querySelectorAll(".box");
// console.log(boxes);

// //es5 way

// /*var boxesArr = Array.prototype.slice.call(boxes);
// console.log(boxesArr);
// boxesArr.forEach(function (cur) {
//   cur.style.backgroundColor = "dodgerblue";
//   console.log(cur);
// });
// */
// //es6 way
// const boxesArr6 = Array.from(boxes);
// boxesArr6.map((cur) => (cur.style.backgroundColor = `green`));

// //es5
// /*
// for (var i = 0; i < boxesArr.length; i++) {
//   if (boxesArr[i].className === "box blue") {
//     continue;
//   }

//   boxesArr[i].textContent = "I changed to blue";
// }
// */

// //es6

// for (const cur of boxesArr6) {
//   if (cur.className.includes("green")) {
//     continue;
//   }
// //   cur.textContent = "Iam changed to green";
// // }

// //es5

// var ages = [12, 24, 8, 21, 17];
// var fullAgeArr = ages.map(function (el) {
//     return el >= 18;
// })

// console.log(ages)
// console.log(fullAgeArr)
// console.log(fullAgeArr.indexOf(true))
// console.log(ages[fullAgeArr.indexOf(true)])

// //es6

// console.log(ages.findIndex(cur => cur >= 18))
// // console.log(ages.find(cur => cur>=18) )

// //Lecture : Spread Operator

// //es5

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum1 = addFourAges(10, 20, 30, 40);
// console.log(sum1);

// var ages = [12, 12, 12, 43, 1];

// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //es6

// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const fmailySmith = ["john", "mikr", "jane"];
// const familyMiller = ["joe", "mark", "ren"];

// const bigFamily = [...fmailySmith, "Lily", ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");
// const all = [h, ...boxes];

// Array.from(all).forEach((cur) => (cur.style.color = "purple"));

//Lecture : Rest Parameter

//es5

// function isFullAge5(limit) {
//   console.log(arguments);
//   var arr = Array.prototype.slice.call(arguments, 1);
//   console.log(arr);

//   arr.forEach(function (cur) {
//     console.log(2020 - cur >= limit);
//   });
// }

// // isFullAge5(21,1999, 1993, 1995);

// //es6

// function isFullAge6(limit, ...years) {
//   console.log(years);
//   years.forEach((cur) => console.log(2020 - cur >= limit));
// }

// isFullAge6(21, 2000, 1999, 1993, 1995);

//Lecture : Default Parameter

//es5
/*
function SmithPerson(firstName, lastName, yearOfBirth, nationality) {
  nationality === undefined ? (nationality = "Indian") : nationality;
  yearOfBirth === undefined ? (yearOfBirth = 1999) : yearOfBirth;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
*/

// //es6
// function SmithPerson(firstName, lastName, yearOfBirth = 1999, nationality = "indian") {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
// var john = new SmithPerson("John", "Smith");

//Lecture : Map

// const question = new Map();
// question.set("question", "What is major version of javascript?");
// question.set(1, "es5");
// question.set(2, "es6");
// question.set(3, "es7");
// question.set(4, "es2015");
// question.set("correct", 3);
// question.set(true, "Correct");
// question.set(false, "wrong ans try  again");

// console.log(question.get("question"));
// console.log(question.size);

// if (question.has(4)) {
//   //   question.delete(4);
//   console.log("ans 4 is here");
// }

// // question.forEach((value, key) => console.log(`this  is value ${value}: this is key ${key}`));

// for (let [key, value] of question.entries()) {
//   if (typeof key === "number") {
//     console.log(`ans ${value}`);
//   }
//   //   console.log(`this  is value ${value}: this is key ${key}`);
// }

// const ans = parseInt(prompt("write correct ans"));

// console.log(question.get(ans === question.get("correct")));

//Lecture Classes

//es5
/*
function Person(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calcAge = function () {
  return 2020 - this.yearOfBirth;
};

var amol = new Person5("amol", 1994, "software developer");
console.log(amol.calcAge());
//es6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calcAge() {
    return 2020 - this.yearOfBirth;
  }

  set(name) {
    this.name = name;
  }

  get() {
    return this.name;
  }

  static greeting() {
    console.log("hey static");
  }
}

const raju = new Person6("Raju", 1993, "Tea shop");

console.log(raju.calcAge());

Person6.greeting();

var nehal = {
  name: 'nehal',
  clickMe: function () {
  }
}
*/

//Lecture classes and subclasses

// var Person5 = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person5.prototype.calcAge = function () {
//   return 2020 - this.yearOfBirth;
// };

// var Athlet5 = function (name, yearOfBirth, job, olympicsGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicsGames = olympicsGames;
//   this.medals = medals;
// };

// Athlet5.prototype = Object.create(Person5.prototype);

// Athlet5.prototype.wonMedal = function () {
//   this.medals++;
//   console.log(this.medals);
// };

// var johnAthlet5 = new Athlet5("John", 1994, "swimmer", 3, 10);

// console.log(johnAthlet5.calcAge());
// johnAthlet5.wonMedal();

// //es6

// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calcAge() {
//     return 2020 - this.yearOfBirth;
//   }
// }

// class Athlet6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicsGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicsGames = olympicsGames;
//     this.medals = medals;
//   }

//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const amolAthlet6 = new Athlet6("Amol", 1992, "jokoer", 2, 12);
// amolAthlet6.wonMedal();
// console.log(amolAthlet6.calcAge());

//lecture : coding challenge

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, numOfTrees, area) {
    super(name, buildYear);
    this.numOfTrees = numOfTrees;
    this.area = area; //km2
  }

  treeDensity() {
    const density = this.numOfTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per km2`);
  }
}

class Streets extends Element {
  constructor(name, buildYear, lengthOfStreet, size = 3) {
    super(name, buildYear);
    this.lengthOfStreet = lengthOfStreet;
    this.size = size;
  }

  classifyStreet() {
    const classifiction = new Map();
    classifiction.set(1, "tiny");
    classifiction.set(2, "small");
    classifiction.set(3, "normal");
    classifiction.set(4, "big");
    classifiction.set(5, "huge");
    console.log(`${this.name}, build in ${this.buildYear} has a ${classifiction.get(this.size)} street. `);
  }
}

const allParks = [new Park("Green Park", 1987, 210, 0.2), new Park("Orange PArk", 1999, 300, 1.2), new Park("Red Park", 1843, 1000, 4.3)];

const allStreets = [
  new Streets("Karve Road", 2000, 12, 4),
  new Streets("Ocean Ave", 1985, 2),
  new Streets("Paud road", 2001, 6.7, 5),
  new Streets("Akrudi road", 1999, 1, 1),
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("----------PARK REPORTS----------");

  //denisty
  p.forEach((el) => el.treeDensity());

  //avg age
  const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks has an avg of ${avgAge} year.`);

  // //which park has more than 1000 trees
  const i = p.map((el) => el.numOfTrees).findIndex((el) => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log("---------------Street Report-----------");
  //total length and avg length
  const [totalLength, avgLength] = calc(s.map((el) => el.lengthOfStreet));
  console.log(`Our ${s.length} street has an total length of ${totalLength}km with an avg length ${avgLength} km`);

  //classify sizes
  s.forEach((el) => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
