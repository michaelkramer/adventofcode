import * as _ from "lodash";
import * as path from 'path';
import * as fs from 'fs';

const text = fs.readFileSync(path.join('./2022-01-02/part1.txt'), 'utf-8');

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissor";
function main() {
    const pointValues = [
        {
            shape: "A", value: 1, name: ROCK
        },
        {
            shape: "B", value: 2, name: PAPER
        },
        {
            shape: "C", value: 3, name: SCISSOR
        },
        {
            shape: "X", value: 1, name: ROCK
        },
        {
            shape: "Y", value: 2, name: PAPER
        },
        {
            shape: "Z", value: 3, name: SCISSOR
        }
    ];

    let totalPoints = 0;
    const data = text.split("\n");

    data.forEach((game, index) => {
        let gamePoints = 0;
        let gameResult = "";
        const player = game.split(" ");
        const them = pointValues.find((shape) => shape.shape === player[0]);
        const us = pointValues.find((shape) => shape.shape === player[1]);
        if (them && us) {
            /*
            1 for Rock
            2 for Paper
            3 for Scissors
            */
            // loss
            if (us.shape === "X") {
                gamePoints = 0;
                switch (them.name) {
                    case ROCK:
                        // scissor
                        gamePoints += 3;
                        break;
                    case PAPER:
                        // rock
                        gamePoints += 1;
                        break;
                    case SCISSOR:
                        // paper
                        gamePoints += 2;
                        break;
                }
                // tie
            } else if (us.shape === "Y") {
                gamePoints = 3;
                gamePoints += them.value;
                // win
            } else if (us.shape === "Z") {
                gamePoints = 6;
                switch (them.name) {
                    case ROCK:
                        // paper
                        gamePoints += 2;
                        break;
                    case PAPER:
                        // scissor
                        gamePoints += 3;
                        break;
                    case SCISSOR:
                        // rock
                        gamePoints += 1;
                        break;
                }
            }





            // if (them?.name === us?.name) {
            //     gamePoints = 3
            //     gameResult = "T";
            // } else if ((them?.name === ROCK) && (us?.name === PAPER)) {
            //     gamePoints = 6;
            //     gameResult = "W";
            // } else if ((them?.name === ROCK) && (us?.name === SCISSOR)) {
            //     gamePoints = 0;
            //     gameResult = "L";
            // } else if ((them?.name === PAPER) && (us?.name === SCISSOR)) {
            //     gamePoints = 6;
            //     gameResult = "W";
            // } else if ((them?.name === PAPER) && (us?.name === ROCK)) {
            //     gamePoints = 0;
            //     gameResult = "L";
            // } else if ((them?.name === SCISSOR) && (us?.name === PAPER)) {
            //     gamePoints = 0;
            //     gameResult = "L";
            // } else if ((them?.name === SCISSOR) && (us?.name === ROCK)) {
            //     gamePoints = 6;
            //     gameResult = "W";
            // }
            // gamePoints += us.value;
            console.log(`Game[${index}]: `, them, us, gameResult, gamePoints);
        }
        totalPoints += gamePoints;
    })
    console.log("Total Points: ", totalPoints);
}

main();