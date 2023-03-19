import permutations from 'permutationsjs'

function sequences(length) {
    const sequences = []

    permutations([1,2], length, false, permutation => sequences.push(permutation))

    return sequences
}

export {sequences}