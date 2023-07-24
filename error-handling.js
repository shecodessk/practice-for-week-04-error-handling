/*// 1.
function sum(array) {

  if(!Array.isArray(array)) {
    throw new Error("this is not an array!");
  } else{
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
  }
 
}
let res = sum(null);
//console.log(res);
//----------------------------------//
try{
  console.log(res)
}catch(error){
  console.error(`Wrong Type: ${error.message}`)}




// 2.

const sayName = (name) =>{
  if(typeof name === 'string'){console.log(name)}
  else{
    throw Error("Invalid name! Must be a string!")
  }
}



//----------------------------------//
try{
  sayName("Alex");
  sayName(1);
}catch(error){

    console.error(`TypeError ${error.message}`)

 }
*/

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  console.log(greet())
}catch(e){
  console.log("Hello World!")
}