class DynamicArray {

  constructor(defaultSize = 4) {

    this.length = 0;
    this.data = [];
    this.data.length = defaultSize;
    this.capacity = defaultSize;
  }

  read(index) {

    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize(); // Double the array size if it's full
    }

    this.data[this.length] = val
    this.length++;
  }


  pop() {
    if(this.length > 0){
      const poppedElement = this.data[this.length-1]
    this.length--;
   return  poppedElement ;}
   else{
    return undefined;
   }
    
  }

  shift() {
    // Check if the array is not empty
    if (this.length > 0) {
      // Remove the first element from the array
      const shiftedElement = this.data[0];

      // Shift the remaining elements to the left
      for (let i = 0; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }

      this.length--;

      // Check if the array needs to be resized (shrink)
      
      return shiftedElement;
  } else{
    return undefined;
  }
}
  unshift(val) {
    if (this.length === this.capacity) {
      this.resize(); // Double the array size if it's full
    }
    this.length++
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i -1]
    }
    this.data[0] = val;
    // Your code here
  }

  indexOf(val) {

    for(let i = 0; i < this.length ; i++){
      if(this.data[i] === val){
        return i;
      }
    }
    return -1
  }

  resize() {

   
    this.capacity *= 2;
    const newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    this.data = newData;
  }

}


module.exports = DynamicArray;