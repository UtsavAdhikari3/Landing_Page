// function add7(number){
//     return number + 7;
// }

// console.log(add7(14));


// function multiply(a,b){
//     return a*b;
// }

// console.log(multiply(2,3))

// function capitalize(str){
//     str = str.toLowerCase();
//     capitalLetter = str[0].toUpperCase();
//     strLength = str.length;
//     return capitalLetter + str.substring(1,strLength)
// }

// console.log(capitalize("HEllO"))


function lastLetter(str){
    strLength = str.length;
    lastAlphabet = str.substring(strLength-1);
    return lastAlphabet;
}

console.log(lastLetter("abc"))