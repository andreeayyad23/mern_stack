const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;

const createUsers = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        id: faker.string.uuid(),
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            streetAddress: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    };
    return newCompany;
};

// Example usage
console.log(createCompany());
console.log(createUsers());

app.get("/api/user/new", (req, res) => {
    res.json(createUsers());
});

app.get("/api/companie/new", (req, res) => {
    res.json(createCompany());
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
