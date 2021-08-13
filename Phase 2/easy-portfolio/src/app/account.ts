
export class Account {
    constructor(
        public firstname:string,
        public lastname:string,
        public user:string,
        public pass:string) {

    }

    pushContact(name:string, num:string) {
        let contactDB = JSON.parse(sessionStorage.getItem("contacts") || "[]");
        let curContact = {us:this.user,na:name,nu:num};

        contactDB.push(curContact);
        localStorage.setItem("contacts", JSON.stringify(contactDB));
    }
}
