function happyNum(number) {
    var count = 0;
    var inital = number;
    while (count < 10) {
        var answer = 0;
        for (i = 0; i < number.toString(10).length; i++) {
            var sqr = 0;
            var digit = 0;
            digit =  number.toString(10).charAt(i);
            sqr = digit * digit;
            answer += sqr;
        }
        number = answer;
        if (number === 1) { 
            //console.log(inital + " is a happy number");
            return "Happy Number";}
        count++;
    }
    //console.log(inital + " is not happy number");
    return "Unhappy Number";
}