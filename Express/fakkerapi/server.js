const express = require("express");
const faker = require('faker');
const app = express();
const port = 8000;

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email()
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this.companyName = faker.company.companyName();
        this.companyAddress = faker.address.streetName();
        this.companyCity = faker.address.city();
        this.companyState = faker.address.state();
        this.companyZipCode = faker.address.zipCode();
        this.companyCountry = faker.address.country();
    }
}


app.get("/api", (req, res) => {
    res.json("Hello, World!");
});

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/users/company", (req, res) => {
    res.json({
        user : new User(),
        company : new Company(),
    });
});

app.listen( port, () => { console.log(`Lestining on port ${port}`); })