import express from 'express';

export const app = express();
app.get('/a', (req, res) => {
    res.write('a')
    res.end();
})
const port = '8080'
app.listen('8080', () => {
    console.log(__dirname + port)
})


