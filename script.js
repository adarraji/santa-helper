const fs = require("fs");

const question1 = () => {
    fs.readFile("./santa.txt", (err, data) => {
        if (err) {
            console.log(err);
        }
        const inputArray = data.toString("utf8").split("");
        const upArray = inputArray.filter(c => c === "(");
        const downArray = inputArray.filter(c => c === ")");
        console.log(upArray.length - downArray.length);
    });
}

question1();
