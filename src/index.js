
const express = require('express')
const phone = require('phone');

const PORT = "5000"
const app = express()

app.get("/", (req, res)=>{

    res.status(200).send("<html><body><h1>HOME!!!!</h1></body></html>")

})

app.listen(PORT, ()=>console.log("Corriendo en:" + PORT));

// const server = http.createServer((req, res) => {

//     const urlData = url.parse(req.url, true);
//     const path = urlData.pathname;
//     const query = urlData.query;
//     console.log("path", path);
//     console.log("query", query);

//     switch (path) {
//         case "/":
            
//             break;
//         case "/info":
//             res.writeHead(200, { "Content-Type": "text/html" })
//             res.write("<html><body><h1>INFORMACION</h1></body></html>")
//             break;
//         case "/detail":
//             console.log("Estoy en DETAILS");
//             res.writeHead(200, { "Content-Type": "text/html" })
//             res.write("<html><body><h1>DETALLES</h1></body></html>")
//             break;
//         case "/json":
//             res.writeHead(200, { "Content-Type": "application/json" })
//             res.write(JSON.stringify({ name: "gerardo", apelido: "garcia" }))
//             break;
//         case "/phone":
//             const result = phone(query.value, query.country);
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.write(JSON.stringify(result));
//             break;
//         default:
//             res.writeHead(404, { "Content-Type": "text/html" })
//             res.write("<html><body><h1>ERROR 404</h1></body></html>")
//     }
//     res.end();
// });
