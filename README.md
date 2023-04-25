See Folder "workShop" for Froyo Survey

Notes from Class

WIIFM?
Ability to give properties and actions to variables.

Object = data types that are used to store various properties
To declare an Object use "const"
Most cases, object properties are stored in a "Key:Value" format.
Object values can be a variety of data types (numbers, strings, booleans, arrays, other objects, ect..).

*Type is a nested object inside of an object*

Key is always followed by a colon ":", separating it from the value
Comma "," is used to separate from the new key.

Values in the object dictate the specific quality of the property.

    EX) name: "banana",
        color: "yellow",
        sugar: 14, 

To access these properties we can use two different notations: dot "." or bracket "[]"
    console.log(car.color)
    console.log(car["color"]);

Object Dot Notations = a way to access properties within objects using a "Static", previously known key.

    EX)
            const car = {
                color: "blue",
                brand: "honda",
                trim: "sport"
            };

            car.weight = "1577kg";
            car["color"] = "red;
            delete car ["trim"];

            console.log(car.color) // 'blue'
            console.log(car.brand) // 'honda'


Object Methods are functions that directly attach to an object.
- Can be accessed using dot "." or bracket "[]".

To add an object property that isn't currently present, we can simply add the property by giving it a value. 
- Console.table() does not change the data, but rather organizes
(see line 34)

To update an object property, we can simply redefine the property by giving it a value.
(see line 35)

To delete an object property, use the delete operator to remove it from the object 
(see line 36)

*See demonstration.js file*

Object looping

        for (const property in object) {

        };

    EX) for (const property in car) {
        console.log(property)
         };
    
     Shows "color, brand, trim"

    Ex)  for (const property in car) {
            console.log(car[property])
        }

    Shows "blue, honda, sport"
