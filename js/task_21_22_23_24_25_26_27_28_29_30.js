// 21
// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні(meanTemperature).Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об 'єкта highTemperatures.

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об 'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна meanTemperature
// Значення змінної meanTemperature - це число 29
// Використовується синтаксис деструктуризації об 'єкта highTemperatures

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// ________________________________________________


// 22
// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта


// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// ________________________________________--

// 23
// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об 'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об 'єкт
// Оголошена змінна highYesterday
// Значення змінної highYesterday - це число 28
// Оголошена змінна highToday
// Значення змінної highToday - це число 26
// Оголошена змінна highTomorrow
// Значення змінної highTomorrow - це число 33
// Оголошена змінна highIcon
// Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується деструктуризація об 'єкта

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// _________________________________________________


// 24
// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебирання масиву використовується цикл for...of
// В циклі for...of використовується деструктуризація об'єкта
// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb }
//     of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }


// _________________________________________


// 25
// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна forecast
// Значення змінної forecast - це об'єкт
// Оголошена змінна highToday за допомогою деструктуризації
// Значення змінної highToday - це число 32
// Оголошена змінна lowToday за допомогою деструктуризації
// Значення змінної lowToday - це число 28
// Оголошена змінна todayIcon за допомогою деструктуризації
// Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Оголошена змінна highTomorrow за допомогою деструктуризації
// Значення змінної highTomorrow - це число 31
// Оголошена змінна lowTomorrow за допомогою деструктуризації
// Значення змінної lowTomorrow - це число 27
// Оголошена змінна tomorrowIcon за допомогою деструктуризації
// Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// const {
//     today: {
//         high: highToday,
//         low: lowToday,
//         icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     },
//     tomorrow: {
//         high: highTomorrow,
//         low: lowTomorrow,
//         icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     },
// } = forecast;

// _____________________________________________________________

// 26
// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// Оголошена функція calculateMeanTemperature(forecast)
// В тілі функції використовується деструктуризація об'єкта
// В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
// Виклик calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) повертає 28.5
// Виклик calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) повертає 37

/* Паттерн «Объект настроек»
Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности
что передавать. В результате получается очень неочевидный код в месте её вызова.
function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Делаем что-то с параметрами
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}
// ❌ Что такое 736? Что такое 10283? Что такое true?
doStuffWithBook("Последнее королевство", 736, 10283, 8.38, true);
Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров всего одним - 
объектом с именованными свойствами.
function doStuffWithBook(book) {
  // Делаем что-то со свойствами объекта
  console.log(book.title);
  console.log(book.numberOfPages);
  // И так далее
}
Тогда во время её вызова передаём один объект с необходимыми свойствами.
// ✅ Всё понятно
doStuffWithBook({
  title: "Последнее королевство",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});
Ещё один плюс в том, что можно деструктуризировать объект в параметре book.
// Это можно сделать в теле функции.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}
// Или в сигнатуре (подписи), разницы нет.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}
Задание
Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект 
температур на два дня следующего формата.
{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной 
операцией деструктуризации свойств объекта forecast.
Тесты
Объявлена функция calculateMeanTemperature(forecast)
В теле функции используется деструктуризация объекта
В теле функции объявлена переменная todayHigh с помощью деструктуризации
В теле функции объявлена переменная todayLow с помощью деструктуризации
В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37 */

// function calculateMeanTemperature(forecast) {
//     const {
//         today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//     } = forecast;
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//     calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }),
// );

// console.log(
//     calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }),
// );


__________________________________________________________________

// 27.
// У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

// Оголошена змінна scores
// Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 93
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 17
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

/* Операция spread при передаче аргументов
Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, 
где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить 
массив в объект и наоборот.
Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог
 массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.
Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается 
копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.
Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть 
ожидает не массив значений, а произвольное количество аргументов.
const temps = [14, -4, 25, 8, 11];
// В консоли будет массив
console.log(temps);
// ❌ Так не сработает, потому что передаём целый массив
console.log(Math.max(temps)); // NaN
// В консоли будет набор отдельных чисел
console.log(...temps);
// ✅ Распылим коллекцию элементов как отдельные аргументы
console.log(Math.max(...temps)); // 25
То есть запись Math.max(...[14, -4, 25, 8, 11]), после интерпретации превращается в 
Math.max(14, -4, 25, 8, 11) - синтаксис ... возвращает распакованный массив, то есть 
распыляет его элементы как отдельные аргументы.
Задание
В переменной scores хранится массив результатов тестирования. Используя распыление и методы 
Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, 
а в worstScore самый низкий.
*/

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

