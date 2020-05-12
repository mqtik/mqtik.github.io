console.log("Iniciando funciones - Quay");

var express = require('express');
var  nano    = require('nano')('http://mQ:24230112@localhost:5984');
var app = express();
var db_name = "_users";
 var db      = nano.use(db_name);
var bodyParser = require('body-parser');
var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('/var/www/quay/ssl/private.key'),
  cert: fs.readFileSync('/var/www/quay/ssl/certificate.pem')
};

var httpsServer = https.createServer(options, app);
httpsServer.listen(3471);
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.setHeader("Content-Type", "text/json");
    next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

function generarid() {
    return ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).slice(-4)
}

app.get("/dni/:dni", function(request,response) {
  db.get('org.couchdb.user:'+request.params.dni, function(err, body, header) {
    if(body){
      if(body._id == 'org.couchdb.user:'+request.params.dni){
      response.end("1");
      console.log(body);
    } else {
        response.end("0");
      }} else {
        response.end("0");
      }
});
});

app.get("/", function(request,response) {
      response.send("Quay // ¿Qué haces aqui?");
});

console.log("uQauth Auth funcionando sin problemas en 3471");
