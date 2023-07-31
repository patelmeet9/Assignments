var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_assign1"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // var sql = "INSERT INTO emaployee (Id,Name,Salary) VALUES (1002,'MEET',70000)";
    // con.query(sql, function(err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // });

    // var sql2 = "SELECT * FROM employee";
    // con.query(sql2, function(err, result) {
    //     if (err) throw err;
    //     console.log("List of employee");
    //     console.log(result);
    // });

    SelectAllElements = () => {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM emaployee ', (error, elements) => {
                if (error) {
                    return reject(error);
                }
                console.log(elements, "hello");
                return resolve(elements);
            });
        });
    };
    const result = SelectAllElements();
    //console.log(result);


});