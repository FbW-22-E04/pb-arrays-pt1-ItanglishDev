const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];

euroCities.splice(0, 1, "Berlin");

console.log(euroCities);
console.log(euroCities.length);
