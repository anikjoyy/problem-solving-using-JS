function numberToPower(number, power) {
  var result = 1;
  for (var i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}
