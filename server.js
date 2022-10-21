const express = require('express');
const app = express();
app.use(express.static(__dirname));


let port = 8000;
app.listen(port, (err)=> {
    if(!err) {
        console.log(`connect server on port ${port}`)
    }
});