let eggYolk = 6 * 18;
let cheese = 50;
let blackPepper = 4;
let guanciale = 250;
let pasta = 400;
let water = 2500;
let pastaStarch = 30;

console.log("The ingredients for Spaghetti alla Carbonara:");
console.log("Egg yolk: " , eggYolk);
console.log("Cheese: " ,cheese);
console.log("Black pepper: " , blackPepper);
console.log("Guanciale: " , guanciale);
console.log("Pasta: ", pasta);
console.log("Water: ", water);
console.log("Pasta starch: ", pastaStarch);

let carbonara = eggYolk + cheese;
console.log("\nMixing egg yolks and cheese:");
console.log(carbonara);

let roastedBlackPepper = blackPepper / 2;

carbonara += roastedBlackPepper;
console.log("\nAdding small amount of roasted black pepper:");
console.log(carbonara);

carbonara += guanciale;
console.log("\nAdding guanciale to the mixture:");
console.log(carbonara);

carbonara += pasta + water * 0.1;
console.log("\nAdding cooked pasta after absorption by water:");
console.log(carbonara);

carbonara += pastaStarch;
console.log("\nMixing pasta with the prepared sauce:");
console.log(carbonara);

carbonara += roastedBlackPepper;

console.log("\nThe sum of all the ingredients for carbonara is:")
console.log(carbonara)