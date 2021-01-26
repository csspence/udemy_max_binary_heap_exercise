/*
Udemy JavaScript Algorithms and Data Structures Masterclass --- Heaps

Heaps are a kind of tree.
Will do min and max heaps.
What is a binary heap?  Similar to BST, but there is no order to the left or right  The rule is that the children must be smaller than the parents.  Each parent has a most two children.
Binary heaps should be as compact as possible.  Every left and right should be filled before moving down another level.
There is no implied relationship between the siblings other than the fact that they are smaller than their parent.
Binary heaps are used to implement priority queues and traverse graphs.
The left child gets added first.

You can store a binary heap in an array.
For any index of an array n...
The left child is stored at 2n + 1
The right child is at 2n + 2

To find a parent of a child node at index n...
It's parent is at index (n-1)/2 floored
*/

new class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    const bubbleUp = (index) => {
      
    }
    this.values.push(value);
    if(this.values.length > 1) {
      bubbleUp(this.values[this.values.length - 1]);
    }
    return this.values;
  }
}