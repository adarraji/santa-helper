const fs = require("fs");

// 1 - What floor does Santa en up on
// ( --> go up 1 floor
// ) --. go down 1 floor
const question1 = () => {
    fs.readFile("./santa.txt", (err, data) => {
        if (err) {
            console.log(err);
        }
        const inputArray = data.toString("utf8").split("");
        const upArray = inputArray.filter(c => c === "(");
        const downArray = inputArray.filter(c => c === ")");
        console.log("floor: ", upArray.length - downArray.length);
    });
}

question1();


// 2 - When does Santa enter the basement
const question2 = () => {
    fs.readFile("./santa.txt", (err, data) => {
        if (err) {
            console.log(err);
        }
        const inputArray = data.toString("utf8").split("");
        let accumulator = 0;
        let counter = 0;
        const answer = inputArray.some(currentItem => {
            if (currentItem === "(") {
                accumulator += 1
            }
            else if (currentItem === ")") {
                accumulator -= 1
            }
            counter++;
            return accumulator < 0;
        });
        console.log("basement entered at: ", counter);
    })
}

question2();
