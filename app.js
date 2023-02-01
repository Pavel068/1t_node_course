const express = require('express');
const port = 3000;

const app = express();

const innerApi = require('./routes/inner_api');
const outerApi = require('./routes/outer_api');

app.use('/api', innerApi);
app.use('/admin-api', outerApi);

app.listen(port, () => {
    console.log(`Server started on ${port} port`);
});