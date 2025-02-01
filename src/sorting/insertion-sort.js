function implInsertionSort(inp) {
  for (let i = 0; i < inp.length; i++) {
    let j = i;
    while (j > 0 && inp[j - 1] > inp[j]) {
      let temp = inp[j - 1];
      inp[j - 1] = inp[j];
      inp[j] = temp;
      j--;
    }
  }
  console.log(inp);
  return inp;
}
console.log('**************** \n');
console.log('Insertion Sort');
console.log('Time complexity---O(n^2)');
const result = implInsertionSort([45, 2, 6, 12, 9]);
console.log(result);
console.log('\n **************** ');
