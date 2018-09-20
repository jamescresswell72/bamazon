var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "Brucec12!",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw (err);
    displayDB();
});

function displayDB() {
    var itemsArr = [];

    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw (err)
        for (var i = 0; i < res.length; i++) {
            itemsArr.push(res[i].item_id.toString());
            console.log('Item Number: ' + res[i].item_id + '\nProduct: ' + res[i].product_name + '\nDepartment: ' + res[i].department_name + '\nPrice: ' + res[i].price + '\nStock Quantity: ' + res[i].stock_quantity + '\n-----------------------------------------------')
        }

    })



    shop(itemsArr);
}


function shop(itemsArr) {
    inquirer
        .prompt([
            {
                name: "action",
                type: "list",
                message: "Which item ID would you like to purchase?",
                choices: itemsArr
            },{
                name: "amount",
                type: "input",
                message: "How many would you like to purchase?"
            }
        ]).then(function (response) {
            var purchase = []

            purchase.push(response.action)
            purchase.push(response.amount)

            checkQuantity(purchase)
        })
}

function checkQuantity(purchase) {
    
}