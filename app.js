let express = require("express");

let app = express();

let path = require("path");

app.use('/public', express.static(path.join(__dirname,'public')))

app.listen(3000, console.log("Servidor corriendo en: http://localhost:3000/")); 

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./views/index.html"));

});


