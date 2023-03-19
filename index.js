import fs from 'fs/promises'
import {groupByRatio as _groupByRatio, groupsLengths as _groupsLengths, randomFromGroups as _randomFromGroups} from './src/process-sequences.js'

/**
 * @param {String} sequencesPath relative pathname to a JSON-formatted file containing sequences
 * @param {String} groupedPath relative pathname to the output file
 * @description reads given file, groups the sequences in it into groups and writes those in JSON to a file
*/
async function groupByRatio(sequencesPath, groupedPath) {
    const sequences = JSON.parse(await fs.readFile(sequencesPath, 'utf8'))

    const groups = _groupByRatio(sequences)

    await fs.writeFile(groupedPath, JSON.stringify(groups, null, 2))
}

/**
 * @param {String} groupsLengths relative pathname to grouped sequences file
 * @param {String} lengthsPath relative pathname to the output file
 * @description reads groups from a file; writes the lengths of the groups to a file
*/
async function groupsLengths(groupsPath, lengthsPath) {
    const groups = JSON.parse(await fs.readFile(groupsPath, 'utf8'))

    const lengths = _groupsLengths(groups)

    await fs.writeFile(lengthsPath, JSON.stringify(lengths, null, 2))
}

/**
 * @param {String} groupsPath relative pathname to groups file
 * @param {String} randomPath relative pathname to output file
 * @description picks random thousand sequences from each group or the entire group if smaller than a thousand
*/
async function randomFromGroups(groupsPath, randomPath) {
    const groups = JSON.parse(await fs.readFile(groupsPath, 'utf8'))

    const randomGroups = _randomFromGroups(groups)

    await fs.writeFile(randomPath, JSON.stringify(randomGroups, null, 2))
}

/**
 * @param {String} sequencesPath relative pathname to the file with sequences
 * @param {String} groupsPath relative pathname to the output file
 * @description reads the sequences from the file, groups them and picks a random thousand from each group and writes the result to a file
*/
async function randomGroups(sequencesPath, groupsPath) {
    const sequences = JSON.parse(await fs.readFile(sequencesPath, 'utf8'))
    const groups = _groupByRatio(sequences)
    const randomSequences = _randomFromGroups(groups)
    
    await fs.writeFile(groupsPath, JSON.stringify(randomSequences, null, 2))
}

export {groupByRatio, groupsLengths, randomFromGroups, randomGroups}