const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'project1',
    password:'omkar'
});

module.exports=pool.promise();