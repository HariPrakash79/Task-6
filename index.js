const aa = (f,s,t) => {
 console.log(f,s,t);
 if(f>s &&f>t){
    console.log(f)}
 else if(s>f && s>t){
    console.log(s)}
 else{
    console.log(t)}
}
aa(1,2,3);



let n = 123;
console.log(add(n));
function add(n)
{
let sum = 10;
const digits = n.toString();
for(var i=0;i<digits.length;i++){
 sum+=parseInt(digits[i])
 }
 return sum;
}




const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function() {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
})();





// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//  for (var i = 0; i < arro.length; i++) { 
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano(arr); 




const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});
console.log(myPrime);




const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = (a, b) => a + b;
const totalSum = num.reduce(sum, 0); 
console.log(totalSum);



// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = k % arr.length; // Correct the calculation of k

// (function() {
//  var out = arr.slice(k + 1, arr.length).concat(arr.slice(0, k + 1));
//  console.log(out);
// })();


// var arr = ["guvi", "geek", "zen", "fullstack"];
// (function() {
//   for (var i = 0; i < arr.length; i++) { 
//     console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//   }
// })();



// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//  console.log(arr[i]);
//  }}
// })();



(function(str){
    str1 = str.split(" ").reverse().join(" ");
    console.log(str1); 
   })("abcd")
   
   

   var res = function(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr; 
  }
  
  var result = res(["guvi", "geek", "guvi", "duplicate", "geeK"]);
  console.log(result);
  


  var array = [
    [
      ["firstname", "vasanth"],
      ["lastname", "Raje"],
      ["age", 24],
      ["role", "JSWizard"]
    ],
    [
      ["firstname", "Sri"],
      ["lastname", "Devi"],
      ["age", 28],
      ["role", "Coder"]
    ]
  ];
  
  var final = [];
  
  while (array.length != 0) {
    var outer_remove = array.shift();
    var new_object = {}; 
  
    while (outer_remove.length != 0) {
      var inner_remove = outer_remove.shift();
      var key = inner_remove[0];
      var value = inner_remove[1];
      new_object[key] = value;
    }
    final.push(new_object);
  }
  
  console.log(final);




  var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function(a, c) {
  if (c % 2 != 0) {
    return a + c;
  }
  return a;
}, 0); 

console.log(s);






aa = data => {
    var a = data;
    var l = '';
    for (i = 0; i < a.length - 1; i += 2) {
      var s = a[i + 1];
      var b = a[i];
      l += s;
      l += b;
    }
    if (a.length % 2 !== 0) {
      l += a[a.length - 1];
    }
    console.log(l);
  }; 
  aa("1234");
  