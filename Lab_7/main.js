
//Задание 1

let bread = +prompt('Введите количество хлеба');
let cheese = +prompt('Введите количество сыра');

const product = {
    "bread": bread,
    "cheese": cheese
};

function countSandwiches(product) {
    const breadsForSandwich = Math.floor(product.bread / 2);
    return Math.min(breadsForSandwich, product.cheese);
}

console.log(countSandwiches(product));


//Задание 2
let number = +prompt('Введите число для таблицы умножения');

function multiplication(number) {
    for (let row = 0; row <= number; row++) {
        let rowContent = [];
        for (let col = 0; col <= number; col++) {
            if (row === 0) {
                rowContent.push('#');
            } else {
                rowContent.push(col === 0 ? row : row * col);
            }
        }
        console.log(rowContent.join(' '));
    }
}

multiplication(number);


// Задание 3

let message = prompt('Введите сообщение');
let words = message.split(' ');

function distribution(message) {
    const maxLength = Math.max(...words.map(word => word.length));
    const border = '*'.repeat(maxLength + 4);

    console.log(border);
    for (const word of words) {
        const spaces = ' '.repeat(maxLength - word.length);
        console.log(`* ${word}${spaces} *`);
    }
    console.log(border);
}

distribution(message);


//Задание 4

let array1 = prompt('Введите первый массив');
let array2 = prompt('Введите второй массив');
let mergedArray = mergeArrays(array1.split(' '), array2.split(' '));
console.log(mergedArray);

function mergeArrays(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    const merged = [];
    
    for (let i = 0; i < maxLength; i++) {
        if (i < array1.length) {
            merged.push(array1[i]);
        }
        if (i < array2.length) {
            merged.push(array2[i]);
        }
    }
    
    return merged;
}


//Задание 5


let arr = prompt('Введите ваш массив');
let uniqueValues = countUniqueValues(arr.split(' '));
console.table(uniqueValues);

function countUniqueValues(arr) {
    let obj = {};
    
    for (const value of arr) {
        obj[value] = (obj[value] || 0) + 1;
    }
    
    return obj;
}

countUniqueValues(arr);
