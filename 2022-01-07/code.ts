import * as _ from "lodash";
import * as path from 'path';
import * as fs from 'fs';

const text = fs.readFileSync(path.join('./2022-01-07/input.txt'), 'utf-8');

function main() {

    const data = text.split("\n");
    data.forEach((item) => {

    });

    console.log("Data Total: ", data.length);

}

main();
