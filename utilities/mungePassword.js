const translator = {
    A: '4',
    B: '6',
    C: 'c',
    D: 'd',
    E: '3',
    F: '7',
    G: 'g',
    H: '#',
    I: '!',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: '0',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: '$',
    T: '7',
    U: 'u',
    V: 'v',
    W: 'w',
    X: '*', 
    Y: 'y',
    Z: '2'
}
const capitol = /[A-Z]/
const numbers = /[abefotz]/
const symbols = /[hisx]/

const mungePassword = (passPhrase, hasNumbers, hasSymbols) => {

    return passPhrase.join('').split('').map(letter => {
        if (capitol.test(letter)) {
            return letter
        } else if (!hasNumbers && numbers.test(letter)) {
            return letter
        } else if (!hasSymbols && symbols.test(letter)) {
            return letter
        } else {
            return translator[letter.toUpperCase()]
        }
        }).join('')
}

module.exports = mungePassword

// console.log(mungePassword(['we', 'are', 'drink', 'rum', 'like', 'pirates']))