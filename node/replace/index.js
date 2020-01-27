const fs = require("fs");
const http = require("http");

http
  .createServer((req, response) => {
    let template = fs.readFileSync(__dirname + "/index.html", {
      encoding: "utf-8"
    });
    const htmlDes = "adfadfadfadf";
    const jsonInfo = {
      a: 'a',
      b: 'b',
    }
      template = template.replace(
          /\<meta name=\"description\" content=\"\"\/>/,
          '<meta name="description" content="' + htmlDes + '">'
      );
      template = template.replace(
          /\<script type=\"application\">\<\/script\>/,
          `<script type="application/ld+json">${jsonInfo}</script>`
      );

    response.write(template);
    response.end();
  })
  .listen("3001");
