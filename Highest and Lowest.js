function highAndLow(numbers){
  const array = numbers.split(" ");
  var min = Number(array[0]);
  var max = Number(array[0]);
  for(i=1 ; i<array.length ; i++ ) {
    if (min < Number(array[i]))
      min = min;
    else
      min = array[i];
    
    if (max > Number(array[i]))
      max = max;
    else
      max = array[i];
  }
  return max + ' ' + min;
}