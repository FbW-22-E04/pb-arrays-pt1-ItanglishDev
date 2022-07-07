const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];

euroCities.splice(0, 1, "Berlin");
euroCities.pop();
euroCities.push("Budapest");

console.log(euroCities.length);

const asianCities = ["Ming", "Mang", "Ding", "Dong", "Ching"];

// const worldCitiesString = euroCities + euroCities.push(asianCities);

const worldCities = euroCities.concat(asianCities);

console.log(worldCities);
