// Get index.html DOMs
borderPreview = document.querySelector("#brp-preview");
inputs = [
    document.querySelector("#brp-top-left"),
    document.querySelector("#brp-top-right"),
    document.querySelector("#brp-bot-right"),
    document.querySelector("#brp-bot-left")
];
valueOutput = document.querySelector("#brp-output");

// Variable(s)
borderValues = [0, 0, 0, 0];

// Function(s)
const getValue = (element) => {
    // check that value is valid (a positive number)
    // element.value is a str
    // regex: start of str (^), digits (\d), 0+ (+), end of str ($)
    if (/^\d*$/.test(element.value))
        return element.value;
    return false;
};
const changeBorderRadius = (element, borderArray) => {
    const [tl, tr, br, bl] = borderArray;
    element.style.borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
};
const changeOutput = (output, borderArray) => {
    const [tl, tr, br, bl] = borderArray;
    output.innerText = `border-radius = ${tl}px ${tr}px ${br}px ${bl}px`;
};
const changeColour = (element, colour) => {
    element.style.backgroundColor = colour;
};

// Event listener(s)
inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        result = getValue(input);
        if (result === "") {
            borderValues[index] = 0;
            changeColour(input, "var(--fg1)");
        }
        else if (!!result) {
            borderValues[index] = result;
            changeColour(input, "var(--fg1)");
        }
        else {
            borderValues[index] = 0;
            changeColour(input, "var(--red)");
        }

        changeBorderRadius(borderPreview, borderValues);
        changeOutput(valueOutput, borderValues);
    }, false);
});