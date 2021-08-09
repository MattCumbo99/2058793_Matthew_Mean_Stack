function addItem(name, price) {
    console.log("Called Add item!");
    var item = { na: name, pr: price };
    var cart = JSON.parse(sessionStorage.getItem("shopcart") || "[]");
    cart.push(item);
    sessionStorage.setItem("shopcart", JSON.stringify(cart));
    getTotalItems();
}
function displayItems() {
    var cart = JSON.parse(sessionStorage.getItem("shopcart") || "[]");
    // Display text if the cart is empty
    if (cart.length == 0) {
        document.getElementById("main").innerHTML = "<h4 style=\"text-align: center; color: red;\">Your cart is empty!</h4>";
        return;
    }
    var tableContent = "";
    var tableStart = "<table class=\"table table-hover\"><tr><th>Item Name</th><th>Price</th><th></th></tr>";
    var tableEnd = "</table>";
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    var total = 0;
    cart.forEach(function (element) {
        tableContent += "<tr><td>" + element.na + "</td><td>" + formatter.format(element.pr) + "</td><td><input type=\"button\" value=\"Remove\" onclick=\"removeItem('" + element.na + "')\"></td></tr>";
        total = +total + +element.pr;
    });
    tableContent = tableStart + tableContent + tableEnd + "<br><label>Total price: " + formatter.format(total);
    document.getElementById("main").innerHTML = tableContent;
}
function getTotalItems() {
    var cart = JSON.parse(sessionStorage.getItem("shopcart") || "[]");
    var numItems = cart.length;
    document.getElementById("cartsize").innerHTML = numItems;
}
function removeItem(itemName) {
    var cart = JSON.parse(sessionStorage.getItem("shopcart") || "[]");
    // Find the index of the item's name
    var index = cart.findIndex(function (x) { return x.na == itemName; });
    cart.splice(index, 1);
    sessionStorage.setItem("shopcart", JSON.stringify(cart));
    displayItems();
}
