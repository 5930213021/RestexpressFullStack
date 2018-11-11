 var express = require('express');
var app = express();
var db = require('./database');
//database.js สามารถดึงข้อมูลทั้งหมดมาใช้ได้
var cors = require('cors');
app.use(cors())

var bodyParser = require('body-parser');
//ตัวนี้สำคัญ
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
extended: true
}));

//add routing
//index page
app.get('/', function (req, res) {
    res.send('Express is running');
});

var output = {
//สร้างตังแปรขึ้นมาได้เลย แล้วเอาตัวแปรสร้างในobjectใส่ในgetได้เลย
    status: 'success',
    message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

//สร้างruoting เพื่อให้uesrเข้าใช้งาน
app.get('/api/products/',db.getAllProducts);
app.get('/api/products/:id',db.getProductsByID);
app.post('/api/products/',db.insertProduct);
app.put('/api/products/:id',db.updateProduct);
app.delete('/api/products/:id',db.deleteProduct);

app.get('/api/purchase_items/',db.getAllPurchase_items);
app.get('/api/purchase_items/:id',db.getPurchase_idByID);
app.post('/api/purchase_items/',db.insertPurchase_items);
app.put('/api/purchase_items/:id',db.updatePurchase_items);
app.delete('/api/purchase_items/:id',db.deletePurchase_items);

app.get('/api/purchases/',db.getpurchases);
app.get('/api/purchases/:id',db.getPurchasesByID);
app.post('/api/purchases/',db.insertPurchases);
app.put('/api/purchases/:id',db.updatePurchases);
app.delete('/api/purchases/:id',db.deletePurchases);

app.get('/api/users/',db.getAllUsers);
app.get('/api/users/:id',db.getUsersByID);
app.post('/api/users/',db.insertUsers); 
app.put('/api/users/:id',db.updateUsers);
app.delete('/api/users/:id',db.deleteUsers);



var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});