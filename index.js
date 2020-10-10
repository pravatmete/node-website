const http = require('http');
const fs = require('fs');
const PORT = 1320;
const server=http.createServer(function(req,res){

if(req.url=='/'){
    let data =fs.readFileSync('home.html','UTF-8');
    res.end(data);


}
else if(req.url=='/about'){
    let data =fs.readFileSync('about.html','UTF-8');
    res.end(data);

}


else if(req.url=='/contact'){
    let data =fs.readFileSync('contact.html','UTF-8');
    res.end(data);

}


else if(req.url=='/services'){
    let data =fs.readFileSync('services.html','UTF-8');
    res.end(data);

}

});
server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
 
})
