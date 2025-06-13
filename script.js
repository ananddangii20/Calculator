function addtodisplay(char) {
    document.getElementById("display").value += char;
}

function clearscreen() {
    document.getElementById("display").value = "";
}

function backspace() {
    let displayvalue = document.getElementById("display");
    displayvalue.value = displayvalue.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "ERROR!";
    }
}