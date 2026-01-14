// star patterns <a></a >


let n = 5;
for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= n; j++) {
        row = row + " * "
    }
    console.log(row)
}

console.log("-------------------")

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + " * "
    }
    console.log(row)
}

console.log("-------------------")

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + j + " "
    }
    console.log(row)
}

console.log("-------------------")

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row = row + i + " "
    }
    console.log(row)
}
console.log("-------------------")

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= (n-i+1); j++) {
        row = row + j + " "
    }
    console.log(row)
}
console.log("-------------------")

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= (n - i + 1); j++) {
        row = row + "  "
    }
    for (let k = 1; k <= i; k++) {
        row = row + "*" + " "
    }
    console.log(row)
}

console.log("-------------------")

for (let i = 1; i <= n; i++){
    let row = " "
    let trigger = "1"
    for (let j = 1; j <= i; j++){
        row += trigger
        if (trigger == 1) {
            trigger=0
        }
        else {
            trigger=1
        }
    }
    console.log(row)
}
console.log("-------------------")
let trigger = "1"
for (let i = 1; i <= n; i++) {
    let row = " "
    
    for (let j = 1; j <= i; j++) {
        row += trigger
        if (trigger == 1) {
            trigger = 0
        }
        else {
            trigger = 1
        }
    }
    console.log(row)
}


