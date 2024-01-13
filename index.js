let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");

function dispalyingNumber(fromCount, toCount) {
    let givenCount = fromCount;
    counterTextEl.textContent = givenCount;

    let uniqueId = setInterval(function() {
        if (givenCount < toCount) {
            givenCount += 1;
            counterTextEl.textContent = givenCount;
        } else {
            clearInterval(uniqueId);
        }
    }, 1000);
}

function onclickstart() {
    let fromVal = fromUserInputEl.value;
    let toVal = toUserInputEl.value;

    if (fromVal === "") {
        alert("Enter the from value");
    } else if (toVal === "") {
        alert("Enter the to value");
    } else {
        let fromValInteger = parseInt(fromVal);
        let toValInteger = parseInt(toVal);
        dispalyingNumber(fromValInteger, toValInteger);
    }
}