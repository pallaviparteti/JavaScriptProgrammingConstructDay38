let nth = 1,
  i;
let harmonicValue = 1;
for (i = 2; i <= nth; i++) {
  harmonicValue += 1 / i;
}
console.log('Nth harmonic value is ' + harmonicValue);