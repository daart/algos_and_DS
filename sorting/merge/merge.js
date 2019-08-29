const arr1 = [9, 3, 7, 5, 6, 4, 8, 2];
const arr2 = [38, 27, 43, 3, 9, 82, 10];

class MergeSort {
  constructor(arr) {
    this.arr = arr || [];
  }

  merge(leftBorder, mid, rightBorder) {
  
    const L = this.arr.slice(leftBorder, mid + 1);
    const R = this.arr.slice(mid + 1);
    
    // console.log('leftBord:== ', leftBorder, ' mid:== ', mid, ' rightBord:== ', rightBorder);
    console.log('mid:== ', mid, ' L[]:= ', L, ' R[]:== ', R);
  }

  sort(leftPart, rightPart) {
    if(leftPart < rightPart) {
      const mid = leftPart + (rightPart - 1) / 2;
  
      this.sort(leftPart, mid);
      this.sort(mid + 1, rightPart);
      this.merge(leftPart, mid, rightPart);
    }
  }

  getSortedArr() {
    return this.arr;
  }
}

const merge = (arr, leftBorder, mid, rightBorder) => {
  
  const L = arr.slice(leftBorder, mid + 1);
  const R = arr.slice(mid + 1, rightBorder + 1);

  console.log('leftBord:== ', leftBorder, ' mid:== ', mid, ' rightBord:== ', rightBorder);
  console.log('mid:== ', mid, ' L[]:= ', L, ' R[]:== ', R);

  let i = j = 0, k = leftBorder;

  while(i < L.length && j < R.length) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i += 1;
    } else {
      arr[k] = R[j];
      j += 1;
    }

    k += 1;
  }

  while(i < L.length) {
    arr[k++] = L[i++];
  }

  while(j < R.length) {
    arr[k++] = R[j++]
  }

}

const sort = (arr, leftPart, rightPart) => {
  if(leftPart < rightPart) {
    const mid = Math.floor((rightPart + leftPart) / 2);

    sort(arr, leftPart, mid);
    sort(arr, mid + 1, rightPart);
    merge(arr, leftPart, mid, rightPart);

  }

  return arr;
}

const mergeSort1 = new MergeSort(arr1);


const sortedArr1 = sort(arr1, 0, arr1.length - 1);
const sortedArr2 = sort(arr2, 0, arr2.length - 1);
// const sorted1 = mergeSort1.sort(0, arr1.length - 1);

console.log(sortedArr1);
console.log(sortedArr2);
// console.log(sorted1);
