/*
!concat():
Объединяет два или более массивов
и возвращает новый массив,
содержащий элементы всех массивов.
*/

/*
!forEach():
Вызывает функцию для каждого элемента в массиве.
*/

/*
!map():
Создает новый массив,
содержащий результат вызова указанной функции
для каждого элемента в исходном массиве.
*/

/*
!filter():
Создает новый массив, содержащий все элементы
исходного массива, которые прошли проверку,
заданную в функции.
*/

/*
!reduce():
Применяет функцию к каждому элементу массива,
возвращая единственное значение,
которое является результатом этого применения.
*/

//?ПРИМЕРЫ;

//!map():
// Создаем исходный массив
const numbers = [1, 2, 3, 4, 5];

// Используем метод map() для создания нового массива,
// содержащего квадраты каждого элемента исходного массива
const squares = numbers.map(function (num) {
  return num * num;
});

// Выводим новый массив в консоль
console.log(squares); // [1, 4, 9, 16, 25]

//-----------
const names = ["John", "Jane", "Bob", "Alice"];
const res = names.map((el) => {
  return el.length;
});
console.log(res); // [4, 4, 3, 5]

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 },
  { name: "Alice", age: 40 },
];

const namesin = people.map((el) => {
  return el.name;
});
console.log(namesin);

//!reduce():
const arr = [2, 3, 4, 12, 3, 4];
const resreduce = arr.reduce((acc, el) => {
  return acc + el;
}, 0);
console.log(resreduce);
