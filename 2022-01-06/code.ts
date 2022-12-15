import * as _ from "lodash";
import * as path from 'path';
import * as fs from 'fs';

const text = fs.readFileSync(path.join('./2022-01-06/input.txt'), 'utf-8');

function main() {

    const data = text.split("\n");
    //const data = ["bvwbjplbgvbhsrlpgdmjqwftvncz", "nppdvjthqldpwncqszvftbrmjlhg", "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"];
    let foundIndex: number = 0;
    data.forEach((item) => {
        let answer: string[] = [];
        const code = item.split("");
        code.every((c, index) => {
            //console.log("code: ", c, answer.length);
            if (answer.length === 0) {
                answer.push(c);
            } else {
                if (answer.length < 14) {
                    answer.push(c);
                } else {

                    answer.shift();
                    answer.push(c);
                    if (_.uniq(answer).length === 14) {
                        console.log("Index: ", index + 1, "code: ", c);
                        return false;
                    }
                }

                // if (answer.includes(c)) {
                //     if (answer.length === 3) {
                //         answer.shift();
                //     }
                //     answer.push(c);
                // } else {
                // if (answer.length < 4) {
                //     answer.push(c);
                // } else {
                // if (!answer.includes(c)) {
                //     if (answer.length < 4) {
                //         answer.push(c);
                //     } else {
                //         console.log("Index: ", index + 1, "code: ", c);
                //         return true;
                //     }
                // } else if (answer.includes(c)) {
                //     answer.shift();
                //     answer.push(c);
                // }

                // console.log("Index: ", index, "code: ", c);


            }
            return true;
        });
        console.log("Answer: ", answer.join(""));
    })

    console.log("Data Total: ", data.length);

}

main();
