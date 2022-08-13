function fibonacciNumber(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciNumber(n - 2) + fibonacciNumber(n - 1);
    }
}

let sum = 0;

for (let i = 0; i <= 20; i++) {
    console.log(fibonacciNumber(i))
    sum += fibonacciNumber(i);
}

console.log("Tổng 20 số fibonacci đầu tiên: " + sum);
