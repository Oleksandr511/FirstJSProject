function btnClick() {
    console.log("Message");
}
var counter = 0;
function btnOnceClick(el) {
    counter++;
    el.innerHTML = "Count: " + counter;
}
function userInput(el) {
    if (el.value == "font") {
        el.style.fontSize = "20px";
    }
    else if (el.value == "color")
        el.style.color = "red";
    else if (el.value == "bc")
        el.style.backgroundColor = "blue";
    else
    {
        var num = parseFloat(el.value);
        if (!isNaN(num) && num != 0)
            el.style.fontSize = num + "px";
    }
}