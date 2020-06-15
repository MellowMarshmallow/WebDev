// Get index.html DOMs
// 3 elements will change with respect to the user's input
binInput = document.querySelector("#binary-input");
decOutput = document.querySelector("#module-output");
inputStatus = document.querySelector("#output-status");

// Functions
function is_bin(string) {
    for(const char of string)
        if(char != 1 && char != 0)
            return false;
    return true;
}
function bin_to_dec(string) {
    let decimal = 0;
    let power = 0;
    while(!!string) { // Conver to boolean (not not)
        decimal += Number(string[string.length - 1]) * 2 ** power;
        string = string.slice(0, -1);
        ++power;
    }
    return decimal;
}
function update_status(valid) {
    if(valid) {
        inputStatus.innerText = "Output";
        inputStatus.style.backgroundColor = "var(--green)";
    }
    else {
        inputStatus.style.backgroundColor = "var(--red)";
        inputStatus.innerText = "Invalid";
    }
}

// Event listener
binInput.addEventListener("input", () => {
    if(binInput.value === "") {
        decOutput.innerText = "";
        update_status(true);
    }
    else if(is_bin(binInput.value)) {
        decOutput.innerText = bin_to_dec(binInput.value);
        update_status(true);
    }
    else // invalid output
        update_status(false)
}, false);