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

    function showArr(ob) {
        let copyArr = [];

        for(let i = 0; i < ob.length; i++) {
            if(ob[i] === ob[i +  1] || ob[i] == undefined) continue;
            copyArr.push(ob[i]);

        }
        return copyArr;
    }
    
    let p = [1,1,1,2,4,5,5,6,7,8,8];
    showArr(p);

    function showArr(ob) {
        let copyArr = [];

        for(let i = 0; i < ob.length; i++) {
            if(ob[i] === ob[i +  1] || ob[i] == undefined) {
                if(ob[i] === ob[i-1]) continue;
                copyArr.push(ob[i]);

            } else {
                continue;
            };

        }
        return copyArr;
    }
    
    let p = [1,1,1,2,4,5,5,6,7,8,8];
    showArr(p);

    let b = [];
    b.unshift(23);
    console.log(b)
    console.log(b.length)

    function disemvowel(str) {
        let keys = ['A','a','E','e','I','i','O','o','U','u'];
        let strSplit = str.split('')

        for(let a = 0; a < strSplit.length; a++) {
            for(let b = 0; b < keys.length; b++) {
                if(strSplit[a] == keys[b]) {
                    strSplit.splice(a, 1);
                    a--;
                } else {
                    continue;
                }
            }
        }
        
        str = strSplit.join('');
        return str;
      };

      console.log(disemvowel('Hello my friend!!!'))


      


      function findMissingLetter(array) {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let alpSplit = alphabet.split('');
        let zeroItem = array[0]; 
        let arr = [];
        let skiped = '';
        
        if(zeroItem != array[0].toLowerCase()) {
            alpSplit.forEach((item, i) => {
            alpSplit[i] = alpSplit[i].toUpperCase();
            }
        )};
        
        for(let i = 0; i < alpSplit.length; i++) {
            if(array[0] == alpSplit[i]) arr = alpSplit.slice(i, i + array.length);
        };
        for(let s = 0; s < array.length; s++){
            if(arr[s] != array[s])  skiped += arr[s]; 
        }
        return skiped[0];
    };
    findMissingLetter(['a','b','d']);
    findMissingLetter(['A','B','C']);


    let a = [[1213,243,35,63,2,4,7,5,22,2,1], [7,4,6,5,2,31,21,1,3]];
    let b = [];
    for(let i = 0; i < a.length; i++) {
       a[i] = a[i].sort((a,b) => {
          return a - b});
    }

    let a = [[1213,243,35,63,2,4,7,5,22,2,1], [7,4,6,5,2,31,21,1,3]];
    let b = 0;
    for(let item of a) {
       item = item.sort((a,b) => {
          return a - b});
    }

    for(let item of a) {
        b += item[0];
    }

    function twosDifference(input){
        //Enter your solution here
        let diff = [];
        let counter = 0;
        input.sort((a,b) => {
            return a-b;
        });
        for(let i = 0; i < input.length; i++) {
            for(let c = 1; c < input.length; c++) {
                if(input[c] - input[i] == 2) {
                    diff[counter] = [input[i],input[c]];
                    counter++; 
                } else {
                    continue;
            };
            }; 
        };
        return diff;
    }


    // Set
    
    let obj = [1,1,1,13,4,4,5,6,7,2,2222,3,2,333,222,112,323,44,55,55,55,4,4,4,4,5,5,5,5,7,7,7];
    
    obj.forEach((item, i) => console.log(item + " " + i));


    function hydrate(s) {
        // your code here
        let arrStr = s.split(' ');
        let sum = 0;
        arrStr.sort();

        for(item of arrStr) {
            if(isFinite(item)) sum += +item; 
        }
        if(sum > 1) {
            return `${sum} glasses of water`;
        } else {
            return `${sum} glass of water`;
        }
      };

      hydrate("1 beer");




      cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
      function cakes(recipe, available) {
        // TODO: insert code
        let support = [];
        let counter = 0;

        for(let key in recipe) {
            if(available[key] == undefined) return 0;
        }

        for(let key in recipe) {
            support[counter] = available[key]/recipe[key];
            counter++;
        }

        support.sort((a,b) => a - b);
        return Math.floor(support[0])
      }

      function isPrime(num) {
        //TODO
        let simple = [];
        let n = [];

        if(num < 2) return false;
        for(let i = 0; i<=10; i++) {
        simple[i] = i;
        };
        simple.push(num);
        simple.sort((a,b) => a - b);

        for(let i = 0; i < simple.length; i++) {
            if(num % simple[i] == 0) {
            n.push(simple[i]);
            }
        }
        
        let set = new Set(n);

        if(set.size > 2) {
            return false;
        } else {
            return true;
        }
      };
      isPrime(482988529);




      function diamond(n){
        if(n%2 == 0) return null;
        diam = '';
        for(let i = 1; i <= n; i++) {
            if(i%2 == 0) continue;
            for(let b = 1; b <= i;b++) {
               diam += "*";
            };

            diam += "\n";
            for(let c = 1; c <= (n/2) - i; c++) {
                diam += " "
            }
        }
        return diam;
      }
      console.log(diamond(5));



      let num = 7;
      let value = 0;
      let str = '#';
      while(value < num) {
        console.log(str);
        value++;
        str += '#';
      };


      for(let i = 0; i <= 100; i++) {
          if(i % 3 == 0 && i % 5 == 0 && i >= 5) {
              console.log('FizzBuzz');
          }else if(i % 3 == 0 && i >= 3) {
              console.log('Fizz');
          } else if(i % 5 == 0 && i >= 5) {
              console.log('Buzz');
          } else {
          console.log(i);
          };
      }


      let desk = "# # # #";
      let outDesk = "";

      for(let i = 1; i <= 8; i++) {
          if(i % 2 == 0) {
              outDesk += desk + "\n";
          } else {
            outDesk += " " + desk + "\n";
          };
      }

      console.log(outDesk);


      let deskNum = +prompt("Введите число:");
      let desk = "";
      let outDesk = "";

      for(let i = 0; i < deskNum; i++) {
          desk += "# "
      }

      for(let i = 1; i <= deskNum; i++) {
          if(i % 2 == 0) {
              outDesk += desk + "\n";
          } else {
            outDesk += " " + desk + "\n";
          };
      }

      console.log(outDesk);

      let b = xvc.find((item,index) => {
          if(item == 4534) return index;
        })




        function camelize(str) {
            let copyStr = str.split('-');
            let copyStr2 = copyStr.map((item,index,arr) => {
                let key = item.split('');
                key[0] = key[0].toUpperCase();
                return key.join('');
            });
            return copyStr2.join('');
        }

        camelize('left-border-width')


        function filterRange(arr,a,b) {
            let filtered = [];
            for(let i = 0; i < arr.length;i++) {
                if(arr[i] >= a && arr[i] < b) filtered.push(arr[i]);
            }
            return filtered
        }

    function filterRangeInPlace(arr,a,b) {
        for(let i = 0; i < arr.length;i++) {
            if(arr[i] >= a && arr[i] < b) continue;
            arr.splice(i,1);
        }
    }


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => {
    return item.name
})
console.log( names ); // Вася, Петя, Маша