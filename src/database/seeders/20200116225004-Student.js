"use strict";

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert("Students", [
            {
                name: "Jakub",
                lastName: "Lemiszewski",
                email: "lemi@example.com",
                dateOfBirth: "1984-11-10"
            },
            {
                name: "Arnold",
                lastName: "Dave",
                email: "test@gmail.com",
                dateOfBirth: "2000-09-26"
            }
        ]),

    down: (queryInterface, Sequelize) =>
        queryInterface.bulkDelete("Students", null, {})
};
