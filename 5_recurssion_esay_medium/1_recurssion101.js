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