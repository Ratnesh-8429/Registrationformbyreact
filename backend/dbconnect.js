const sql = require("mysql");

const sqlconnect= sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "regform",
    multipleStatement: true
} );

sqlconnect.connect((err)=>{
    if(!err){
        console.log("db is connected ");
    }else{
        console.log("db is not connect")
    }
});

module.exports = sqlconnect;