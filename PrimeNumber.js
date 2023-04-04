let number = 5,
  flag = false;
for (let i = 2; i <= number / 2; ++i) {
  if (number % i == 0) {
    flag = true;
    break;
  }
}

if (!flag) console.log(number + ' is a prime number.');
else console.log(number + ' is not a prime number.');