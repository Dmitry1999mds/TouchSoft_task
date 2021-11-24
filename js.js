/* 1. Написать функцию которая принимает в себя строчное значение состоящее из одного слова. 
В слове могут быть буквы разных регистров. 
Результатом выполнения данной функции должна быть строка,
в которой первая буквы заглавная, а все последующие в нижнем регистре
Пример: 
    someFn(‘пиТеР’) // Питер
    someFn(‘javaScript’) // Javascript
*/

function someFn(str){
    let newStr = str.toLowerCase()
    let newStr2 = newStr[0].toUpperCase()

    console.log(newStr2 + newStr.slice(1))
}

someFn('пиТеР');
someFn('javaScript');

/* 2. Лизе нужно написать функцию sayHello(name), которая возвращает
приветствие для пользователя. Тем не менее, она влюблена в пользователя 
с именем "Mark", и хотела бы приветсвовать его немного иначе.
Помогите ей)
Пример:
    sayHello("Oleg");
    sayHello("Victor");
    sayHello("Mark");
*/

function sayHello(name){
    const loveName = 'Mark';
    let newName = name.toLowerCase();

    if( newName  === loveName.toLowerCase()){
        console.log(`Hi, ${loveName}`)
    } else {
        console.log(`Hello, ${newName[0].toUpperCase() + newName.slice(1)}`)
    }
}

// sayHello("Oleg");
sayHello("viTuSha");
sayHello("MarK");


/* 3. Написать функцию, которая принимает массив строк и допустимую длину. 
Результатом выполнения должен быть новый массив,
состоящий из строк, длина которые не превышают допустимую длину.  
Пример:
    filterStrings([‘I love JS’, some very long string, ‘hell’], 9) // [‘I love JS’, ‘hell’]
    filterStrings([‘a’, ‘ab’, ‘abc’], 2) // [‘a’, ‘ab’]
*/

function filterStrings(arr, num){
    let newArr = arr.map( function(item){
        if (item.length <= num){
            return item;
        }
    });

    let result = newArr.filter(item => item !== undefined);

    console.log(result);
}


filterStrings(['I love JS', 'some very long string', 'hell'], 9);
filterStrings(['a', 'ab', 'abc'], 2);
filterStrings(['I love JS', 'some very long string', 'hell', 'some very long string' ], 9);