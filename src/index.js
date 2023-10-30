const app = require('express')();

app.get('/', (req, res) => {
    res.join({ message: 'Docker is easey' })
});

const port = process.env.port || 8888;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));