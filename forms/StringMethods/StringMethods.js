let quoteString = "Failure is simply the opportunity to begin again, this time more intelligently."
let upperCaseString = quoteString.toUpperCase()
console.log(upperCaseString)

let authorString = "-Henry Ford"
let completeString = quoteString.concat(authorString)
console.log(`The string in quotesString is: ${completeString}`)

let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. -Stephen King"

let lowerCaseString = secondQuote.toLowerCase()
console.log(`Lower case string is: ${lowerCaseString}`)

console.log(`The charachter location at 3 is ${secondQuote.charAt(2)}`)

let findString = secondQuote.slice(35,120)
console.log(findString)