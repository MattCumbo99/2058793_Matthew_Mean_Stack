let fs = require("fs");
let obj = require("readline");
var r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

function start() {
    debugger;
    r1.question("Enter your first name: ", (fname)=> {
        r1.question("Enter your last name: ", (lname)=> {
            r1.question("Enter your gender: ", (genType)=> {
                r1.question("Enter your email: ", (emailAddress)=> {
                    let people = JSON.parse(fs.readFileSync("logged-info.json").toString());
                    let curDate = new Date();
                    let person = {firstname:fname, lastname:lname, gender:genType, email:emailAddress,
                                    dateStored:curDate.toLocaleString()};
                    people.push(person);
                    fs.writeFileSync("logged-info.json",JSON.stringify(people));
                    console.log("Record logged successfully.");
                    r1.question("Make another input? (y/n): ", (answer)=> {
                        if (answer == "y" || answer == "Y") {
                            start();
                        }
                    })
                });
            });
        });
    });
}

start();
