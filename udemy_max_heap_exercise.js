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

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp () {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if(element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax () {
    let finalIdx = this.values.length - 1;
    let firstIdx = 0;
    let placeHolder = this.values[finalIdx];
    this.values[finalIdx] = this.values[firstIdx];
    this.values[firstIdx] = placeHolder;
    placeHolder = this.values[finalIdx];
    this.values.pop();
    this.bubbleDown();
    return placeHolder;
  }

  bubbleDown () {
    let idx = 0;
    let parent = this.values[idx];
    let placeHolder;
    const swapper = (idx1, idx2) => {
      placeHolder = idx1;
      idx1 = idx2;
      idx2 = placeHolder;
    }
    while(idx < this.values.length - 1) {
      let leftIdx = 2 * (idx + 1); 
      let rightIdx = 2 * (idx + 2);
      let leftChild = this.values[leftIdx];
      let rightChild = this.values[rightIdx];
      if(leftChild > parent && rightChild < parent) {
        swapper(leftChild, parent);
        idx = leftIdx;
      } else if(rightChild > parent && leftChild < parent) {
        swapper(rightChild, parent);
        idx = rightIdx;
      } else if(rightChild > parent && leftChild > parent) {
        if(rightChild > leftChild) {
          swapper(rightChild, parent);
          idx = rightIdx;
        }
        if(leftChild > rightChild) {
          swapper(leftChild, parent);
          idx = leftIdx;
        }
      } else {
        break;
      }
    }
  }
  
}

// let test = new MaxBinaryHeap;
// test.insert(100);
// test.insert(75);
// test.insert(80);
// test.insert(90);
// test.insert(95);
// test.insert(125);
// console.log(test.values);
// test.extractMax();
// console.log(test.values);