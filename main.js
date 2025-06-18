const arr = ['a', 'b', 'c', 'd', 'e'];

arr[Symbol.iterator] = function () {
    let i = 0;
    let arr = this;
    return {
        next: function() {
            if (i < arr.length) {
                const value = arr[i++];
                i++;
                return { value , done: false };  
            } else {
                return { done: true };
            }
        }
    };
}

console.log(arr[Symbol.iterator]().next()); // { value: 'a', done: false }
console.log(arr[Symbol.iterator]().next()); // { value: 'c', done: false }
console.log(arr[Symbol.iterator]().next()); // { value: 'e', done: false }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }
console.log(arr[Symbol.iterator]().next()); // { done: true }  