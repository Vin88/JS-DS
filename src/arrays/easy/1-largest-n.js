console.log('************');
console.log('find largest element in the array');
console.log('************');

function findLargest(ipArr) {
  console.log('****** Brute force method ******');
  console.log(' sort the array and print the last element');

  console.log('****** Optimal solution ******');
  console.log('Time complexity: o(n)');
  let largest = ipArr[0];
  for (let i = 1; i < ipArr.length; i++) {
    largest = Math.max(largest, ipArr[i]);
  }
  return largest;
}
