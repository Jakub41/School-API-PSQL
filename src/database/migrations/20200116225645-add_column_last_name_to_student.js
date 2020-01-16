"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            "Students",
            "lastName",
            Sequelize.STRING
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("Students", "lastName");
    }
};
