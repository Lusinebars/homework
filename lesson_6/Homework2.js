let sentence = "I am learning JavaScript";
let result = "";

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
        result += "-";
    } else {
        result += sentence[i];
    }
}

