function addData() {
    let client = document.getElementById("clname").value;
    let proj = document.getElementById("prname").value;
    let budget = document.getElementById("budget").value;
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
    var tableEnd = "</table><br><a href=\"MainPage.html\">Back</a>";
    
    companies.forEach(element => {
        tableContent += "<tr><td>"+element.cl+"</td><td>"+element.pr+"</td><td>"+element.bu+"</td></tr>";
    });

    tableContent = tableStart + tableContent + tableEnd;
    document.getElementById("main").innerHTML = tableContent;
}

function removeData() {
    localStorage.removeItem("companies");
    alert("Cleared all data");
}
