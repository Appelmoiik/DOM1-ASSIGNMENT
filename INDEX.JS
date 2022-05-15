//NUMBER 1
for (i=1; i<=100; i++){
  
    if(i%2==0){
      console.log(i)
    }
    
  }


// NUMBER 2

const getEvenNumbers = (inputs) => inputs.filter( x => x % 2 === 0 );

console.log(getEvenNumbers([3, 6]))

//NUMBER 3
//ALL OF THE ABOVE

//NUMBER 4
function firstfunction(a,b){
    return a+b
  }
  c=firstfunction(5,6)
  console.log(c)

  //NUMBER 5
  function printSum(a,b){
    c=a+b
    console.log(c)
   
  }
  printSum(4,5)

  // NUMBER 6
  function names(){
    c=["john", "james", "ada", "rita", "eze", "tony", "caro", "kalu", "ese", "edet"]
    console.log(c)
  }
  names()

  //NUMBER 7
  let F=[1,2,4]
//Adding element
     F.push(3)

// NUMBER 8
let E=[1,2,3,8]
//Removing Element
     E.pop(3)

// NUMBER 9
let A= [23.77,80,45]
//Removing first element
A.splice(0,1)

//NUMBER 10
let D= [[20,30,80],[10,50,55]]
// Adding an element to the beginning of the array
let c= D[0]; c.unshift(90)
// 90 added

  