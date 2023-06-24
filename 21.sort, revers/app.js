//reverse
const numbers = [1, 2, 3, 4, 5];
numbers.reverse()
console.log(numbers);



//sort
const sort = [1,23, 43,34, 12]
sort.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    else return 0;
})
console.log(sort);

//2
const unsorted = [3, 2, 1, 4];

const ascending = [...unsorted].sort((a, b) => a - b).map((d) => d * 10)

const descending = [...ascending].sort((a, b) => b - a).map((d) => d * 10)

console.log(unsorted);
console.log(ascending);
console.log(descending);

//3

let users = [
    {name: 'Asad', age: 20},
    {name: 'Dima', age: 12},
    {name: 'Begim', age: 30},
    {name: 'Caid', age: 15},
]

users.sort((a, b) => a.age - b.age)
console.log(users);