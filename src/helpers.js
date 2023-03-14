/**
 * @param {Array} sequences array of `sequence`s of length > 1000
 * @returns {Array} a thousand random sequences from the given ones
*/
function thousandRandomSequences(sequences) {
    const numbers = uniqueRandomNumbers(1000, sequences.length)

    return numbers.map(n => sequences[n])
}

/**
 * @param {Number} number how many unique numbers to generate: must be smaller than `maximum`
 * @param {Number} maximum the maximal number to generate: must be larger than `number`
 * @returns a given number of unique random numbers below given maximum
*/
function uniqueRandomNumbers(number, maximum) {
    const numbers = []

    while (numbers.length < number) {
        const n = Math.floor(Math.random() * maximum+1)
        
        if (numbers.includes(n)) continue

        numbers.push(n)
    }

    return numbers
}

export {
    thousandRandomSequences, uniqueRandomNumbers
}