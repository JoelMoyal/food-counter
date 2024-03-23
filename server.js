const http = require('http');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static('./Style'));
app.use(express.static('./Images'));
app.use(express.static("public"));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
        html = fs.readFileSync('./Public/Views/index.html');
        res.write(html);
        res.end();
});
app.get('/index.html', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
        html = fs.readFileSync('./Public/Views/index.html');
        res.write(html);
        res.end();
});
app.get('/about.html', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
        html = fs.readFileSync('./Public/Views/about.html');
        res.write(html);
        res.end();
});
app.get('/angebot.html', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
        html = fs.readFileSync('./Public/Views/angebot.html');
        res.write(html);
        res.end();
});
app.get('/kontakt.html', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
        html = fs.readFileSync('./Public/Views/kontakt.html');
        res.write(html);
        res.end();
});

//const server = http.createServer(app);
const port = process.env.PORT || 3000;
app.listen(port,() =>{
  console.log(`listening on ` + port);
})

console.debug('Server listening on port ' + port);
 