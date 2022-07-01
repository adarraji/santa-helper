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


