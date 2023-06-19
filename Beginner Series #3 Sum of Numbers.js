function getSum(a, b)
{
  var sum = 0;
  if(a == b) {return a;}
  else{
  if(a > b) {
    sum = a;
  var length = a - b + 1;
    for(i=1; i<length; i++) {
      sum = sum + (a-i);
    }
    return sum;
  }
  else {
    sum = b;
  var length = b - a + 1;
    for(i=1; i<length; i++) {
      sum = sum + (b-i);
    }
  return sum;
}
}
}