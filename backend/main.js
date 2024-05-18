const restify = require('restify');

const server = restify.createServer();
server.get('/', response)
server.listen(8080);


function response(req, res, next) {
    res.send({
        "id": 1
    });
    return next();
}