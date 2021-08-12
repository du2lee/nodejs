var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathName = url.parse(_url, true).pathname;

  if (pathName === '/') {
    if (queryData.id === undefined) {
      console.log(queryData.id)

      fs.readdir('../data', (err, filelist) => {
        console.log(filelist)
        var title = 'Welcome'
        var description = 'Hello, Node.js'
        var list = '<ul>';
        var i = 0
        while (i<filelist.length){
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i++
        }
        list += '</ul>'
        var templete = `<!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>`;
        response.writeHead(200);
        response.end(templete);
      })
    } else {
      fs.readdir('../data', (err, filelist) => {
        console.log(filelist)
        var title = 'Welcome'
        var description = 'Hello, Node.js'
        var list = '<ul>';
        var i = 0
        while (i<filelist.length){
          list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i++
        }
        list += '</ul>'
      var title = queryData.id;
      fs.readFile(`../data/${queryData.id}`, 'utf8', (err, description) => {
        if (err) {
          console.error(err)
          return
        }
        var templete = `<!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>`;
        response.writeHead(200);
        response.end(templete);
      });
    })}
  
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
}

);
app.listen(3000);