________________________________________


29
/* Операция spread при создании нового массива
Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов 
в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления 
позволяет сделать тоже самое в более краткой форме.
const temps = [14, -4, 25, 8, 11];
// Это точная, но независимая копия массива temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
В примере выше у нас есть ящик яблок temps и мы хотим сделать его точную копию. Берём пустой 
ящик и пересыпаем в него яблоки из исходного ящика temps - распыляем его в другую коллекцию. 
При этом ящик temps не изменится, в нём все ещё будут яблоки, а в новом ящике - их точные копии.
В следующем примере мы ссыпаем яблоки из двух ящиков в один новый. Оригинальные ящики (массивы) н
е изменятся, а в новом будут копии всех их яблок (элементов). Порядок распыления важен - он влияет 
на порядок элементов в новой коллекции.
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]
Задание
В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования 
отдельных групп. Используя распыление дополни код так, чтобы:
В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
В переменной worstScore был самый низкий общий балл.
Тесты
Объявлена переменная firstGroupScores
Значение переменной firstGroupScores это массив [64, 42, 93]
Объявлена переменная secondGroupScores
Значение переменной secondGroupScores это массив [89, 14, 51, 26]
Объявлена переменная thirdGroupScores
Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81]
Объявлена переменная allScores.
Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
Объявлена переменная bestScore
Значение переменной bestScore это число 97
Объявлена переменная worstScore
Значение переменной worstScore это число 14
При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива
Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores
Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores */

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


__________________________________________________________________

29

/* Операция spread при создании нового объекта
Операция spread позволяет распылить свойства произвольного количества объектов в один новый.
const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }
Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого 
объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
Если бы яблоки в ящике имели наклейки с метками, то в одном ящике не может быть двух яблок с одинаковыми 
метками. Поэтому при пересыпании второго ящика, все яблоки, метки которых совпадут с теми что уже есть в 
новом, заменят те что уже есть.
Во время распыления можно добавлять свойства в произвольное место. Главное помнить про уникальность 
имени свойства и о том, что его значение может быть перезаписано.
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };
const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }
const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
Задание
В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся 
в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, 
они хранятся в переменной overrideSettings.
Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх 
них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился 
объект финальных настроек теста.
Тесты
Объявлена переменная defaultSettings
Значение переменной defaultSettings это объект
Объявлена переменная overrideSettings
Значение переменной overrideSettings это объект
Объявлена переменная finalSettings
Значение переменной finalSettings это объект
Значение свойства finalSettings.theme равно "light"
Значение свойства finalSettings.public равно "false"
Значение свойства finalSettings.withPassword равно "true"
Значение свойства finalSettings.minNumberOfQuestions равно 10
Значение свойства finalSettings.timePerQuestion равно 30
При присваивании значения переменной finalSettings используется синтаксис ... */

// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// const finalSettings = {...defaultSettings, ...overrideSettings };


// _________________________________________________


// 30
// Напиши функцію makeTask(data) яка приймає один параметр data - об 'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об 'єкт завдання, не змінюючи напряму параметр data. 
// У новому об 'єкті повинна бути властивість completed, значення якої зберігається в
// однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority,
// можуть бути відсутніми.Тоді, в новому об 'єкті завдання, 
// у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються
// в однойменних локальних змінних.

// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     const object = { completed, priority, category, ...data };
//     return object;
// }
// console.log(makeTask({}));
// // { completed: false, priority: 'Normal', category: 'General' }
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// // { completed: false, priority: 'Low', category: 'Homemade', text: 'Take out the trash' }
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// // { completed: false, priority: 'Normal', category: 'Finance', text: 'Take interest' }
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// // { completed: false, priority: 'Low', category: 'General', text: 'Choose shampoo' }
// console.log(makeTask({ text: 'Buy bread' }));
// // { completed: false, priority: 'Normal', category: 'General', text: 'Buy bread' }