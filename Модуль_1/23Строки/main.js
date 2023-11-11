function showVerticalMessage(message) {
    let counter = 0;

    for (let char of message) {

        if (counter >= 7) {
            return
        }
        
        if (char === "s") {
            console.log(char.toUpperCase())
        } else {
            console.log(char)
        }

        counter++;

    }
}

showVerticalMessage("Strada");