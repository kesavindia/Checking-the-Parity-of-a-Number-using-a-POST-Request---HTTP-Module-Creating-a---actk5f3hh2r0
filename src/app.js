const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
       
      const str = Buffer.from(chunk).toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value = obj.num;
    
     // Write the code here to check if the number is odd or even
     if(value%2==0){
      res.writeHead(200,{"Content-Type":"text/plain"});
      res.end(`The number ${value} is even`)
     }else if(value%2!=0){
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end(`The number ${value} is odd`)
     }else{
      res.writeHead(400,{"Content-Type":"text/plain"})
      res.end(`This is not a number`);
         }
   });
  }  
});
module.exports = server;
