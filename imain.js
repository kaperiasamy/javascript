const arr = ['a', 'b', 'c', 'd', 'e'];

arr[Symbol.iterator] = function* () {
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