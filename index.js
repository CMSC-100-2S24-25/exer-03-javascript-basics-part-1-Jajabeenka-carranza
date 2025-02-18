function validatePassword(x, y) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    } 
}

function reversePassword(x) {
    if (typeof(x) == "string") {
        let orig = x.split("");
        let reversed = [];
        let i = orig.length - 1;
        while (i >= 0) {
            reversed.push(orig[i]);
            i--;
        }
        //remove all ","
        let result = reversed.toString().split(",").join("");
        return result;
    }
    else {
        return "Not a string";
    }
}

function storePassword(name, pass1, pass2) {
    let newPass;
    if (validatePassword(pass1, pass1)) {
        newPass = reversePassword(pass1);;
    }
    else {
        newPass = pass1;
    }

    const user = {
        name: name,
        pass: newPass
    }

    return user;
}

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));

// console.log(validatePassword("Xasdasdasdasdadadadasda1", "Xasdasdasdasdadadadasda1"))
// console.log(reversePassword("String"))

//References
//https://stackoverflow.com/questions/37896484/multiple-conditions-for-javascript-includes-method