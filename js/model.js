class Visitor {
    //Visitor object to hold all of the form information
    constructor(id, first, last, address, city, state, zip, email, phone, referalButtons={}, comment=""){
            this.id = id;
            this.first = first;
            this.last = last;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.email = email;
            this.phone = phone;
            //Going to be an array with bool values
            this.source = referalButtons;
            this.comment = comment;
    }

    get fullName() {
        //Method to get the full name
        return `${this.first} ${this.last}`;
    }

    get fullAddress() {
        //Method to get the full address
        return `${this.address}, ${this.city}, ${this.state}, ${this.zip}`;
    }
}

//Global array of visitor objects
var visitorsList = [new Visitor(4, "Nick", "Child", "75 south Kings Peak Drive", "Lindon", "UT", 84042, 
"8013614644", "nickChild14@gmail.com", {google:true, yahoo:false, fart:true}, "You stink"), 
new Visitor(5, "Hubert", "Jeff", "99 South Boulevard East", "Ogden", "DC", 12345, 
"8015555555", "hubertjeff@gmail.com", {google:true, yahoo:false, fart:true}, "You stink")];

function modelAddVisitor(visitor) {
    //Add visitor instance to global visitor array
    visitorsList.push(visitor);
}

function modelDeleteVisitor(id) {
    //Removes visitor instance from global visitor array given an ID
    for (let i = 0; i < visitorsList.length; i++) {
        if (visitorsList[i].id == id) {
            visitorsList.splice(i, 1);
        }
    }
}

function findVisitor(id) {
    //Removes visitor instance with given ID from array
    //Linear approach of time complexity (n)
    for (let i = 0; i < visitorsList.length; i++) {
        if (visitors[i].id == id) {
            return visitorsList[i];
        }
    }
}

function findVisitorIndex(id) {
    //Returns the index of an instance with the specified ID
    for (let i = 0; i < visitorsList.length; i++) {
        if (visitorsList[i].id == id) {
            return i;
        }
    }
}

