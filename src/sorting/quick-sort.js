function implQuickSort(ip, low, high) {
    
    if (high > low) {
        let partition = fPartition(ip, low, high);
        implQuickSort(ip, low, partition - 1);
        implQuickSort(ip, partition + 1, high);
    }
    return ip;
}
function fPartition(ip, low, high) {
    const pivot = ip[low];
    let i = low;
    let j = high;
    while ( i < j) {
        while (ip[i] <= pivot && i <= high) {
            i++;
        }

        while (ip[j] >= pivot && j >= low) {
            j--;
        }
        if (i < j) {
            swap(ip, i , j);
        }
        
    }
    swap(ip, low , j);
    return j;
}

function swap(ip, i , j) {
    const temp = ip[i];
    ip[i] = ip[j];
    ip[j] = temp;
    return temp;
}

console.log('**************** \n');
console.log('Quick Sort');
console.log('Time complexity Best --- O(NLog(N))');
const ip = [45, 2, 6, 12, 9];
const result = implQuickSort(ip, 0 , ip.length - 1);
console.log(result);
console.log('\n **************** ');