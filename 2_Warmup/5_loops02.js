// need the search the element in the given array if yes return indedx elsae retuern -1

function serachElement(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            return i
        }
    }
    return -1
}
let arr = [12, 213, 313, 31, 31, 31313, 2]
let ele = 213
let sol = serachElement(arr, ele)
console.log(sol)


// programm to count the number of - ve number sin array
function countElement(arr1) {
    let count = 0;
    // console.log(count, "count");
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < 0) {
            count += 1
        }
    }
    return count
}
let arr1 = [-12, 213, 313, 31, 31, 31313, 2]

let sol1 = countElement(arr1)
console.log(sol1)


// find the largest number in the array

function largestNumber(arr3) {
    let largestNumber = -Infinity;

    // in the place of infinity we cam also use the arr[0] it will work the dsame
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > largestNumber) {
            largestNumber = arr3[i]
        }
    }
    return largestNumber
}

let arr3 = [12, 2121, 2, 12, 1, 21, 2]
let finalsol = largestNumber(arr3)
console.log(finalsol);


// function to find the smallest nuber in the array

function smallestNumber(arr4) {
    let smallestNumber = Infinity;

    // in the place of infinity we cam also use the arr[0] it will work the dsame
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] < smallestNumber) {
            smallestNumber = arr4[i]
        }
    }
    return smallestNumber
}

let arr4 = [12, 2121, 2, 12, 1, 21, 2,-10]
let finalsol1 =smallestNumber(arr4)
console.log(finalsol1);