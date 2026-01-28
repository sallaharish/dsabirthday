function fun(num){
    if(num<10){
        console.log(num)
        num=num+1
        fun(num)
    }
}
fun(1)

// in order to perint the n to 1
function numbers(n){
    if(n==0){
        return
    }
    console.log(n)
    n-=1
    numbers(n)
}
numbers(10)

// inorder to 1 to n

function numbers(x){
    let n=10
    if(x>n){
        return 
    }
    console.log(x)
    x+=1
    numbers(x)
}
numbers(1)

// 
function printOneToN(n) {
    if (n === 0) return;   // base case

     // recursive call
    console.log(n);
    printOneToN(n - 1);// print after recursion
}

// Example
printOneToN(5);