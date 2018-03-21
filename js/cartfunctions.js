// close cart cart when "x" is clicked
var window = $('#cartlist');


// Get the <span> element that closes the window
var button = $("#cartlist #closewindow")


// When the user clicks on <span> (x), close the window
button.click(function() {
    $('#cartlist').hide();
});

// set cart columns
simpleCart({
    cartColumns: [
        { attr: "name" , label: "Name" } ,
        { view: "remove" , text: "Remove Item" , label: false },
        { view: "decrement" , label: false , text: "-" } ,
        { attr: "quantity" , label: "Quantity" } ,
        { view: "increment" , label: false , text: "+" } ,
        { attr: "total" , label: "SubTotal", view: 'currency' } ,
    ]
});


    $("#cart").on("click", function() {
        $("#cartlist").fadeToggle( "fast");
    });
                

var itemnumber = $("header nav ul #cart .itemno");
simpleCart.bind('update', function(){
    if ( simpleCart.quantity() === 0) {
        $(".simpleCart_items").hide();
        $("#subtotal").hide();
        $("#default").show();
        $(".simpleCart_total").hide();
        itemnumber.html(0);
    }
    else{
        var itemno = simpleCart.quantity();
        itemnumber.html(itemno);
        $("#default").hide();
        $(".simpleCart_items").show();
        $("#subtotal").show();
        $(".simpleCart_total").show();

    }
});

