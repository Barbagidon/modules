delete dubles


let x = [1, 2, 3, 4, 4, 4, 5, 667777, 8, 8, 8, 8, 9, 9, 9, 333, 522];
let y = [...new Set(x)];
console.log(y)
