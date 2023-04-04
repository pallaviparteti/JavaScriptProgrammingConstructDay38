let num = 1234;
console.log('Ones Place', num % 10);
console.log('tens place', Math.floor((num / 10) % 10));
console.log("hundred's place", Math.floor((num / 100) % 10));
console.log("Thousand's place ", Math.floor(num / 1000));
