function countDigits(num) {
    let count = 0;
    // if the number is 0
    if (num == 0) {
        return 1
    }

    // if the number is the -ve number
    num = Math.abs(num)
    while (num > 0) {
        num = Math.floor(num / 10)
        count+=1
    }
    return count
}

let num = 123123
let result = countDigits(num)
console.log(result,"result")