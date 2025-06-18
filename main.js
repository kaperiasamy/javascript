const arr = ['a', 'b', 'c', 'd', 'e'];

arr[Symbol.iterator] = function () {
    let i = 0;
    let arr = this;
    return {
        next: function() {
            if (i < arr.length) {
                let value = arr[i];
                i++; // skips one element (every second one)
                return { value , done: false };  
            } else {
                return { done: true };
            }
        }
    };
}

// Store the iterator in a variable
const it = arr[Symbol.iterator]();
// Use the iterator to get values
console.log(it.next()); // { value: 'a', done: false }
console.log(it.next()); // { value: 'b', done: false }
console.log(it.next()); // { value: 'c', done: false }
console.log(it.next()); // { value: 'd', done: false  }
console.log(it.next()); // { value: 'e', done: false  }
console.log(it.next()); // { done: true }