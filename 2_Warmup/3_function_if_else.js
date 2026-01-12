// creating the function

function greet() {
    console.log("hello")
}

greet()
// by pasdding values 
function passingName(val) {
    console.log("hello"+val)
}

passingName("harish")

// retring the values from <input>z</input>

function square(num) {
    let result = num * num;
    return result
}

console.log(square(100))


// function to check weather the person is egligible to vote ot not <a></a>


function voting(age) {
    if (age < 1) {
        console.log("invalid age")
    }

    else if (age < 18) {
        console.log("not egligible to vote")
    }
    else {
        console.log("egligible to vote")
    }
}

voting(-1123)


// to the chekc the number is even or odd


function evenOrOdd(num) {
    let result = num % 2;
    if (result == 0) {
        return "even number"
    }
    else {
        return "odd number"
    }
}

console.log(evenOrOdd(12));
console.log(evenOrOdd(-12));
console.log(evenOrOdd(131));
console.log(evenOrOdd(0));
