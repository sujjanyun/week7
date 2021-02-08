'use strict'
// FOR LOOP SHORT WAY
const myArray = [1, 2, 3];
myArray.forEach(num => {
    console.log(num)
});

// FOR LOOP LONG WAY
const myForEach = () => {
    
    for (let i=0; i < myArray.length; i++) {
        console.log(myArray[i]);
    };
};

myForEach();


// MAP SHORT WAY
const myArray = [1, 2, 3, 4, 5, 6];
const mapArr = myArray.map(num => num + 30);
console.log(mapArr)

// MAP LONG WAY
const myMap = (arr) => {
    let newArr = [];
    for (let i=0; i < arr.length; i++) {
        arr[i] += 30;
        newArr = [...newArr,arr[i]] 
    }
    return newArr;
}

console.log(myMap([1,2,3]))


// FILTER SHORT WAY
const myArray = [1,2,3,4,5,6];
const filterArr = myArray.filter(num => num === 2 || num === 4);
console.log(filterArr) // [2,4]

// FILTER LONG WAY
const arr = [1, 2, 3, 4, 5, 6];

const myFilter = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2 || arr[i] === 4) {
            newArr = [...newArr, arr[i]];
        }
    }
    return newArr;
}

console.log(myFilter(arr));


// SORT SHORT WAY
const myArray = [1,2,3,4,5,6];
    const descend = myArray.sort((a,b) => a > b ? -1: 1);
    console.log(descend) // [6,5,4,3,2,1]

// SORT ASCEND
const myArray = [6,5,4,3,2,1];

const ascend = myArray.sort();
console.log(ascend);

// SORT LONG ASCEND WAY
const myArray = [6,5,4,3,2,1];

const mySort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0, swapping; j < arr.length; j++){
            if(arr[j] > arr[j +1]) {
                swapping = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = swapping // [6,6] => [5,6]
            };
        };
    };
    return arr;
}

console.log(mySort(MyArray));


// CONCAT SHORT WAY
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const myArr = arrI.concat(arr2);
console.log(myArr)

// CONCAT LONG WAY
let arr = [];
const concat = () => {
    for (let i = 0; i < arr1.length; i++){
        arr = [...arr, arr1[i]];
    };
    for (let j = 0; j < arr2.length; j++){
        arr = [...arr, arr2[j]];
    }
}
concat();
console.log(arr);

// JOIN SHORT WAY
const arr = ["j", "e", "d", "i"];

let str = "";
const myJoin = {} => {
    for (let)
}