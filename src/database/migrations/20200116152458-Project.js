"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Projects", {
            projectId: {
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4
            },

            studentId: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                references: {
                    model: {
                        tableName: "Students"
                    },
                    key: "_id"
                },
                allowNull: false
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },

            creationDate: {
                type: Sequelize.DATEONLY,
                allowNull: true
            },

            repoUrl: {
                type: Sequelize.TEXT,
                allowNull: true
            },

            liveUrl: {
                type: Sequelize.TEXT,
                allowNull: true
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Projects");
    }
};
