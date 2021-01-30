function getInputValue(ticket) {
    let ticketCount;
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
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    calculateTotal();
}

function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyCount = getInputValue('economy');
    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}


function confirmBooking() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var departureDate = document.getElementById('departure').value;
    var returnDate = document.getElementById('return').value;
    var cost = document.getElementById('grand-total').innerText;
    if (from == null || from == "" && to == null || to == "" && departureDate == null || departureDate == "" && returnDate == null || returnDate == "" || cost <= 0) {
        alert("Please Fill All Required Field");
    } else {
        document.getElementById("buy-ticket").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
        document.getElementById('confirmation-from').innerText = from;
        document.getElementById('confirmation-to').innerText = to;
        document.getElementById('confirmation-departure').innerText = departureDate;
        document.getElementById('confirmation-return').innerText = returnDate;
        document.getElementById('confirmation-cost').innerText = cost;
    }
}