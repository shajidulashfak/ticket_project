//  First Class Tickets .
function firstClass(isIncrease){
    const ticketInput = document.getElementById('firstTickets');
    const ticketCount = parseInt(ticketInput.value);
    var ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketTotal = ticketNewCount * 150;
    document.getElementById('firstPrice').innerText = '$' + ticketTotal;
    calculatePrice();
}


//  Economy Class Tickets .
function economyClass(isIncrease){
    const ticketInput = document.getElementById('economyTickets');
    const ticketCount = parseInt(ticketInput.value);
    var ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketTotal = ticketNewCount * 100;
    document.getElementById('economyPrice').innerText = '$' + ticketTotal;
    calculatePrice();
}


//  Total Tickets And Price CalCulation .
function calculatePrice(){
    const firstInput = document.getElementById('firstTickets');
    const firstCount = parseInt(firstInput.value);

    const economyInput = document.getElementById('economyTickets');
    const economyCount = parseInt(economyInput.value);

    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$ ' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$ ' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$ ' + grandTotal;
}


// After Buying .
const bookingBtn = document.getElementById('bookNow');
bookingBtn.addEventListener('click', function(){
    const bookingArea =document.getElementById('booking-area');
    bookingArea.style.display = "none";
    const congratulation = document.getElementById('congratulation-area');
    congratulation.style.display = "block";
});