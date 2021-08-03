function addData() {
    let client = document.getElementById("clname").value;
    let proj = document.getElementById("prname").value;
    let budget = document.getElementById("budget").value;

    if (client.length == 0) {
        alert("Client name cannot be empty.");
        return;
    }
    if (proj.length == 0) {
        alert("Project name cannot be empty.");
        return;
    }
    if (budget.length == 0) {
        alert("Budget amount cannot be empty.");
        return;
    }

    let companies = JSON.parse(localStorage.getItem("companies") || "[]");
    let company = {cl:client,pr:proj,bu:budget};
    
    companies.push(company);
    localStorage.setItem("companies", JSON.stringify(companies));

    alert("Successfully added " + company.cl);
}

function displayData() {
    let companies = JSON.parse(localStorage.getItem("companies") || "[]");
    var tableContent = "";
    var tableStart = "<label>Annual Budget</label><br><br><table border=1><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>";
    var tableEnd = "</table>";
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    let total = 0;
    
    companies.forEach(element => {
        tableContent += "<tr><td>"+element.cl+"</td><td>"+element.pr+"</td><td>"+formatter.format(element.bu)+"</td></tr>";
        total = +total + +element.bu;
    });

    tableContent = tableStart + tableContent + tableEnd + "<br><label>Total cost: " + formatter.format(total) + "</label><br><br><a href=\"MainPage.html\">Back</a>";
    document.getElementById("main").innerHTML = tableContent;
}

function removeData() {
    localStorage.removeItem("companies");
    alert("Cleared all data");
}
