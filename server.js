const http = require('http')
const config = require('./config/config_data.conf')
var querystring = require('querystring');

const uname = config.username
const pswd = config.password
const server = config.server
const port = config.port
const protocol = config.protocol
const insertqry = config.insertqry
const fetchqry = config.fetchqry

var url = "http://"+uname+":"+pswd+"@"+server+":"+port+"/db/data/"

var graph = require('neo4j-query')('http://'+uname+':'+pswd+'@'+server+':'+port);

var operation = ''

if(process.argv.length<3){
        console.log("Incomplete arguments supplied... to run the process\n node server.js <test/insert/fetch/delete>")
        process.exit(20)
}

process.argv.forEach((val,index) => {
        if(index>1){
        operation = val
    }
});
    
if(operation=='test'){
/*Test connection*/
        http.get(url,(response)=> {
                let c = ""  
                response.on('data',(chunk)=>{
                c+=chunk.toString('utf-8')
                /*console.log(chunk.toString('utf-8'))*/
                }).on('error',(error)=>{
                console.error(`Got Error: ${error.message}`)
                })

                response.on('end',()=>{
                console.log(`data is  ${c}`)
                })  
        }  ).on('error',(error)=>{
                console.error(`Got Error: ${error.message}`)
        })
}

if(operation=='insert'){
        var data1 = {
                "query" : insertqry,
                "params" : {
                        "props" : {
                          "position" : "Developer",
                          "awesome" : true,
                          "children" : 3
                        }
                      }
        };
        var postData = JSON.stringify(data1);
        // console.log( "postData:->" + postData + "\n")
        var options = {
                'hostname' : server,
                'port'     : port,
                'protocol' : protocol,
                'auth'     : uname + ':' + pswd,
                'path'     : '/db/data/cypher',
                'method'   : 'POST',
                'headers'  : {
                    'Content-Type'   : 'application/json',
                    'Content-Length' : postData.length
                }
        }
        
/* Insert data */
        var req = http.request(options, function (res) {
                console.log('STATUS:', res.statusCode);
                console.log('HEADERS:', JSON.stringify(res.headers));
                // req.setHeader('Content-Length', postData.length);
        
                res.setEncoding('utf8');
        
                res.on('data', function (chunk) {
                console.log('BODY:', chunk);
                });
        
                res.on('end', function () {
                console.log('No more data in response.');
                });
        });
        
        req.on('error', function (e) {
                console.log('Problem with request:', e.message);
        });
        req.setHeader('Content-Length', postData.length);

        console.log(req)
        console.log("\n"+postData)
        
        req.write(postData);
        req.end();
}

if(operation=='fetch'){
        var data1 = {
                "query" : "MATCH (x {name: 'AmanA Madan'}) RETURN x.name",
                "params" : { }
        };
        var postData = JSON.stringify(data1);
        // console.log( "postData:->" + postData + "\n")
        var options = {
                'hostname' : server,
                'port'     : port,
                'protocol' : protocol,
                'auth'     : uname + ':' + pswd,
                'path'     : '/db/data/cypher',
                'method'   : 'POST',
                'headers'  : {
                    'Content-Type'   : 'application/json',
                    'Content-Length' : postData.length
                }
        }
        
/* Generate request to fetch data */
        var req = http.request(options, function (res) {
                console.log('STATUS:', res.statusCode);
                console.log('HEADERS:', JSON.stringify(res.headers));
                // req.setHeader('Content-Length', postData.length);
        
                res.setEncoding('utf8');
        
                res.on('data', function (chunk) {
                console.log('BODY:', chunk);
                });
        
                res.on('end', function () {
                console.log('No more data in response.');
                });
        });
        
        req.on('error', function (e) {
                console.log('Problem with request:', e.message);
        });
        req.setHeader('Content-Length', postData.length);

        console.log(req)
        console.log("\n"+postData)
        
        req.write(postData);
        req.end();
}


/*DELETE DATA*/ 

if(operation=='delete'){
        var data1 = {
                "query" : "MATCH (x {name: 'AmanA Madan'}) RETURN x.name",
                "params" : { }
        };
        var postData = JSON.stringify(data1);
        // console.log( "postData:->" + postData + "\n")
        var options = {
                'hostname' : server,
                'port'     : port,
                'protocol' : protocol,
                'auth'     : uname + ':' + pswd,
                'path'     : '/db/data/cypher',
                'method'   : 'DELETE',
                'headers'  : {
                    'Content-Type'   : 'application/json',
                    'Content-Length' : postData.length
                }
        }
        
/* Generate request to delete data */
        var req = http.request(options, function (res) {
                console.log('STATUS:', res.statusCode);
                console.log('HEADERS:', JSON.stringify(res.headers));
                // req.setHeader('Content-Length', postData.length);
        
                res.setEncoding('utf8');
        
                res.on('data', function (chunk) {
                console.log('BODY:', chunk);
                });
        
                res.on('end', function () {
                console.log('No more data in response.');
                });
        });
        
        req.on('error', function (e) {
                console.log('Problem with request:', e.message);
        });
        req.setHeader('Content-Length', postData.length);

        console.log(req)
        console.log("\n"+postData)
        
        req.write(postData);
        req.end();
}
