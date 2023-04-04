let num = 141,
  flag = false;

function toCheckForPrime() {
  for (let i = 2; i <= num / 2; ++i) {
    if (num % i == 0) {
      flag = true;
      break;
    }
  }
}
if (!flag) console.log(num + ' is a prime number.');
else console.log(num + ' is not a prime number.');

function toCheckForPalindrome() {
  let sum = 0;
  let temp = num;
  let rem;
  while (num > 0) {
    rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
  }
  if (temp == sum) console.log('Numbers are palindrome');
  else console.log('Numbers are not palindrome');
}

toCheckForPrime();
toCheckForPalindrome();