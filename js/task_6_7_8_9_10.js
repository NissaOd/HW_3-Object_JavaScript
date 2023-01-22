// 6. Доповни код, оновивши значення властивостей об 'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім 'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".
// Оголошена змінна apartment
// Значення змінної apartment - це об 'єкт
// Значення вкладеної властивості price - це число 5000
// Значення вкладеної властивості rating - це число 4.7
// Значення вкладеної властивості name - це рядок "Henry Sibola"
// Значення вкладеної властивості tags - це масив["premium", "promoted", "top", "trusted"]


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
//   apartment.price = 5000;
//     apartment.rating = 4.7;
//     apartment.owner.name = "Henry Sibola";
//     apartment.tags.push("trusted");
//   Change code below this line
// __________________________________________________


// 7
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// __________________________________________________

// 8
// Дополни код объявления объекта таким образом, чтобы у него были свойства name, price, imageи tagsсо значениями из переменных с аналогичными именами. Обязательно используй синтаксис кратких свойств.

// Объявленная переменнаяproduct
// Значение переменной product– это объект
// Значение вложенного свойства name– это строка"Repair Droid"
// Значение вложенного свойства price– это число2500
// Значение вложенного свойства image– это строка"https://via.placeholder.com/640x480"
// Значение вложенного свойства tags– это массив["on sale", "trending", "best buy"]const name = "Repair Droid";



// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//    price,
//   image,
//    tags,

//   // Change code above this line
// };


// __________________________________________________



// 9
// Дополни код объявления объекта credentialsтаким образом, чтобы в результате у него были два свойства: emailи password, имена которых хранятся в переменных emailInputNameи passwordInputName.

// Значением свойства emailдолжна быть строка "henry.carter@aptmail.com", а значением свойства password– строка "jqueryismyjam".

// Объявленная переменнаяcredentials
// Значение переменной credentials– это объект
// Объект credentialsсодержит свойствоemail
// Значение вложенного свойства email– это строка"henry.carter@aptmail.com"
// Объект credentialsсодержит свойствоpassword
// Значение вложенного свойства password– это строка"jqueryismyjam"


// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     // Change code below this line

//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
//     // Change code above this line
// };


// __________________________________________________

// 10
// Перебери объект apartment, используя цикл for...in, и запиши в массив keysвсе его ключи, а в массив valuesвсе значения его свойств.

// Объявленная переменнаяapartment
// Значение переменной apartment– это объект
// Объявленная переменнаяkeys
// Значение переменной keys– это массив["descr", "rating", "price"]
// Объявленная переменнаяvalues
// Значение переменной values– это массив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = ["descr", "rating", "price"];
//   const values = ["Spacious apartment in the city center", 4, 2153];
//   // Change code below this line
//   for (const keys in apartment) {
//     // Ключ
//     console.log(keys);
//     // Значення властивості з таким ключем
//     console.log(apartment[keys]);
//   }