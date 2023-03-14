import fs from 'fs/promises'
import {groupByRatio as _groupByRatio, groupsLengths as _groupsLengths} from './src/process-sequences.js'

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
*/
async function groupsLengths(groupsPath, lengthsPath) {
    const groups = JSON.parse(await fs.readFile(groupsPath, 'utf8'))

    const lengths = _groupsLengths(groups)

    await fs.writeFile(lengthsPath, JSON.stringify(lengths, null, 2))
}

export {groupByRatio, groupsLengths}