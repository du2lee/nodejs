var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathName = url.parse(_url, true).pathname;

  if (pathName === '/') {
    if (queryData.id === undefined) {
      fs.readdir('../data', (err, filelist) => {
        var title = 'Welcome'
        var description = 'Hello, Node.js'
        response.writeHead(200);
        response.end(templete(title, description, fileList(filelist)));
      })
    } else {
      fs.readdir('../data', (err, filelist) => {
        fs.readFile(`../data/${queryData.id}`, 'utf8', (err, description) => {
          var title = queryData.id;
          response.writeHead(200);
          response.end(templete(title, description, fileList(filelist)));
        });
      })
    }
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);


function templete(title, description, list) {
  var body = `<h2>${title}</h2> <p>${description}</p>`
  var templete = `<!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          ${list}
          ${body}
        </body>
        </html>`;
  return templete
}

function fileList(filelist){
  var list = '<ul>';
  var i = 0
  while (i < filelist.length) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i++
  }
  list += '</ul>'
  return list
}