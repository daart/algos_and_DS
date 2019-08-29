
def mergeSort(arr):
  """Here we're going to use a single function mergeSort
  
  - We are going to recursively call mergeSort function until there is a single element left in array
  - that will do several steps:
  1) find a mid position of an input array
  2) divide an array into 2 halves: leftHalf L:= arr[: mid] && rightHalf R:= arr[mid:]
  """
  
  if len(arr) > 1:
    mid = (len(arr)) // 2 #fin mid position of an input array
    
    L = arr[: mid] #create a copy of a left half of an input array
    R = arr[mid: ] #create a copy of a left half of an input array
    l = len(L)
    r = len(R)

    mergeSort(L) # call mergeSort for the left half array
    mergeSort(R) # call mergeSort for the right half array

    i = j = k = 0

    while i < l and j < r:
      # if an element from the left half is lesser than the one form the right
      # insert L[i] element to resulting array with current index arr[k] and increment 
      # left half array's index and vice versa for else 
      if L[i] <= R[j]:
        arr[k] = L[i]
        i += 1
      else:
        arr[k] = R[j]
        j += 1

      k += 1
    
    while i < l:
      arr[k] = L[i]
      k += 1
      i += 1

    while j < r:
      arr[k] = R[j]
      k += 1
      j += 1

  return arr 
    
arr1 = [9, 3, 7, 5, 6, 4, 8, 2]
arr2 = [38, 27, 43, 3, 9, 82, 10]

sorted1 = mergeSort(arr1)
print(sorted1)