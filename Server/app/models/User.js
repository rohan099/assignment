module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING
        },
        first_name:{
            type: Sequelize.STRING
        },
        last_name:{
            type: Sequelize.STRING
        },
        address:{
            type: Sequelize.STRING
        },
        country_code:{
            type: Sequelize.STRING
        },
        phone:{
            type: Sequelize.STRING
        },
        gender:{
            type: Sequelize.STRING
        }
    });
    return User;
};