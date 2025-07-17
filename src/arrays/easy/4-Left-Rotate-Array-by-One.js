/** Brute force method */
function leftRotateArrayByN(inputArr, N) {
  const splicedArr = inputArr.splice(0, N);
  inputArr.push(...splicedArr);
  return inputArr;
}
function leftRotateArrayByOne(inputArr, N) {
  let tempArr = new Array(N);
  for (let i = 1; i < n; i++) {
    tempArr[i - 1] = inputArr[i];
  }
  tempArr[N - 1] = inputArr[0];
  return tempArr;
}

// Optimal solution

function leftRotateArrayByOne(inputArr) {
  let tempArr = inputArr[0];
  for (let i = 0; i < N - 1; i++) {
    inputArr[i] = inputArr[i + 1];
  }
  inputArr[N - 1] = tempArr;
  return inputArr;
}

console.log(leftRotateArrayByN([1, 2, 3, 4, 5], 1));

console.log(leftRotateArrayByN([1, 2, 3, 4, 5], 2));
