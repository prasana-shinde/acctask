const mysql = require('mysql');
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'acctask'
    //password optional
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Connected mysql server!");
});

module.exports = conn; //exporting database connection