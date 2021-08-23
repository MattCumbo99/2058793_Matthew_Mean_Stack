let fs = require("fs");
let obj = require("readline");
var r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

let lastCommand = "";

do {
    r1.question("Enter your first name: ", (fname)=> {
        r1.question("Enter your last name: ", (lname)=> {
            r1.question("Enter your gender: ", (genType)=> {
                r1.question("Enter your email: ", (emailAddress)=> {
                    let people = JSON.parse(fs.readFileSync("logged-info.json").toString());
                    let person = {firstname:fname, lastname:lname, gender:genType, email:emailAddress};
                    people.push(person);
                    fs.writeFileSync("logged-info.json",JSON.stringify(people));
                    console.log("Record logged successfully.");
                    r1.question("Make another input? (y/n): ", (answer)=> {
                        if (answer != "y" || answer != "Y") {
                            answer = "n";
                        }
                        lastCommand = answer;
                    })
                });
            });
        });
    });
} while (lastCommand!="y" || lastCommand!="Y");
