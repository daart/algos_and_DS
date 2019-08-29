def insertionSort(arr):
  #
  ## - we'll start looping through an array from the 2nd element (that has indice 1 arr[1]) 
  ## - currentIndice is an indice of a current element of array
  ## - prevIndice is an indice of a previous element:== currentIndice - 1
  #

  for currentIndice in range(1, len(arr)):
    currentVal = arr[currentIndice] # - we need a temporary storage of a current array value, for later swap array elements operation
    prevIndice = currentIndice - 1 #- on each new iteration we will create a new indice counter of a previous element

    ## - we're going to check if prevIndice is NOT out of array indice range and that currentVal 
    ## is lesser than the previous value (currentVal < arr[prev]) [for ascending order sort];
    ## - if those 2 conditions are true - we'll perform swap of 2 elements until the element with a lowest value
    ##  is on the leftmost part of an array;
    while prevIndice >= 0 and currentVal < arr[prevIndice]:
      arr[prevIndice + 1] = arr[prevIndice]
      prevIndice -= 1
    arr[prevIndice + 1] = currentVal
  return arr

arr1 = [9, 3, 7, 5, 6, 4, 8, 2]
arr2 = [38, 27, 43, 3, 9, 82, 10]

sorted1 = insertionSort(arr1)
sorted2 = insertionSort(arr2)
print(sorted1)
print(sorted2)
