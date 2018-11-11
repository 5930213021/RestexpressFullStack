const pgp = require('pg-promise')();
var db = pgp('postgres://rzbthrbqjwrmnt:2982f8c701fb3cf462209cfed528dcc6678f92fc009079ce9e05f8d00ff61b24@ec2-54-243-147-162.compute-1.amazonaws.com:5432/d4kvflfh1d13co?ssl=true');


//functionไหนบ้างที่อยากจะให้serverเอาไปใช้บ้าง
module.exports = {
    getAllProducts,
    getProductsByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getAllPurchase_items,
    getPurchase_idByID,
    insertPurchase_items,
    updatePurchase_items,
    deletePurchase_items,
    getpurchases,
    getPurchasesByID,
    insertPurchases,
    updatePurchases,
    deletePurchases,
    getAllUsers,
    getUsersByID,
    insertUsers,
    updateUsers,
    deleteUsers
};


// Add queries here เพื่อในserverมาดึงข้อมูลนำไปใช้
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            // console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'success',
                    message: 'Failed to retrieved'
                })
        })
}

function getProductsByID(req, res) {
    db.any('select * from products where product_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function insertProduct(req, res) {
    db.none('insert into products(product_id, title, price, created_at, tags)' +
        'values(${product_id}, ${title}, ${price}, ${created_at}, ${tags})', req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateProduct(req, res) {
    db.none('update products set product_id=${product_id},title=${title},price=${price},tags=${tags}' + 'where id=' + req.params.id, req.body) 
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    db.none('delete from products where product_id=' + req.params.id, req.body) 
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//------------------------------ purchase_items
function getAllPurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase_items'
                });
        })
        .catch(function (error) {
            // console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'success',
                    message: 'Failed to retrieved'
                })
        })
}

function getPurchase_idByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function insertPurchase_items(req, res) {
    db.any('insert into purchase_items(id, purchase_id, product_id,price,quantity,state)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity}, ${state})',req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchase_items(req, res) {
    db.any('update purchase_items set purchase_id=${purchase_id},product_id=${product_id},price=${price},quantity=${quantity},state=${state} where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletePurchase_items(req, res) {
    db.none('delete from purchase_items where id=' + req.params.id, req.body) 
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//-----------purchases
function getpurchases(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getPurchasesByID(req, res) {
    db.any('select * from purchases where purchase_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchases id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function insertPurchases(req, res) {
    db.any('insert into purchases(purchase_id,created_at,name,address,state,zipcode,user_id)' +
        'values(${purchase_id}, ${created_at}, ${name}, ${address}, ${status}, ${state},${zipcode},${user_id})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchases(req, res) {
    db.any('update purchases set created_at=${created_at},name=${name},address=${address},state=${state},zipcode=${zipcode},user_id=${user_id} where purchase_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchases id='+req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletePurchases(req, res) {
    db.any('DELETE from purchases where purchase_id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchases'
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//-------users

function getAllUsers(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Users'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getUsersByID(req, res) {
    db.any('select * from users where user_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Users id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function insertUsers(req, res) {
    db.any('insert into users(user_id,email,password,details,created_at)' +
        'values(${user_id}, ${email}, ${password}, ${details}, ${created_at}',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateUsers(req, res) {
    db.any('update users set email=${email},password=${password},details=${details},created_at=${created_at} where user_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'update users id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteUsers(req, res) {
    db.any('DELETE from users where user_id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}