// Q1-- >
// var i;
// var n;

// function printnumber(i, n) {
//     if (i == n) {
//         return;
//     }
//     console.log(i);
//     printnumber(i + 1, n);
// }

// printnumber(1, 5);

// Q2-->
// var i;
// var n;

// function printnumber(i, n) {
//     if (i == n) {
//         return;
//     }
//     printnumber(i + 1, n);
//     console.log(i);
// }

// printnumber(1, 5);

// Q3-->

// function num(num1, num2) {
//     if (num1 <= num2) {
//         if (num1 % 2 == 0) {
//             console.log(num1);
//         }
//         return num(num1 + 1, num2);
//     }
// }
// console.log(num(20, 30));

// Q4-->
// function factorial(n, fact) {
//     if (n > 0) {
//         fact *= n;
//         return factorial(n - 1, fact);
//     }
//     return fact;
// }
// console.log(factorial(8, 1));

// Q5-->
// function fibo(a, b, counter) {
//     if (counter <= 12) {
//         let c = a + b;
//         return fibo(b, c, counter + 1);
//     }
//     console.log(a);
// }
// fibo(0, 1, 1);

// Q6-->
function printnumber(i, n, sum) {
    if (i == n) {
        sum += i;
        console.log(sum);
        return;
    }
    sum += i;
    printnumber(i + 1, n, sum);
}

printnumber(1, 5, 0);