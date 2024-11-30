const { add, sub, multiply, divide } = require("./math.js")
const http = require("http")
const fs = require("fs")
const express = require("express")
const url = require("url")
// const math = require("./math.js")
// console.log("Hey There")
// console.log(`Addition : ${add(125,3)}`);
// console.log(`Subtraction : ${sub(125,3)}`);
// console.log(`Multiplication : ${multiply(125,3)}`);
// console.log(`Division : ${divide(125,3)}`);

// http.createServer((req, res) => {
//     if(req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()} : ${req.method} ${req.url} New Request Recieved\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
    
//     fs.appendFile("log.txt", log, (error, data) => {
//         switch (myUrl.pathname) {
//             case "/": res.end("Home Page"); break;
//             case "/about": res.end("I am a Web Developer"); break;
//             case "/service": res.end("This is service page"); break;
//             default: res.end("404 Not Found ");
//         }
//     });
// }).listen(3000, () => console.log("Listening on port localhost:3000"))

const app = express()
app.get("/", (req, res) => {
    fs.appendFileSync("log.txt", `${new Date().getTime()} : GET ${req.url} New Request Recieved\n`)
    return res.send("Home Page")
})
app.get("/about", (req, res) => {
    fs.appendFileSync("log.txt", `${new Date().getTime()} : GET  ${req.url} New Request Recieved\n`)
    return res.send("Hello from About Page " + req.query.name + " you are " + req.query.age + " years old")
})
app.get("/contact", (req, res) => {
    fs.appendFileSync("log.txt", `${new Date().getTime()} : GET  ${req.url} New Request Recieved\n`)
    return res.send("Contact Page")
})
app.get("/help", (req, res) => {
    fs.appendFileSync("log.txt", `${new Date().getTime()} : GET  ${req.url} New Request Recieved\n`)
    return res.send("Help Page")
})
app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000")
})

