import {app} from './server'

app.post('/post', (req, res) => {
    const {body} = req
    res.send(JSON.stringify(body))
})