function numbers(n){
    return n==0 ? 0 : n+numbers(n-1)
}
console.log(numbers(5))
// sdsssss