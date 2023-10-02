const userInfo = require("./information.js");
console.log(`Hello I'm ${userInfo.name} and I'm in ${userInfo.campus}`);

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "I'm Romain, I'm in Wild Code School",
    e: "oO",
    T: "U ",
  })
);
