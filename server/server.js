const express = require('express');

//rest object
const app = express();

//rest api
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to HustlersHelp",
    });
});

//PORT
const PORT = 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})