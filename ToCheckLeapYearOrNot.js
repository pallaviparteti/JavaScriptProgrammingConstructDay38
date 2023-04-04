let year = 2004;
if (year % 4 == 0) {
  //checking if the year is leap or not
  if (year % 100 != 0 || year % 400 == 0) {
    console.log('Year is leap year');
  } else {
    console.log('Year is not leap year');
  }
} else {
  console.log('Year is not a leap year');
}
