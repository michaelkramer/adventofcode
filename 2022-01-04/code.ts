import * as _ from "lodash";
import * as path from 'path';
import * as fs from 'fs';

const text = fs.readFileSync(path.join('./2022-01-04/input.txt'), 'utf-8');

function main() {

    const data = text.split("\n");
    //const data = "2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8".split("\n")

    //text.split("\n");
    let total = 0;
    data.forEach((list) => {
        const item = list.split(',');
        const item1 = item[0].split("-");
        const item2 = item[1].split("-");
        const left_min = parseInt(item1[0]);
        const left_max = parseInt(item1[1]);
        const right_min = parseInt(item2[0]);
        const right_max = parseInt(item2[1]);
        let a = 0;
        let b = 0;
        // let c = 0;
        // let d = 0;
        //(left_min < right_min and left_max < right_min) or (left_min > right_max and left_max > right_max)

        if ((left_min >= right_min && left_min <= right_max) || (left_max >= right_min && left_max <= right_max)) {
            a = 1;
        }

        if ((right_min >= left_min && right_min <= left_max) || (right_max >= left_min && right_max <= left_max)) {
            b = 1;
        }


        // if (item1[1] > item2[1]) {
        //     b = 1;
        // }

        // if (item2[0] < item1[0]) {
        //     c = 1;
        // }

        // if (item2[1] > item1[1]) {
        //     d = 1;
        // }

        // if (a === 1 && b === 1) {
        //     total += 1;
        // }

        // if (c === 1 && d === 1) {
        //     total += 1;
        // } else if (a === 0 && b === 0 && c === 0 && d === 0) {
        //     total += 1;
        // }
        if ((a === 1 || b === 1)) {
            total += 1;
        }
        console.log("Item: ", a, b, item);
    });


    console.log("Data Total: ", data.length);
    console.log("Total: ", total);
}

main();