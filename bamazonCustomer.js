var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "MantaRay17",
    database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "userOrAdmin",
            type: "list",
            message: "Are you a customer, or an administrator?",
            choices: ["Customer", "Administrator"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.userOrAdmin == "Customer") {
                startCustomer();
            }
            else {
                adminCredentials();
            }
        });
}

function adminCredentials() {
    inquirer
        .prompt({
            name: "adminPassword",
            type: "password",
            message: "Please enter the administrative password. (Hint: It's DEFINITELY *NOT* 'password')",
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.adminPassword == "password") {
                startAdmin();
            }
            else {
                console.log("Let's try again...");
                start();
            }
        });
}

function startCustomer() {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM items", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
}

function startAdmin() {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM items", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    })
    inquirer
        .prompt({
            name: "departments",
            type: "list",
            message: "Which department are you looking to shop in?",
            choices: ["Cleaning Supplies", "Pet Supplies", "Games", "Electronics"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.departments == "Cleaning Supplies") {

                showCleaningSupplies();
            } else if (answer.departments == "Pet Supplies") {

                showPetSupplies();
            } else if (answer.departments == "Games") {

                showGames();
            } else if (answer.departments == "Electronics") {

                showElectronics();
            }
        });
}

function showCleaningSupplies() {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT item_department, address FROM customers", function (err, result, fields) {
            if (err) throw err;
            console.log(result[4, 5]);
        });
    });
    inquirer
        .prompt({
            name: "choices",
            type: "list",
            message: "Which item would you like to buy?",
            choices: ["Broom", "Dish Soap"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.choices === "Broom") {
                inquirer
                    .prompt({
                        name: "qty",
                        type: "list",
                        message: "How many would you like to buy?",
                        choices: [1, 2, 3, 4, 5]
                    });


            console.log("Thank you! Your total is: $" + result[4].item_cost*answer.qty);
                }
        });
}



























