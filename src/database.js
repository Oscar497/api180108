const mysql = require('mysql');

const mysqlConnection= mysql.createConnection({
    host:'sql6.freemysqlhosting.net',
    user: 'sql6448595',
    password:'XLe2mEMISU',
    database: 'sql6448595',
    multipleStatements: true
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports=mysqlConnection;