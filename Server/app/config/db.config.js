module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Rohan@123",
    DB: "auth",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };