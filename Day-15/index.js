const http = require("http");
const fs = require('fs');
const url = require("url");
//const queryString = require("querystring");

const server = http.createServer((req, res) => {


  console.log(req.url);
  const urlparse = url.parse(req.url, true);
  console.log(urlparse);
  
  
  
  if (urlparse.pathname == "/about" && req.method == "GET") {
    
    fs.readFile('about.html',function(err,data){
        if(err){
            console.log(err);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ page: "About Page", message: "Some error occured" }));
        }else{
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        }
        
    })

  }


  else if(urlparse.pathname == "/login" && req.method == "POST"){
    res.statusCode = 200;
    // res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ "user": "Satyam", "message": "Logged In!" }));
  } 
  
  
  else{
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "Page Not Found" }));
  }     
    
  
});

server.listen(3000, "127.0.0.1", () => {
  console.log(`Server is running`);
});
