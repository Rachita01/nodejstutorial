// const Person = require('./person');

// const person1 = new Person('Sumeet',28);

// person1.greeting();

// const Logger = require('./reference/logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener',data));

// logger.log('I am first one');
// logger.log('I am second one');

const http =  require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) =>{
let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html' : req.url);

let extname = path.extname(filePath);

let contentType = 'text/html';

switch(extname){
    case '.js' : contentType = 'text/javascript';
    break;
    case '.css' : contentType = 'text/css';
    break;
    case '.json' : contentType = 'application/json';
    break;
    case '.png' : contentType = 'image/png';
    break;
}

        fs.readFile(
            filePath, (err,content) => {
                if(err){
                    if(err.code = "ENDENT"){
                        fs.readFile(path.join(__dirname,'public','404page.html'),(err,content) => 
                        {
                            res.writeHead(200,{'Content-Type':contentType});
                            res.end(content,'utf8');
                        })
                    }
                    else{
                        res.writeHead(500);
                        res.end(`Server error: ${err.code}`)
                    }
                }
                else{
                    res.writeHead(200,{'Content-Type':contentType});
                    res.end(content,'utf8');
                }
            }
        );
 
    })

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
