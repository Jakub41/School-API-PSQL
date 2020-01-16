const uuid = require('uuid/v4');
"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Students", {
            _id: {
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: uuid()
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.TEXT,
                allowNull: false,
                unique: true
            },

            dateOfBirth: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },

            createdAt: {
                type: Sequelize.DATE,
                defaultValue: new Date(),
                allowNull: false
            },

            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: new Date(),
                allowNull: false
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Students");
    }
};
