var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "MantaRay17",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;

    start();
});

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
    connection.query("SELECT * FROM items", function (err, result, fields) {
        if (err) throw err;
        console.log(result);

        inquirer
            .prompt({
                name: "departments",
                type: "list",
                message: "Which department are you looking to shop in?",
                choices: ["Cleaning Supplies", "Pet Supplies", "Games", "Electronics"]
            })
            .then(function (answer) {

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
    });
}

function startAdmin() {
    connection.query("SELECT * FROM items", function (err, result, fields) {
        if (err) throw err;
        console.log(result);

        inquirer
            .prompt({
                name: "departments",
                type: "list",
                message: "Which department would you like to make changes in?",
                choices: ["Cleaning Supplies", "Pet Supplies", "Games", "Electronics"]
            })
            .then(function (answer) {
                console.log("This feature will be available soon. Please check again later.");
            })
    });
}

function showCleaningSupplies() {

    connection.query("SELECT * FROM items WHERE item_department = 'Cleaning Supplies'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);

        inquirer
            .prompt({
                name: "choices",
                type: "list",
                message: "Which item would you like to buy?",
                choices: ["Broom", "Dish Soap"]
            })
            .then(function (answer) {
                if (answer.choices === "Broom") {
                    inquirer
                        .prompt({
                            name: "qty",
                            type: "list",
                            message: "How many would you like to buy?",
                            choices: ["1", "2", "3", "4", "5"]
                        }).then(function (answer1) {
                            console.log("Thank you! Your total is: $" + (result[0].item_price * answer1.qty));
                        });
                } else {
                    inquirer
                        .prompt({
                            name: "qty",
                            type: "list",
                            message: "How many would you like to buy?",
                            choices: ["1", "2", "3", "4", "5"]
                        }).then(function (answer1) {
                            console.log("Thank you! Your total is: $" + (result[1].item_price * answer1.qty));
                        });
                }
            });
    });
}
function showPetSupplies() {

    connection.query("SELECT * FROM items WHERE item_department = 'Pet Supplies'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);

        inquirer
            .prompt({
                name: "choices",
                type: "list",
                message: "Which item would you like to buy?",
                choices: ["Ball", "Food"]
            })
            .then(function (answer) {
                if (answer.choices === "Ball") {
                    inquirer
                        .prompt({
                            name: "qty",
                            type: "list",
                            message: "How many would you like to buy?",
                            choices: ["1", "2", "3", "4", "5"]
                        }).then(function (answer1) {
                            console.log("Thank you! Your total is: $" + (result[0].item_cost * answer1.qty));
                        });
                } else {
                    inquirer
                        .prompt({
                            name: "qty",
                            type: "list",
                            message: "How many would you like to buy?",
                            choices: ["1", "2", "3", "4", "5"]
                        }).then(function (answer1) {

                            console.log("Thank you! Your total is: $" + (result[1].item_cost * aanswer1.qty));
                        });
                }
            });
    });
}
function showElectronics() {

    connection.query("SELECT * FROM items WHERE item_department = 'Electronics'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);


        inquirer
            .prompt({
                name: "choices",
                type: "list",
                message: "Which item would you like to buy?",
                choices: ["Wireless Headphones", "Tablet"]
            })
            .then(function (answer) {
                if (answer.choices === "Wireless Headphones") {
                    inquirer
                        .prompt({
                            name: "qty",
                            type: "list",
                            message: "How many would you like to buy?",
                            choices: ["1", "2", "3", "4", "5"]
                        }).then(function (answer1) {
                            console.log("Thank you! Your total is: $" + (result[0].item_cost * answer1.qty));
                        });
                } else {
                    inquirer
                        .prompt({
                            name: "qty",
                            type: "list",
                            message: "How many would you like to buy?",
                            choices: ["1", "2", "3", "4", "5"]
                        }).then(function (answer1) {
                            console.log("Thank you! Your total is: $" + (result[1].item_cost * answer1.qty));
                        });
                }

            });
    });
}
function showGames() {

    connection.query("SELECT * FROM items WHERE item_department = 'Video Games'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);


        inquirer
            .prompt({
                name: "choices",
                type: "list",
                message: "Which item would you like to buy?",
                choices: ["Spyro", "Skyrim"]
            })
            .then(function (answer) {
                if (answer.choices === "Spyro") {
                    inquirer
                        .prompt({
                            name: "qty",
                            type: "list",
                            message: "How many would you like to buy?",
                            choices: ["1", "2", "3", "4", "5"]

                        }).then(function (answer1) {

                            console.log("Thank you! Your total is: $" + (result[0].item_cost * answer1.qty));
                        });
                } else {
                    inquirer
                        .prompt({
                            name: "qty",
                            type: "list",
                            message: "How many would you like to buy?",
                            choices: ["1", "2", "3", "4", "5"]
                        }).then(function (answer1) {

                            console.log("Thank you! Your total is: $" + (result[1].item_cost * answer1.qty));
                        });
                }
            });
    });

}