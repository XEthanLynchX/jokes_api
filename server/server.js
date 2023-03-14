const express = require("express");
const app = express();
port = 8000;
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
require("./routes/jokes.routes")(app);
    
app.listen(8000, () => console.log("The server is all fired up on" ,{port}));