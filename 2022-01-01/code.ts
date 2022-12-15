import * as _ from "lodash";
import * as path from 'path';
import * as fs from 'fs';

const text = fs.readFileSync(path.join('./2022-01-01/part1.txt'), 'utf-8');


function main() {
    const data = text.split("\n\n");

    let elfWithMostSnacks = 0;
    let snackCount = 0;
    let elfWithMostSnacksData: string[] = [];

    const elfList: { mySnacks: number, elf: number }[] = [];
    data.forEach((elf, index) => {
        const temp = elf.split("\n");
        //console.log(temp.map((t) => { return parseInt(t) }));
        const mySnacks = _.sum(temp.map((t) => { return parseInt(t) }));
        elfList.push({ mySnacks, elf: index });
        if (mySnacks > snackCount) {
            snackCount = mySnacks;
            elfWithMostSnacks = index;
            elfWithMostSnacksData = temp;
        }
    });
    console.log("mostSnacks: ", snackCount);
    console.log("elfWithMostSnacks: ", elfWithMostSnacks);
    console.log("elfWithMostSnacksData: ", elfWithMostSnacksData.join(","));

    const elfListSort = _.sortBy(elfList, ["mySnacks"]);
    const totalElfs = elfListSort.length;

    const elf1 = elfListSort[totalElfs - 1];
    const elf2 = elfListSort[totalElfs - 2];
    const elf3 = elfListSort[totalElfs - 3];

    console.log("Top 3 Elfs: ", elfListSort[totalElfs - 1], elfListSort[totalElfs - 2], elfListSort[totalElfs - 3]);
    console.log("total snack by top 3 elfs: ", _.sum([elf1.mySnacks, elf2.mySnacks, elf3.mySnacks]));

}

main();