/**
 * @param {Array} sequences array of `sequence`s of length > 100
 * @returns {Array} a hundred random sequences from the given ones
*/
function hundredRandomSequences(sequences) {
    const numbers = hundredUniqueRandomNumbers(sequences.length)

    return numbers.map(n => sequences[n])
}

/**
 * @param {Number} maximum a number above 100
 * @returns a hundred unique numbers below given maximum
*/
function hundredUniqueRandomNumbers(maximum) {
    const numbers = []

    while (numbers.length < 101) {
        const n = Math.floor(Math.random() * maximum+1)
        
        if (numbers.includes(n)) continue

        numbers.push(n)
    }

    return numbers
}

export {
    hundredRandomSequences, hundredUniqueRandomNumbers
}