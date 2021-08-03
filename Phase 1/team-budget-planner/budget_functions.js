var companies = [];

class Company {
    constructor(cl, pr, bu) {
        this.client = cl;
        this.project = pr;
        this.budget = bu;
    }

    getClient() {
        return this.client;
    }
    getProject() {
        return this.project;
    }
    getBudget() {
        return this.budget;
    }
}

function addData() {
    var client = document.getElementById("clname").value;
    var proj = document.getElementById("prname").value;
    var budget = document.getElementById("budget").value;

    let cur = new Company(client, proj, budget);
    companies.push(cur);
    sessionStorage.setItem("companies", JSON.stringify(companies));
    localStorage.setItem("companies", JSON.stringify(companies));
    alert("Successfully added " + cur.client);
}

function displayData() {

}
