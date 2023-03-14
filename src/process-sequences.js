/**
 * @param {Array} sequence array of `item`s
 * @returns {Number} an integer specifying the number of wide items in the sequence
*/
function countWideItems(sequence) {
    const wideItems = []

    for (const item of sequence) {
        if (2 === item) wideItems.push(item)
    }

    return wideItems.length
}

/**
 * @param {Array} sequences `sequence`s
 * @returns {[Array]} each array in the array contains sequences of one and the same ratio of wide `item`s to narrow ones
*/
function groupByRatio(sequences) {
    const groups = []

    for (const sequence of sequences) {
        const wideItems = countWideItems(sequence)
        
        if (!groups[wideItems]) groups[wideItems] = []

        groups[wideItems].push(sequence)
    }

    return groups
}

function groupsLengths(groups) {
    return groups.map(group => group.length)
}

/**
 * @param {Array} groups
 * @returns a hundred random sequences from each group or the entire group if less than 100
 * */ 
function randomFromGroups(groups) {
    return groups.map(group => {
        if (group.length < 100) return group

        return hundredRandomSequences(group)
    })
}

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

}

export {groupByRatio, groupsLengths}