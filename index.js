//Q1.Implement Binary Search ?
function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            
            start = middle + 1;
        } else {
            
            end = middle - 1;
        }
    }
	
    return -1;
}
//Q2.Implement Merge Sort
function merge(left, right) {
    let arr = []
   
    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    
    return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  
  
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
//Q3.Implement Quick Sort
function partition(arr, start, end){
   
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        
        pivotIndex++;
        }
    }
    
    
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};
function quickSortRecursive(arr, start, end) {
    
    if (start >= end) {
        return;
    }
    

    let index = partition(arr, start, end);
    
    
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
//Q4.Implement insertion Sort
function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            
            let current = inputArr[i];
            
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
//Q5.Write a program to sort list of strings (similar to that of dictionary)

var string = prompt("Please enter a string");
var stringArray=string.split(' ');
stringArray.sort();
console.log(string);
console.log(stringArray);
console.log(stringArray.join(' '));