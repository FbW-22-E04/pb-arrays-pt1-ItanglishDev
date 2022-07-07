const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];

euroCities.splice(0, 1, "Berlin");
euroCities.pop();
euroCities.push("Budapest");

console.log(euroCities.length);
console.log(euroCities);

const asianCities = ["Ming", "Mang", "Ding", "Dong", "Ching"];

const worldCities = euroCities.concat(asianCities);
console.log(worldCities);
const worldCitiesRev = worldCities.reverse();

worldCities.splice(2, 1);
console.log(worldCities);

const asianCitiesNew = asianCities.splice(2, 4);

console.log(asianCitiesNew);

worldCities[2] = "Toronto";

// console.log(worldCities);

worldCities.splice(1, 0, "Washington");

// console.log(worldCities);

const allTogetherString = worldCities.join(" ");

// console.log(allTogetherString);
