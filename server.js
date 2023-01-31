const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.send("silly");
})

app.listen(1337)