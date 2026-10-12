function generateNum1() {
    //Generate a Random Number
    let num1 = Math.floor(Math.random() * 100 + 1);
    document.getElementById("num1Show").innerHTML = num1;

}


function clearNum1() {
    document.getElementById("num1Show").innerHTML = "0";
}