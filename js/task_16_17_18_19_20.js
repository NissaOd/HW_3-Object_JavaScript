// 16
// Напиши функцію countTotalSalary(salaries), яка приймає об 'єкт зарплат, де ім'
// я властивості - це ім 'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об 'єктаfunction countTotalSalary(salaries) {



//     function countTotalSalary(salaries) {
//         let totalSalary = 0;
//        const values = Object.values(salaries);
//           for (const key of values) {
//               totalSalary += key;
//           }
//            return totalSalary;
//           console.log(totalSalary);
//       }

//       _______________________________________________



//       17
// Перебери масив об 'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'
// єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив["244,67,54", "33,150,243", "76,175,80", "255,235,59"]


// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
//   for (const { hex, rgb } of colors) {
//       hexColors.push(hex);
//       rgbColors.push(rgb);
//   }



//   ________________________________________________________

//    18
// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.Функція шукає об 'єкт продукту з таким ім'
// ям(властивість name) в масиві products і повертає його ціну(властивість price).Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     let productPrice = null;
//     for (const product of products) {
//         if (product.name === productName) {
//             productPrice = product.price;
//         }
//     }
//     return productPrice;
// }


//console.log(getProductPrice('Radar'));
// 1300
//console.log(getProductPrice('Scanner'));
// 2700
//console.log(getProductPrice('Droid'));
// 400
//console.log(getProductPrice('Engine'));
// null


// __________________________________________________________ -

//     19
// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім 'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'
// ям з кожного об 'єкта в масиві products. Якщо в об'
// єктах відсутні властивості з таким ім 'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає[4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає[1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає[]


// const products19 = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//     const propNames = [];
//     for (const product of products19) {
//         if (product[propName]) {
//             propNames.push(product[propName]);
//         }
//     }
//     return propNames;
// }
// console.log(getAllPropValues('name'));
// // [ 'Radar', 'Scanner', 'Droid', 'Grip' ]
// console.log(getAllPropValues('quantity'));
// // [ 4, 3, 7, 9 ]
// console.log(getAllPropValues('price'));
// // [ 1300, 2700, 400, 1200 ]
// console.log(getAllPropValues('category'));
// // []

// __________________________________________________________

// 20
// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім 'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    let totalCost = 0;
    for (let product of products) {
        if (product.name === productName) {
            totalCost = product.price * product.quantity;
        }
    }
    return totalCost;
}
console.log(calculateTotalPrice('Blaster'));
// 0
console.log(calculateTotalPrice('Radar'));
// 5200
console.log(calculateTotalPrice('Droid'));
// 2800
console.log(calculateTotalPrice('Grip'));
// 10800
console.log(calculateTotalPrice('Scanner'));
// 8100