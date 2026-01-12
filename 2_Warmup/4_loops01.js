for (let i = 0; i < 5; i++) {
    console.log("hello", i)
}

// adding the <=
for (let i = 0; i <= 5; i++) {
    console.log("hello", i)
    // it will print one time more than the previous one
}

for (let i = 3; i < 5; i++) {
    console.log("hello", i)
    // 2 ti,es
}

for (let i = 2; i < 9; i + 2) {
    console.log("hello", i)
    // 4 times 
}

for (let i = 5; i < 4; i++) {
    console.log("hello", i)

    // not even the single time
}


// calling the function in the side the loop


function greet(num) {
    console.log("hello"+" "+num)
}

for (let i = 0; i <= 10; i++){
    greet(i)
}


// working the array along with the loop

let arr = [12, 232, 123, 23, 42]

let length = arr.length
for (let i = 0; i < length; i++){
    console.log(arr[i])
}

// now to print the even numbers in the array

for (let i = 0; i < length; i++){
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}


// working with the while loop

let a = 1;
whhile(a < 10);{
    console.log("hello", a);
    a++
};