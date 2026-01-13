// for checking second largest
function secondLargest(arr) {
    if (arr.length < 2) {
        return null
    }
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i<arr.length; i++){
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest=arr[i]
        }
        else if (arr[i] > secondLargest && arr[i]!=firstLargest) {
            secondLargest=arr[i]
        }
    }
    return secondLargest
}

let arr = [1, 2, 3, 2313, 2, 12, 12, 1, 21, 2, 1232, 43, 24]
let result = secondLargest(arr)
console.log(result);