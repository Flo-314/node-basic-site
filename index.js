const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8080;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  let path = "./htmlFiles/";

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
