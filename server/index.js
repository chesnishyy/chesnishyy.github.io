const express = require('express');
const app = express();
const port = process.env.PORT || 3008;

app.use(express.static(`${__dirname}/..`));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: `${__dirname}/..` });
});

app.get('/price-calculator', (req, res) => {
    res.send('PRICE CALCULATOR!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
