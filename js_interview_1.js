// =========================================================
//1. Remove falsy values from any array
// =======================================================
let miscellaneous = ['🍎', false, '🍊', NaN, 0, undefined, '🌶️', null, '', '🥭'];

// Remove falsy values using Bolean() function 
console.log(miscellaneous.filter(Boolean)); // [ '🍎', '🍊', '🌶️', '🥭' ]

// how to works Boolean()
console.log(Boolean(12>11)); // true


// ======================================================================
// 2. Convert any value to boolean
// =========================================================================
 
let man  = 'Sakib'
// we can use simple !! before any value 
console.log(!!''); // false
console.log(!!1); // true
console.log(!!0); // false
console.log(!!undefined); // false
// we can also achieve same output using Boolean() 
console.log(Boolean(man));




// ======================================================================
// 3. Resizing any array
// =========================================================================
 
let animals = ["🐕", "🐒", "🦊", "🐅"];
// we can achieve resize any number of output using the size of array length 
animals.length = 3
let human  = [ '👧' , "🍍"]
human.length =1

// ======================================================================
// 4. How to flatten a multidimensional Array 
// =========================================================================
 
let fruits = [ '🍍', '🍎', "🥭" ,['🔯', '🍌']] // two dimensional Array 

let smileys2 = ['🥰', ['😄', '😃', ['🥲', '😑']], '😉'];
console.log( smileys2.reduce((acc,curr) => acc.concat(curr),[] )) // only solve two dimensional

//====================flat() method not working all browser 2021==================
// How to flattern a multi-dimensional array
let smileys = ['🥰', ['😄', '😃'], '😉', ['🥲', '😑']];

// We can use array.flat() method to flattern one level array
console.log(smileys.flat()); // ['🥰', '😄', '😃', '😉', '🥲', '😑']

// Multi level array
let smileys2 = ['🥰', ['😄', '😃', ['🥲', '😑']], '😉'];

// We can pass 'Infinity' parameter to array.flat function
console.log(smileys2.flat(Infinity)); // ['🥰', '😄', '😃', '🥲', '😑', '😉']

// ======================================================================
// 5. How to use short conditionals 
// =========================================================================
 
let name = 'Sakib'
console.log(name === 'Sakib' && 'This is correct!'); // when condition is true then use && and otherwise ||
console.log(name === 'akib' || 'This is correct!'); // when condition is true then use && and otherwise ||

// ======================================================================
// 6. How to replace all occurence of string
// =========================================================================
 
let intro = 'my fame is sakib.Fame is very important to introduce someone.'
let introSolve = intro.replace(/fame/ig,'name')  // using regEx /fame/ig method with replace () 😄

console.log(introSolve);
// ======================================================================
// 7. Log values with variable names
// =========================================================================
 
let fName = 'sakib'
let lName ='khan'
console.log({fName,lName});



// ======================================================================
// 8. Know performance of task
// ======================================================================

let startTime = performance.now()
for(let i=0; i<100;i++){
    console.log(i);
}
let endTime = performance.now()
console.log(`The for loop total ${endTime - startTime} consume.`);
