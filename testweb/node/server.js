const express = require('express')
const fs = require("fs");
const path = require("path");

const app = express();


app.use('/static', express.static('build/static'));
app.get('/static/*', (req, res) => {
    res.send(path.resolve(__dirname));
})


app.get("*", async (req, res) =>  {
    renderToNodeStream(req, res)
});

/*
slice
 */
function haha(res, string, pos, p) {
    const [start, end] = string.split(pos)
    res.write(start)
    const result = p.then(() => {
        res.write(pos)
    })
    return end
}

async function makeP() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

async function renderToNodeStream(req, res, Component) {
    // 1
    let template = fs.readFileSync("index.html", {
        encoding: "utf-8",
    });
    console.log(template)
    // 2 split

    // setTitle
    let targetPos = '</head>'
    const s1 = await haha(res, template, targetPos, async() => {
        await makeP();
        res.write('<title>' + 123 + '</title>')
    })

    // content
    targetPos = '<div id="root">'
    const s2 = await haha(res, s1, targetPos, async() => {
        const stream = fs.createReadStream(("index2.html"));
        stream.pipe(res, {end: false});
        return new Promise((resolve) => {
            stream.on('end', () => {
                resolve()
            })
        })
    })


    // ssrdata
    targetPos = '<div id="root">'
    const s3 = await haha(res, s2, targetPos, async() => {
        const ssrStoreData = '{a:123, b:123}'
        res.write("<script>var SSRDATA=" + JSON.stringify(ssrStoreData) + ";</script>")
    })

    res.write(s3)
    res.end()
}


app.listen("8080", () => {
    console.log("have listen");
});
