// This is a solution of the Fibonacci sequence using dynamic programming
// and recursion

// The idea is to return the number located at the given index
// 0, 1 , 1, 2, 3, 5, 8, 13, 21, ...
// input = 4 --> return 3

var fib = function() {
    let cache = {};
    function fibonacci(n){
        if(n in cache){
            return cache[n];
        }else{
            if(n < 2){
                return n;
            }else{
                cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
                return cache[n];
            }
        }
    }
    return fibonacci;
}
let fibonacci = fib();
console.log(fibonacci(8));