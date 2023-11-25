let express = require("express");

let app = express();

let path = require("path");

app.use('/public', express.static(path.join(__dirname,'public')))

let port = process.env.PORT || 3000;
app.listen(port, console.log("Servidor corriendo en: http://localhost:3000/")); 

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./views/index.html"));

});


