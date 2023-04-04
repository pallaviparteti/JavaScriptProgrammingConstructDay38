const num = 3;
let fact = 1;
for (let i = num; i >= 1; i--) {
  fact *= i;
}
console.log(`factorial of ${num} is ` + fact);