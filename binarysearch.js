let arr = [1,3,5,7,9,10];

let x = 5;
let binSearch = function (arr, x, start, end) {
    if (start > end) return false;
    
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) {
        console.log('********')
        return true; 
    }
    
    if (arr[mid] > x) // x is before this pos
    {
        console.log('>>')
       return binSearch(arr, x, start, mid - 1);
    } else {
        console.log('<<')
       return binSearch(arr, x, mid + 1, end);
    }
}

let res = binSearch(arr, 7, 0, arr.length -1)
console.log(res);