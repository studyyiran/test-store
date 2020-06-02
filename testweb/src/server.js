import express from 'express';
import path from 'path'

export const app = express();
// app.use('/static', express.static(path.resolve(__dirname, './build')))
console.log(__dirname)
app.use('/static', express.static(__dirname));
// app.use('/static', express.static('build'));
app.get('/static/*', (req, res) => {
  res.send(path.resolve(__dirname));
})
app.get('/a', (req, res) => {
    res.write('a')
    res.end();
})
const port = '8081'
app.listen(port, () => {
    console.log(__dirname + port)
})


