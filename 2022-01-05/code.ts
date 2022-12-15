import * as _ from "lodash";
import * as path from 'path';
import * as fs from 'fs';

const text = fs.readFileSync(path.join('./2022-01-05/input.txt'), 'utf-8');

function main() {

    //     [M]             [Z]     [V]    
    //     [Z]     [P]     [L]     [Z] [J]
    // [S] [D]     [W]     [W]     [H] [Q]
    // [P] [V] [N] [D]     [P]     [C] [V]
    // [H] [B] [J] [V] [B] [M]     [N] [P]
    // [V] [F] [L] [Z] [C] [S] [P] [S] [G]
    // [F] [J] [M] [G] [R] [R] [H] [R] [L]
    // [G] [G] [G] [N] [V] [V] [T] [Q] [F]
    //  1   2   3   4   5   6   7   8   9 

    const stack: { row: number, values: string[] }[] = [
        { row: 1, values: [] },
        { row: 2, values: [] },
        { row: 3, values: [] },
        { row: 4, values: [] },
        { row: 5, values: [] },
        { row: 6, values: [] },
        { row: 7, values: [] },
        { row: 8, values: [] },
        { row: 9, values: [] },
    ]

    const data = text.split("\n");
    const stackRows = _.take(data, 9);
    const actions = _.slice(data, 10);

    stackRows.forEach(element => {
        const row = element.match(/.{1,4}/g);
        row?.forEach((item, index) => {
            const letter = /([A-Z])/.exec(item);
            if (letter && letter[1]?.length > 0) {
                const dd = stack.find((r) => r.row === index + 1);
                dd?.values.unshift(letter[1]);
            }
        })
    });
    //console.log("stack: ", stack);
    //console.log("actions: ", actions[0]);
    actions.forEach(action => {
        const takeReg = /move (\d+) from/.exec(action);
        const takeAction = takeReg && takeReg[1];

        const fromReg = /from (\d) to (\d)/.exec(action);
        const fromD = fromReg && fromReg[1];
        const toD = fromReg && fromReg[2];

        const from = stack.find((item) => item.row === parseInt(fromD || ''));
        const to = stack.find((item) => item.row === parseInt(toD || ''));

        const takeItem = _.takeRight(from?.values, parseInt(takeAction || ''));
        //console.log("takeItem: ", takeItem);
        from?.values.splice(from?.values.length - parseInt(takeAction || ''));
        // Part 1
        // to?.values.push(..._.reverse(takeItem));
        // Part 2
        to?.values.push(...takeItem);
        console.log("action: ", action);

    });
    const total = 0;

    console.log("stack: ", stack);
    const answer = stack.map((item) => {
        return item.values.slice(-1);
    });

    console.log("Answer: ", answer.join(""));
    console.log("Data Total: ", data.length);
    console.log("Total: ", total);
}

main();
