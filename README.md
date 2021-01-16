# algorithms-study
:hammer: A deep study about the most famous algorithms with help of Javascript

## Fundamentals

Below you can see some basic ideas of algorithms and data structures (per example algorithm analysis).

### Bags, Queues and Stacks

These are the most famous data structures used in lot of applications to help solving many issues related to dealing with data.

- [**Bags:**](./algorithms/fundamentals/bags/Bag.js) A bag is a collection where removing items is not supported. Its purpose is to provide clients the ability to collect items and then to iterate through them. The order of iteration is unspecified and should be immaterial to the client.

- [**FIFO Queues:**](./algorithms/fundamentals/queues/FIFOQueue.js) A FIFO queue is a collection based on the first-in-first-out (FIFO) policy. So, it means we use it to do tasks in the same order that they arrive.

- [**Pushdown Stacks:**](./algorithms/fundamentals/stacks/PushdownStack.js) A pushdown stack is a collection that is based on the last-in-first-out (LIFO) policy. So, it means we use it to do tasks taking always the top item of the collection.

- [**Fixed-capacity Stacks:**](./algorithms/fundamentals/stacks/FixedCapacityStack.js) A fixed-capacity stack is a pushdown stack with items limiting.

- [**Linked Lists:**](./algorithms/fundamentals/lists/LinkedList.js) A linked list is a recursive data structure that is either empty or a reference to a node having a generic item and a reference to a linked list (a node is any kind of data that refers another node recursively).

### WIP: Analysis of Algorithms
...

## Sorting

Below you can see some of the famous methods of sorting values.

### Elementary Sorts

The elementary sorts are the basic ones that work by the idea of going from left to right on the array while sorting it.

- [**Selection Sort:**](./algorithms/sorting/elementary-sorts/SelectionSort.js) Selection sort works as follows: First, find the smallest item in the array and exchange it with the first entry, then, find the next smallest item and exchange it with the second entry and continue doing that till the entire array is sorted.

- [**Insertion Sort:**](./algorithms/sorting/elementary-sorts/InsertionSort.js) Insertion sort goes from the left side array to the right, that way the left side is being sorted and the array gets fully sorted when we get to the last array item.

### Mergesort

The merge sorts are the ones with the idea of breaking the array down into multiple sub-arrays while sorting it.

- [**Top-down Mergesort:**](./algorithms/sorting/mergesort/TopDownMergesort.js) Top-down mergesort is a recursive implementation that turn an array into sub-arrays (recursively), then order all the sub-arrays and finally merge them to the final ordered array.

- [**Bottom-up Mergesort:**](./algorithms/sorting/mergesort/BottomUpMergesort.js) Bottom-up mergesort works with recursive calls as follows: First, start by doing a pass of 1-by-1 merges, then a pass of 2-by-2 merges and keep doing that till the array is fully sorted.

### Quicksort

The quicksort is a popular implementation of sorting since it is easy to do, fast and works well for the most kinds of input data.

- [**Quicksort:**](./algorithms/sorting/quicksort/QuickSort.js) The basic idea of quicksort is to breakdown the array into 2 arrays while sorting them independently in a recursive way (by putting a value in the correct position among all the other values).

### Priority Queues

Many applications require processing items on demand by taking the one with the largest key per example (without getting all the items sorted at once). In order to do that, we can assign priority to events always choosing to process next the highest-priority event.
