import fs from 'fs/promises'
import {groupByRatio as _groupByRatio} from './src/process-sequences.js'

/**
 * @param {String} sequencesPath relative path to a JSON-formatted file containing sequences
 * @param {String} groupedPath relative pathname to the output file
 * @description reads given file, groups the sequences in it into groups and writes those in JSON to a file
*/
async function groupByRatio(sequencesPath, groupedPath) {
    const sequences = JSON.parse(await fs.readFile(sequencesPath, 'utf8'))

    const groups = _groupByRatio(sequences)

    await fs.writeFile(groupedPath, JSON.stringify(groups, null, 2))
}

export {groupByRatio}