function getInputValue(ticket) {
    var ticketCount;
    const ticketInput = document.getElementById(ticket + '-count');
    if (ticketInput.value == "") {
        ticketCount = 0;
    } else {
        ticketCount = parseInt(ticketInput.value);
    }
    return ticketCount;
}

function handleTicketChange(ticket, isIncrease) {

    const ticketCount = getInputValue(ticket);
    //console.log(ticketCount);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    // let productTotal = 0;
    // if (product == 'phone') {
    //     productTotal = productNewCount * 1219;
    // }
    // if (product == 'case') {
    //     productTotal = productNewCount * 59;
    // }

    // document.getElementById(product + '-total').innerText = '$' + productTotal;
    // calculateTotal();
}