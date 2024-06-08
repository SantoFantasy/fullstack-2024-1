const { Sequelize } = require('sequelize');
const fs = require('fs')

const postgreSQLConnStr = 
    'postgres://' +
    '${process.env.DB_USER}' + ":" +
    '${process.env.DB_PASS}' + "@" +
    '${process.env.DB_HOST}' + ":" +
    '${process.env.DB_PORT}' + "/" +
    '${process.env.DB_NAME}';

const database = {
    createInstance() {
        if (!this.instance) {
            const env = process.env.NODE_ENV || 'local';
            const options = {
                dialect: 'postgres',
                logging: false
            }
        }
        this.instance = new Sequelize(postgreSQLConnStr, options);
    },
    async setupDatabase() {
        this.createInstance();
        if (process.env.NODE_ENV === 'local') {
            await this.instance.authenticate();
            await this.instance.sync();
        }
    }
}

database.createInstance()

module.exports = {
    instance: database.instance,
    setupDatabase: database.setupDatabase.bind(database)
}