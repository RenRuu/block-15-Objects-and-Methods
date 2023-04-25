
const dinner = {
    cheeseburger:12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    soupAndSalad: 16
};


let totalCost = 0;

for (const indiviualMeal in dinner) {
    totalCost += dinner[indiviualMeal];
}

console.log(totalCost);

