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





// ____________________________________
// 13

// Перебери об 'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'
// єкта apartment, і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об 'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу
// for...of.

// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);}


__________________________________________________


// 14,Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of



// function countProps(object) {
//     let propCount = 0;
//     const keys = Object.keys(object);
//     for (const key of keys) {
//         {
//             propCount += 1;
//         }
//     }
//     return propCount;
//     console.log(propCount);
// }
// countProps({});
// // 0
// countProps({ name: 'Mango', age: 2 });
// // 2
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
// // 3


// __________________________________________________

// 15.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);