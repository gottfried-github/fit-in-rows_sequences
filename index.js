import fs from 'fs/promises'
import {groupByRatio} from './src/process-sequences.js'

/**
 * @param {String} sequencesPath relative path to a JSON-formatted file containing sequences
 * @param {String} groupPrefix relative pathname including filename prefix for a group. Group's ratio will be appended
 * @param {String} groupSuffix filename suffix for a group. This will be appended to the filename of a group. E.g., an extension.
 * @description read given file, groups the sequences in it into groups and writes each group into a separate file
*/
async function groupByRatio(sequencesPath, groupPrefix, groupSuffix) {
    const sequences = JSON.parse(await fs.readFile(sequencesPath, 'utf8'))

    const groups = groupByRatio(sequences)

    for (const [i, group] of groups.entries()) {
        await fs.writeFile(`${groupPrefix}${i}${groupSuffix}`, JSON.stringify(group, null, 2))
    }
}

async function groupByRatio18() {
    await groupByRatio('sequences18.json', 'sequences18-group', '.json')
}

export {groupByRatio, groupByRatio18}