function showForLoop() {
    const num = parseFloat(document.getElementById("num").value);
    const txt = document.getElementById("txt").value;

    if (isNaN(num)) {
        alert("Invalid input! Please enter a valid number.");
        //document.getElementById("output").innerHTML = "Please enter a valid number.";
    return; //Exit the function if the inputs are Invalid
    }

    for (let i = 1; i <= num; i++) {
        document.getElementById("output1").innerHTML = document.getElementById("output1").innerHTML + i + ". " + txt + "<br>";
    }
}

function clearFields() {
    document.getElementById("output1").innerHTML = "";
}

function showWhileLoop() {
    const num2 = parseFloat(document.getElementById("num2").value);
    const txt2 = document.getElementById("txt2").value;

    if (isNaN(num2)) {
        alert("Invalid input! Please enter a valid number.");
        //document.getElementById("output").innerHTML = "Please enter a valid number.";
    return;
    }
    //WHILE LOOP
    let i = 1;
    while (i <= num2) {
        document.getElementById("output2").innerHTML = document.getElementById("output2").innerHTML + i + ". " + txt2 + "<br>";
        i++;
    }
}

function clearFields2() {
    document.getElementById("output2").innerHTML = "";
}
function showDoWhileLoop() {
    const num3 = parseFloat(document.getElementById("num3").value);
    const txt3 = document.getElementById("txt3").value;

    if (isNaN(num3)) {
        alert("Invalid input! Please enter a valid number.");
        //document.getElementById("output").innerHTML = "Please enter a valid number.";
    return;
    }
    //DO-WHILE LOOP
    let i = 1;
    do {
        document.getElementById("output3").innerHTML = document.getElementById("output3").innerHTML + i + ". " + txt3 + "<br>";
        i++;
    } while (i <= num3);
}

function clearFields3() {
    document.getElementById("output3").innerHTML = "";
}