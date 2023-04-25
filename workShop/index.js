
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVist: false,
};

customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = "coffee, strawberry, and matcha";

delete customer["zipCode"];
delete customer["favoriteStore"];

customer.toppings = "Chocolate sprinkles, wafer straw, and gummy bears";
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
 
console.table(customer)