

function Prime(n){
    let i = 2
    while (i <= Math.sqrt(n)){
        if(n % i == 0){
            return "Not Prime"
        }
        i++
    }
    return "Prime"
}
    let prime = Prime(7)
console.log(prime);