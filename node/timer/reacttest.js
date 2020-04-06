const http = require('http');
const react = require('react');
const reactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

http.createServer((req, res) => {
    const {serverTOSTRING} = reactDOM
    // 这块不能使用jsx就是个问题
    const element = react.createElement('div', {style: {color: 'red'}}, 123);
    res.end(ReactDOMServer.renderToString(element))
}).listen('3001')