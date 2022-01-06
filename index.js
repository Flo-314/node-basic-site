const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8080;
const express = require("express")
let path = "./htmlFiles/";



const app = express()

app.get('/', function(req, res) {
  res.sendFile(path+"home.html" ,{root: __dirname})
});
app.get('/about', function(req, res) {
  res.sendFile(path+"about.html", {root: __dirname})
});
app.get('/contact-me', function(req, res) {
  res.sendFile(path+"contact-me.html" ,{root: __dirname})
});
app.get('/', function(req, res) {
  res.sendFile(path+"home.html",{root: __dirname})
});

app.use((req,res) =>{
  res.sendFile(path+"404.html",{root: __dirname})
})


app.listen(port, () =>{
  console.log("listeneando")
})
/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      path += "home.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;
    default:
      path += "404.html";
  }


   fs.readFile(path, (err, data) => {
    console.log(path);
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  }); 



});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
 */