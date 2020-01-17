const fs = require("fs");
const http = require("http");

http
  .createServer((req, response) => {
    let template = fs.readFileSync(__dirname + "/index.html", {
      encoding: "utf-8"
    });
    const htmlDes = "adfadfadfadf";
    template = template.replace(
      /\<meta name=\"description\" content=\"\"\ \/>/,
      '<meta name="description" content="' + htmlDes + '">'
    );
    const json = {
      a: 'a',
      b: 'b',
    }
    template = template.replace(
      /\<script type=\"application\" \/>/,
      `<script type="application/ld+json">${JSON.stringify(json)}</script>`
    );
    console.log(template);
    response.write(template);
    response.end();
  })
  .listen("3001");
