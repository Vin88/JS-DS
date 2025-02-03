function implMergeSort(ip, low, high) {
  if (low == high) return ip;
  let mid = Math.floor((low + high) / 2);

  implMergeSort(ip, low, mid);
  implMergeSort(ip, mid + 1, high);
  mergeArr(ip, low, mid, high);
}

function mergeArr(ip, low, mid, high) {
  let left = low;
  let right = mid + 1;
  let result = [];
  while (left <= mid && right <= high) {
    if (ip[left] < ip[right]) {
      result.push(ip[left]);
      left++;
    } else {
      result.push(ip[right]);
      right++;
    }
  }
  if (left <= mid) {
    result = [...result, ...ip.slice(left, mid + 1)];
  }
  if (right <= high) {
    result = [...result, ...ip.slice(right, high + 1)];
  }
  for (let i in result) {
    ip[low + parseInt(i)] = result[i];
  }
  return ip;
}

console.log('**************** \n');
console.log('Merge Sort');
console.log('Time complexity---O(N log  N)');
const ip = [5, 1, 7, 3, 2];
console.log('Before ----->', ip);
const result = implMergeSort(ip, 0, ip.length - 1);
console.log('After ----->', ip);
console.log('\n **************** ');
