
const arr = [4, 7, 1, 2, 8, 5];
const arr2 = [12, 11, 13, 5, 6];
const arr3 = [119, 160, 390, 947, 604, 251];
const arr4 = [5, 3, 4, 7, 2, 8, 6, 9, 1];
const arr5 = [5, 9, 3, 1, 2, 8, 4, 7];
const arr6 = [5, 3, 1, 9, 8, 2, 4, 7];

function insertionSort(a) {
  let current = 1;

  while (current < a.length) {
    let prev = current - 1;
    const currentVal = a[current];

    while (current >= 0 && currentVal < a[prev]) {
      a[current] = a[prev];
      a[prev] = currentVal;
      prev -= 1;
      current -= 1;
      // arr[prev] = currentVal;
    }

    current += 1
  }

  return a;
}

function bubbleSort(a) {
  for (let current = 0; current < a.length; current += 1) {
      for (let prev = 0; prev < a.length - current - 1; prev++) {
        let temp = a[prev + 1];

        if(a[prev + 1] < a[prev]) {
          a[prev + 1] = a[prev];
          a[prev] = temp;
      }
    }
  }
    
  return a;
}

// const sortedArr1 = insertionSort(arr);
// const sortedArr2 = insertionSort(arr2);
// const sortedArr3 = insertionSort(arr3);
// const sortedArr4 = insertionSort(arr4);

// console.log("arr1: ", sortedArr1);
// console.log("arr2: ", sortedArr2);
// console.log("arr3: ", sortedArr3);
// console.log("arr4: ", sortedArr4);

const sortedArr1 = bubbleSort(arr);
const sortedArr2 = bubbleSort(arr2);
const sortedArr3 = bubbleSort(arr3);
const sortedArr4 = bubbleSort(arr4);
const sortedArr5 = bubbleSort(arr5);
const sortedArr6 = bubbleSort(arr6);

console.log("arr1: ", sortedArr1);
console.log("arr2: ", sortedArr2);
console.log("arr3: ", sortedArr3);
console.log("arr4: ", sortedArr4);
console.log("arr5: ", sortedArr5);
console.log("arr6: ", sortedArr6);