const Sequelize = require('sequelize');

const sequelize = new Sequelize('project1','root','omkar',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports=sequelize;