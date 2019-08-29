const arr1 = [9, 3, 7, 5, 6, 4, 8, 2];
const arr2 = [38, 27, 43, 3, 9, 82, 10];

class MergeSort {
  constructor(arr) {
    this.arr = arr || [];
  }
  /**
   * 
   * @param {*starting position of a left half of an array} leftBorder 
   * @param {*divider(mid) position of an array} mid 
   * @param {*end position of a right half of an array } rightBorder 
   */
  merge(leftBorder, mid, rightBorder) {
    const L = this.arr.slice(leftBorder, mid + 1); // create a copy of a left half of an Array
    const R = this.arr.slice(mid + 1, rightBorder + 1); // create a copy of a right part of an Array
    const leftHalfLength = L.length;
    const rightHalfLength = R.length;

    let l = 0; 
    let r = 0; 
    let k = leftBorder;
    
    /**
     * we will loop through both halves of an array comparing 2 elements with a current index from both
     * if an element form the left half is lesser than the one from the right half
     * we will put an element from the left half to resulting array on a current position [k] and increment 
     * left half index by 1 [l++], and vice versa until one of the subArrays is empty
     */
    while (l < leftHalfLength && r < rightHalfLength) {
      if(L[l] <= R[r]) {
        this.arr[k] = L[l++]
      } else {
        this.arr[k] = R[r++];
      }

      k += 1;
    }

    /**
     * if there are still some elements left in one of the subArrays(halves), we will loop through each of them
     * and put current element to a resulting array current position and increment both indexes of a resulting array [k++]
     * and for either subArray indexes [l++]/[r++]
     */
    while(l < leftHalfLength) {
      this.arr[k++] = L[l++];
    }

    while(r < rightHalfLength) {
      this.arr[k++] = R[r++]
    }

  }
  /**
   * 
   * @param {starting position of an array} leftPart 
   * @param {end position of an array} rightPart 
   */
  sort(leftPart, rightPart) {
    /**
     * recursively repeat until there is only single element within an array
     */
    if(leftPart < rightPart) {

      const mid = Math.floor((rightPart + leftPart) / 2); // find a mid position of an array
  
      this.sort(leftPart, mid); // divide an array's left part 
      this.sort(mid + 1, rightPart); // divide an array's right part
      this.merge(leftPart, mid, rightPart); // merge two halves of an array into one
    }
  }

  getSortedArr() {
    this.sort(0, this.arr.length - 1); // initial call of a sort method

    return this.arr;
  }
}

const mergeSort1 = new MergeSort(arr1);
const sorted1 = mergeSort1.getSortedArr();

console.log(sorted1);
