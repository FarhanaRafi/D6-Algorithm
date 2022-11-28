let eggYolk = 6 * 18;
let cheese = 50;
let blackPepper = 4;
let guanciale = 250;
let pasta = 400;
let water = 1500;
let pastaStarch = 30;

let carbonara = eggYolk + cheese;

let roastedBlackPepper = blackPepper / 2;

carbonara += roastedBlackPepper;

carbonara += guanciale;

carbonara += pasta + water * 0.1;

carbonara += pastaStarch;

carbonara += roastedBlackPepper;

console.log("The sum of all the ingredients for carbonara is:")
console.log(carbonara)