//Basic calculator project
function cube(n){
    return n * n * n;
}

function squareroot(n){
    //Returns the square root of the number n. If n < 0, 
    //then return the string NAN (Not A Number)
    
    if (n < 0){
        return "NAN";
    }
    else {
        return Math.sqrt(n);
    }
}

function negate(n){
    //Return the negative value of the argument 'n'.
    return n * -1;
}
function factorial(n){
    /*Return n factorial
    The factorial of anything <= 1 is 1.
    The factorial of any integer greater than 1 is the product of all
    the integers from 1 to the number itself. For example,
    4 factorial = 1 x 2 x 3 x 4 = 24.*/
    
  var ans = 1;
  if (n <= 1){
    return ans;
  }
  else {
    for (var i = 1; i <= n; i++){
      ans = ans * i;
    }
    return ans;
  }
}
