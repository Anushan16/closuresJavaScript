
function bigOperation(index){
  const bigArr = new Array(5000).fill('☺️')
  console.log (" A new array was created in memory")
  
  return bigArr[index]
}

// When the following code is executed, we see that a new array is created in memory each time the function is invoked
bigOperation(323)
bigOperation(33)
bigOperation(3230)
bigOperation(553)

// with closure

function bigOperationWithClosure(){
  const bigArr = new Array(5000).fill('☺️')
  console.log("\n Again, a new array is created in memory")
  return function(index) {
    return bigArr[index]
  }
}

const test = bigOperationWithClosure()

// despite the function being invoked multiple times, we see the new array is only created once 
test(343)
test(3430)
test(3)
test(89)