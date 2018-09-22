var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Brucec12!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw (err);
    displayDB();
});

function displayDB() {
    var itemsArr = [];

    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw (err)

        var item_id = res[i].item_id
        var product_name = res[i].product_name
        var department_name = res[i].department_name
        var price = res[i].price

        for (var i = 0; i < res.length; i++) {
            itemsArr.push(item_id.toString());
            console.log('\nItem ID: ' + item_id + '\nProduct: ' + product_name + '\nDepartment: ' + department_name + '\nPrice: ' + price + '\n-----------------------------------------------')
        }

        itemsArr.push([item_id, product_name, department_name, price])
        // console.log (itemsArr)
    })




    shop(itemsArr);
}


function shop(itemsArr) {

    inquirer
        .prompt([
            {
                name: "item_id",
                type: "input",
                message: "Which item ID would you like to purchase?" + "\n-----------------------------------------------",
                choices: itemsArr,
                validate: function (value) {
                    if (isNaN(value)) { return false } else { return true }
                }
            }, {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
            }
        ]).then(function (purchase) {

            connection.query("SELECT * FROM products WHERE item_id=?", purchase.item_id, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    if (purchase.quantity > res[i].stock_quantity) {
                        console.log("-----------------------------------------------" +
                            "\nSorry, we don't have that many in stock!" + "\n-----------------------------------------------")
                    }
                    else {
                        console.log("Order Accepted!")
                    }

                }

                purchase.push(response.item_id)
                purchase.push(response.quantity)

                checkQuantity(purchase)
            })

        }
    )

}
// function checkQuantity(purchase) {
//                 var stockQuantity = res[i].stock_quantity;

//                 if (purchase[1] > stockQuantity) {
//                     console.log("Insufficient Quantity!");

//                     shop(itemsArr);
//                 } else {

//                 }
//             }

// remember to add mysql, inquirer