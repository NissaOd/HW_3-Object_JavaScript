// 11    Виконай рефакторинг рішення попереднього завдання, додавши в цикл
// for...in перевірку на власну властивість.

// Оголошена змінна advert.
// Значення змінної advert - це об 'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об 'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив["descr", "rating", "price"].
// Оголошена змінна values.

// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(keys)) 
//  { keys.push(key);
//   values.push(apartment[key]);}

//   // Change code above this line
// }


// __________________________________________________

// 12 
// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// function countProps(object) {
//     let propCount = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount++;
//         }
//     }
//     // Change code above this line
//     return propCount;
// }

// countProps()