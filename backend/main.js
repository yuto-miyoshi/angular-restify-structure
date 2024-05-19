const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware2');

const server = restify.createServer();

const cors = corsMiddleware({
    origins: ['http://localhost:4200'],
});

server.pre(cors.preflight);
server.use(cors.actual);

server.get('/', response);
server.listen(8080);


function response(req, res, next) {
    res.send({
        "id": 1
    });
    return next();
}