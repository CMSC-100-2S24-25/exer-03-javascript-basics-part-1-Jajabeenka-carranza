function validatePassword(x, y) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    //check if x and y are string
    if (typeof(x) == "string" && typeof(y) == "string") {
        //check if equal
        if(x == y) {
            //check if at least 8 characters
            if (x.length >= 8 && y.length >= 8) {
                //check if has number
                if (numbers.some(check => x.includes(check))) {
                    //check if it has lowercase
                    if (lowerCase.some(check => x.includes(check))) {
                        //check if it has uppercase
                        if (upperCase.some(check => x.includes(check))) {
                            return true
                        }
                        else {
                            return false
                        }
                    }
                    else {
                        return false
                    }
                }
                else {
                    return false
                }
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
    else {
        return false
    x, y} {

}
}

function reversePassword(x, y) {
    if (typeof(x) == "string" && typeof(y) == "string") {

    }
}

console.log(validatePassword("Xasdasdasdasdadadadasda1", "Xasdasdasdasdadadadasda1"))

//References
//https://stackoverflow.com/questions/37896484/multiple-conditions-for-javascript-includes-method