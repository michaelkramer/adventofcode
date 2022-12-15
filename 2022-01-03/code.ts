import * as _ from "lodash";
import * as path from 'path';
import * as fs from 'fs';

const text = fs.readFileSync(path.join('./2022-01-03/input.txt'), 'utf-8');

function main() {
    const Avalue = "A".charCodeAt(0);
    const avalue = "a".charCodeAt(0);

    const uppcaseAValue = 27;
    const n = 3;
    const data = text.split("\n");
    const grouped = data.reduce((r: any, e: string, i: number) =>
        (i % n ? r[r.length - 1].push(e) : r.push([e])) && r
        , []);
    console.log("grouped: ", grouped[0]);
    let total = 0;
    grouped.forEach((group: string[]) => {
        const sharedItem = _.intersection(group[0].split(""), group[1].split(""), group[2].split(""));
        console.log("sharedItem: ", sharedItem);
        const value = (sharedItem[0] === sharedItem[0].toUpperCase()) ? sharedItem[0].charCodeAt(0) - Avalue + uppcaseAValue : sharedItem[0].charCodeAt(0) - avalue + 1;
        console.log("value: ", value)
        total += value;
    })


    // data.forEach((sack, index) => {
    //     const totalItems = sack.length;
    //     const containerSize = totalItems / 2;
    //     const container1 = sack.substring(0, containerSize);
    //     const container2 = sack.substring(containerSize);

    //     const sharedItem = _.intersection(container1.split(""), container2.split(""));

    //     const value = (sharedItem[0] === sharedItem[0].toUpperCase()) ? sharedItem[0].charCodeAt(0) - Avalue + uppcaseAValue : sharedItem[0].charCodeAt(0) - avalue + 1;

    //     total += value;
    //     console.log("Sack: ", sack);
    //     console.log("container1: ", container1)
    //     console.log("container2: ", container2)
    //     console.log("shared Item: ", sharedItem, sharedItem[0].charCodeAt(0), sharedItem[0].charCodeAt(0) - Avalue + 1)
    //     console.log("value: ", value)

    // })


    console.log("Data Total: ", total);
}

main();