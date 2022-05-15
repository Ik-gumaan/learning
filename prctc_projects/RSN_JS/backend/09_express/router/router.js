const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.listen(3001, () => {
    console.log('express started on: http:/localhost:3001');
})