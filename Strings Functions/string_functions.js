//string functions project
function revers(str) {
    // Accept an input string, str, and reverse its characters in order
    var rev_string ="";
    for (i = str.length-1; i >= 0; i--) {
       rev_string += str.charAt(i);
    }
    return rev_string;
}
function uppercase(str) {
    // Convert all the characters of the input string, str, to upper
    // case. Reurn the uppercased string.
    return str.toUpperCase();
}
function palindrome(str) {
    // Check if the input string, str, is spelled the same forwards
    // as it is spelled backwards.
    // Return "is a palindrome" if it is, or "is not a palindrome" if it is not.
    if (str === revers(str)) return "is a palindrome";
    else return "is not a palindrome";
}