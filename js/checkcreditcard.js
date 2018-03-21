var creditcardradio = $("#ordersummary #orderform .paymentmethod label #creditcard");
var cashradio = $("#ordersummary #orderform .paymentmethod #cash");
var creditcardnumberlabel = $("#ordersummary #orderform .paymentmethod #cclabel");
var creditcardnumberinput = $("#ordersummary #orderform .paymentmethod #cclabel #creditcardnumberinput");
$(creditcardradio).on('change', function() {
    creditcardnumberlabel.show();
    creditcardnumberinput.show();
    creditcardnumberinput.css("display","block"); //make label and input on a separate line
});
$(cashradio).on('change', function(){
    creditcardnumberlabel.hide();
    creditcardnumberinput.hide();
});