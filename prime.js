function primenumber(n){
  let count=0;
  for(let i=2;i<Math.sqrt(n);i++){
    if(n%i==0){
      count++;
    }
  }
if(count==0){
    console.log(n,"prime number")
  }
  else{
    console.log(n,"number is not prime")
  }
}


// copy

function primenumber(n){
  let count=0;
  for(let i=2;i<Math.sqrt(n);i++){
    if(n%i==0){
      count++;
    }
  }
if(count==0){
    console.log(n,"prime number")
  }
  else{
    console.log(n,"number is not prime")
  }
}