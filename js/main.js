'use strict'

function isEmpty(obj) {
    /* ваш код */
    for(var key in obj) {
       return false;
    }

    return true;
}
    var schedule = {};
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "подъём";
    alert( isEmpty(schedule) ); // false





var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};

function sumKeys(obj){
    var sum = 0;
    for(var key in obj){
        sum += salaries[key];
    }
    return sum;
}
//... ваш код выведет 650





"use strict";
var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};
// ... ваш код выведет "Петя"

function bigKey(obj){
    var number = 0;
    var bigger = 1;
    for(var key in obj) {
       number =  obj[key];
       if(bigger < number) {
           bigger = number;
       } 
    }
    for(var name in obj){
        if(obj[name] === bigger) return name;
    }
    return number
}

bigKey(salaries);












// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };
    function multiplyNumeric(obj) {
        var n;
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
            }
        for(var key in obj){
            n = obj[key];
            if(isNumeric(n)){
                obj[key] *= 2;
            }
        }    
    }
    multiplyNumeric(menu);
    // после вызова
    menu = {
    width: 400,
    height: 600,
    title: "My menu"
    };




    var Array = [1,2,3,4,5,6,7,8,9,10];

    var lastElement = Array[Array.length - 1];

    alert(lastElement);


    var goods = ['Диск', 'ОЗУ', 'Монитор'];

     goods.push('Компьютер');

    console.log(goods)


    var styles = ['Джаз', 'Блюз'];
    
    console.log(styles);
    styles[styles.length] = 'Рок-н-Ролл';
    console.log(styles);
    styles[styles.length - 2] = 'Классика';
    console.log(styles);
    alert(styles.shift());
    console.log(styles);
    styles.unshift('Рэп', 'Регги');
    console.log(styles);





    var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    var min = arr.length - arr.length;
    var max = arr.length - 1;

    for(var i = 1; i <= 15; i++) {
        var rand = min + Math.floor(Math.random() * (max + 1 - min));
        console.log(i + '.' + ' ' + arr[rand]);
    }




//Сумма чисел вводимых в Массив  -----------------------------  

    var arrNumb = [];
    var question;
    var questionForSumm;
    var sumNumb;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    
    do {
        question = prompt('Введите слагаемые',);
        if (isNumeric(question)) {
        arrNumb.push(+question);
        } else {
            break;
        }
    }   while(isNumeric(question));
   
    if (questionForSumm =  confirm('Вы ввели ' + arrNumb.length + ' слагаемых!' + ' Посчитать их сумму?')) {
        sumNumb = 0;
        for(var n = 0; n < arrNumb.length; n++) {
            sumNumb += arrNumb[n];
        };
        alert('Сумма чисел равна ' + sumNumb);
    } else {
        alert('Упппппсссс Вы нажали ОТМЕНА!!!!');
    };

//----------------------------------------------------




// Поиск элементов в массиве--------------------------

var arr = ["test", 2, 1.5, false];

function findInArr(Array, value){
    var Array;
    var value;

    for(var n = 0; n < Array.length; n++) {
        if (Array[n] === value) return 'Ключ значения ' + value + ': ' + n;
    }
    return -1;
}

//----------------------------------------------------




// Возврпт диапазона чисел от a до b. (Функция)-------

var arr = [5, 4, 3, 8, 0];
var filtered;

function filterRange(arr, a, b) {
    var arr, a, b;
    var filtered = [];
    for(var key = 0; key < arr.length; key++) {
        if(arr[key] >= a && arr[key] <= b ) filtered.push(arr[key]);
    }

    return filtered;
} 

//----------------------------------------------------


//----------Добавить класс в строку-------------------

function classAdd (obj, cls){
    var objArr = obj.className.split(' ');

    for(var i = 0; i < objArr.length; i++) {
        if(objArr[i] == cls) {
            return 'Значение уже есть'
        };
    }

    return obj.className + ' ' + cls;
}

var obj = {
    className: 'open menu'
    }
//----------------------------------------------------

//-------Перевести текст вида border‑left‑width в borderLeftWidth---------

function camelize(str) {
    var str;
    var toArrStr = str.split('');
    var joined;

    for(var i = 0; i < toArrStr.length; i++){
        if(toArrStr[i] == "-") {
            toArrStr.splice(i,1);
            toArrStr[i] = toArrStr[i].toUpperCase();
        }
    }
    return joined = toArrStr.join('');

}

var hey = 'hey-guys-whats-upp';

//-------------------------------------------------------------------------


//-----------------------RemoveClass---------------------------------------

function removeClass(obj, cls) {
    var arr;
    var str;
    for(key in obj){
        arr = obj[key].split(' ');
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == cls) {
                arr.splice(i,1);
                i--;
            }
        str = arr.join(' ');
        obj[key] = str;
        };
    }
    return obj;
}

var obj = {
    className: 'open menu scan'
};

//--------------------------------------------------------------------------




//-----------------Фильтрация на месте--------------------------------------


var numbers = [1,4,5,8,2,3,11,10,17];

function filterRangeInPlace(arr, a, b) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= a && arr[i] <= b) continue;
        arr.splice(i, 1);
        i--;
        }
    }


//--------------------------------------------------------------------------


//----------------Сортировка в обратном порядке-----------------------------

var arr = [5, 2, 1, -10, 8];

function backSort(arr){
arr.sort(function(a,b){return a-b});
return arr.reverse();
}

//--------------------------------------------------------------------------


//---------------------Скопировать и отсортировать--------------------------

function arrSort(arr){
    var arrSorted = [];
    for(var i = 0; i < arr.length; i++) {
        arrSorted[i] = arr[i];
    }
    return arrSorted.sort();
}

var arr = ["HTML", "JavaScript", "CSS"];
console.log(arrSort(arr));
console.log(arr);

//--------------------------------------------------------------------------

//----------Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.---

var arr = [1, 2, 3, 4, 5];
arr.sort(function(a,b) {return a && b || a});
alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4]

//-----------------------------------------------------------------------------------------------------




//--------Сортировка объектов-----------------------------------------

// Наша функция сравнения
function compareAge(personA, personB) {
    return personA.age - personB.age;
    }
    // проверка
    var vasya = { name: "Вася", age: 23 };
    var masha = { name: "Маша", age: 18 };
    var vovochka = { name: "Вовочка", age: 6 };
    var people = [ vasya , masha , vovochka ];
    people.sort(compareAge);
    // вывести
    for(var i = 0; i < people.length; i++) {
    alert(people[i].name); // Вовочка Маша Вася
    } 