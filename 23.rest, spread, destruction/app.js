//spread - раскрывает распространяет копирует
const firstNumbers = [1, 2, 3]
const secondNumbers = [4, 5, 6]

const result = ['asad',...firstNumbers, ...secondNumbers];
const secondNewArr = ['Ali', 'Aimona',...result]
console.log(result);
console.log(secondNewArr);


//rest - собирает в массив
function getNumber (...b) {
    return  b
}
const rees = getNumber(1, 2, 3, 4)
console.log(rees);

//desctruction

const auto = {
    name: 'Tesla',
    year: 2020,
    color: 'silver',
    dimension: {
        size: {
            width: '1.23mm',
            length: '5.23mm',
        }
    }
}
const {name, year, color} = auto;
console.log(name, year, color);

const {width, length} = auto.dimension.size
console.log(width, length);


//
function convertRubles (som) {
    const consvert = {
        RUB: som * 1.14,
        EUR: som * 80,
        USD: som * 70,
        GBP: som * 100,
    }
    return consvert
}
const {RUB,EUR, USD, GBP} = convertRubles(Math.round(3000));
console.log(`RUB: ${RUB} сом.`, `EUR: ${EUR} сом., USD: ${USD} сом., GBP: ${GBP} сом`);


// shallow copu spread , Object.assing() / копирует только родительские элементы
const user = {
    name: 'Asad',
    age: 20,
    countru: 'KR',
    favoriteFood: {
        food1: 'lagman',
        food2: 'Manty',
    },
    favoriteNumbers: [1, 5, 10]
}
const neewUseer = {...user}
neewUseer.name = 'jena'
neewUseer.favoriteFood.food1 = 'sushi'
console.log(user);
console.log(neewUseer);

const newus = Object.assign({}, user)
newus.name = 'Aziret'
console.log(newus);


// Deep copu,  json.stringify(), json.parse(), копирует полностью
const user2 = {
    name: 'Asad',
    age: 20,
    countru: 'KR',
    favoriteFood: {
        food1: 'lagman',
        food2: 'Manty',
    },
    favoriteNumbers: [1, 5, 10]
}

const deepObj = JSON.stringify(user2)
console.log(deepObj);

const res = JSON.parse(deepObj)
console.log(res);