var express = require("express");
var app = express();
var mercadopago = require("mercadopago");
var config = require('./config');
var fs = require('fs');
var bodyParser = require('body-parser');
console.log("Iniciando funciones - Quay");
var https = require('https');
var options = {
  key: fs.readFileSync('/var/www/quay/ssl/private.key'),
  cert: fs.readFileSync('/var/www/quay/ssl/certificate.pem')
};

var httpsServer = https.createServer(options, app);
httpsServer.listen(config.port);
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.setHeader("Content-Type", "text/json");
    next();
});
/*
 *
 *
 *
 * FALTA PROBAR LAS RUTAS Y VER QUE ERRORES PUEDEN DAR
 *
 *
 */

// Add Body Parser Middleware

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Mercado Pago

var oldAccessToken = mercadopago.configurations.getAccessToken();

mercadopago.configure({
  client_id: config.client_id,
  client_secret: config.client_secret
});

/*var payment = {
  description: 'Libro #1',
  transaction_amount: 10500,

  // Esto fue lo unico que cambie. 
  payment_method_id: 'credit_card',
     payer: {
      email: 'matikbird@gmail.com',
      identification: {
        type: 'DNI',
        number: '34123123'
      }
    }, 
  card: {
    id: 4509953566233704,
    cardholder: {
      name: 'Matias',
      identification: {
        type: 'DNI',
        number: '38897220'
      }
    }
  }
};
*/
app.post('/endpoint', function(req, res){
  /* DATA PAYMENT */

 console.log(req.body.payer);
  console.log(req.body.payment_method_id)
;
/*
var a = 0;
var b = 0;

a += ("condition 1")? 1 : 0; b += 1;
a += ("condition 2")? 1 : 0; b += 1;
a += ("condition 3")? 1 : 0; b += 1;
a += ("condition 4")? 1 : 0; b += 1;
a += ("condition 5")? 1 : 0; b += 1;
a += ("condition 6")? 1 : 0; b += 1;
// etc etc

if(a == b) {
    //do stuff
}
*/

  console.log("LINEA ACA");
  var obj = {};
  console.log('body: ' + JSON.stringify(req.body));

    var payment = {
    description: req.body.description,
    transaction_amount: req.body.transaction_amount,
    payment_method_id: req.body.payment_method_id,
    payer: {
      email: req.body.email
    }
  };

 /* DO PAYMENT */
  mercadopago.configurations.setAccessToken(config.access_token);

  mercadopago.payment.create(payment).then(function (data) {
    console.log('true');
    res.send(JSON.stringify(data.response, null, 4));
  }).catch(function (error) {

    console.log('false');
    res.send(error);

  }).finally(function () {
    mercadopago.configurations.setAccessToken(oldAccessToken);
  });

 /* FOR DEVELOP */
 /* res.send(req.body);*/
});

app.get('/methods', function(req, res){
  var obj = {};
  console.log('body: ' + JSON.stringify(req.body));
  res.send(req.body);
});

// Crear un pago
app.get("/create", function (req, res) {
  mercadopago.configurations.setAccessToken(config.access_token);

  mercadopago.payment.create(payment).then(function (data) {
    console.log('true')
    res.send(JSON.stringify(data.response, null, 4));
  }).catch(function (error) {

    console.log('false')
    res.send(error);

  }).finally(function () {
    mercadopago.configurations.setAccessToken(oldAccessToken);
  });
});

// Cancelar Pago
app.get("/cancel", function (req, res) {
  // Set the access_token credentials for testing
  mercadopago.configurations.setAccessToken(config.access_token);

  mercadopago.payment.cancel(parseInt(req.query.id, 10)).then(function (data) {
    console.log('true')
    res.send(JSON.stringify(data, null, 4));
  }).catch(function (error) {

    console.log('false')
    res.send(error);

  }).finally(function () {
    mercadopago.configurations.setAccessToken(oldAccessToken);
  });
});

// Buscar pago

app.get("/search-payment", function (req, res) {
  var filters = {
    site_id: 'MLA',
    external_reference: 'BILL_001'
  };

  // Si es por fecha y email
  /*
  var filters = {
    payer_email: 'test_user_3931694@testuser.com',
    begin_date: mercadopago.utils.date.now().subtract(60).toString(),
    end_date: mercadopago.utils.date.now().toString()
  };
  */

  // Si es tarjeta de credito
  /*
  var filters = {
    range: 'date_created',
    begin_date: mercadopago.utils.date.now().subtract(60).toString(),
    end_date: mercadopago.utils.date.now().toString(),
    payment_type_id: 'credit_card',
    operation_type: 'regular_payment'
  };

  */

  // Si estan aprovados
  /*
  var filters = {
    range: 'date_created',
    begin_date: 'NOW-1MONTH',
    end_date: 'NOW',
    status: 'approved',
    operation_type: 'regular_payment'
  };
  */

  mercadopago.payment.search({
    qs: filters
  }).then(function (data) {
    console.log('true')
    res.send(JSON.stringify(data, null, 4));
  }).catch(function (error) {

    console.log('false')
    res.send(error);

  });
});

// Reembolso

app.get("/refund", function (req, res) {
  // Set the access_token credentials for testing
  mercadopago.configurations.setAccessToken(config.access_token);

  mercadopago.payment.cancel(parseInt(req.query.id, 10)).then(function (data) {
    console.log('true')
    res.send(JSON.stringify(data, null, 4));
  }).catch(function (error) {

    console.log('false')
    res.send(error);

  }).finally(function () {
    mercadopago.configurations.setAccessToken(oldAccessToken);
  });
});

// Notificacion de pago 

app.get("/payment-notification", function (req, res) {
  mercadopago.ipn.manage(req).then(function (data) {
    console.log('true')
    res.send(JSON.stringify(data, null, 4));
  }).catch(function (error) {
    console.log('false')
    res.send(error)
  });
});

// Crear Suscripcion 

app.get("/preapproval-payment", function (req, res) {
  var preapprovalPayment = {
    payer_email: 'test_user_3931694@testuser.com',
    back_url: 'http://www.google.com',
    reason: 'Monthly subscription to premium package',
    external_reference: 'OP-1234',
    auto_recurring: {
      frequency: 1,
      frequency_type: 'months',
      transaction_amount: 60,
      currency_id: 'ARS',
      start_date: mercadopago.utils.date.now().add(1).toString(),
      end_date: mercadopago.utils.date.now().add(3).toString()
    }
  };

  mercadopago.createPreapprovalPayment(preapprovalPayment).then(function (data) {
    console.log('true')
    res.send(JSON.stringify(data, null, 4));
  }).catch(function (error) {
    console.log('false')
    res.send(error)
  });
});

