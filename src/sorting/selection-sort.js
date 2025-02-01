function implSelectionSort(inp) {
  for (let i = 0; i < inp.length; i++) {
    let min = i;
    for (let j = i; j < inp.length; j++) {
      if (inp[j] < inp[min]) {
        min = j;
      }
    }
    let temp = inp[i];
    inp[i] = inp[min];
    inp[min] = temp;
  }
  console.log(inp);
  return inp;
}
console.log('**************** \n');
console.log('Selection Sort');
console.log('Time complexity---O(n^2)');
const result = implSelectionSort([45, 2, 6, 12, 9]);
console.log(result);
console.log('\n **************** ');
