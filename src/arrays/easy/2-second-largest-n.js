console.log('************');
console.log('find second largest element in the array');
console.log('************');

function findSecondLargest(ipArr) {
  console.log('****** Brute force method ******');
  console.log(
    ' sort the array and take last element & compare wth previous element'
  );

  console.log('****** Optimal solution ******');
  console.log('Time complexity: o(n)');
  let largest = ipArr[0];
  let secondLargest = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < ipArr.length; i++) {
    if (ipArr[i] > largest) {
      secondLargest = largest;
      largest = ipArr[i];
    }
  }
  return secondLargest === Number.MIN_SAFE_INTEGER
    ? ' no second largest'
    : secondLargest;
}
