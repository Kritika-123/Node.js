const http=require("http");
const server=http.createServer((req,res)=>{
res.end("hello i am a response");
});
server.listen(1000 ,()=>{
    console.log("listening to port number 1000")
});
