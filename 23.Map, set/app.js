/*Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

Методы и свойства:

new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.
*/

const obj = {
    name: 'asad',
    age: 20, 
    job: 'frond'
}

const entries = [
    ['name', 'asad'],
    ['age', 20],
    ['job', 'frond'],
]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map (entries)
map
.set('new', 20)
.set(obj, 'value')
console.log(map);
console.log(map.get('job'));

map.delete('job')
console.log(map);
console.log(map.has('job'));
console.log(map.size);
map.clear()
console.log(map);