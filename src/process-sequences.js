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

export {groupByRatio, groupsLengths}