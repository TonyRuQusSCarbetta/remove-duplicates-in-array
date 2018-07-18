//remove duplicates in an array
let array = [1, 2, 5, 2, 1, 8];
let newArray = [];

for (let i = 0; i < array.length; i++) {
  if ( newArray.indexOf(array[i]) === -1) {
    newArray.push(array[i])
  }
}
console.log(newArray);

//CODE EXPLANATION:
//we create an array in a variable
// we create an empty array in a variable so that we can push to it later.
// we create a for loop with a local variable of i = 0; and i is less than the length of our array, than add to i each time.
// create an if statement that checks if the index of our newArray already has what is being passed (which is array[i])
//when you call indexOf() and you can't find it, it usually equals -1... this is why we check if what is being passed into newArray is equal to -1.
// lastly, we push the unused value into our newArray












// function find_duplicate_in_array(arra1) {
//   var i,
//   len=arra1.length,
//   result = [],
//   obj = {};
//   for (i=0; i<len; i++)
//   {
//   obj[arra1[i]]=0;
//   }
//   for (i in obj) {
//   result.push(i);
//   }
//   return result;
//   }
// var arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
// console.log(find_duplicate_in_array(arr));

// var myArray = [1, 2, 3, 3, 4, 5];
//
// function findDuplicate(array) {
//   for (var i=0; i=array.length; i++) {
//     console.log(array[1])
//   }
// }
//
// findDuplicate(myArray);
// var array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }

//https://www.thepolyglotdeveloper.com/2015/02/calculate-duplicates-exist-array-using-javascript/
//https://www.youtube.com/watch?v=C2uoUanIixE
// var method1 = function(a) {
//     for(var i = 0; i <= a.length; i++) {
//         for(var j = i; j <= a.length; j++) {
//             if(i != j && a[i] == a[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
