const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware2');

const server = restify.createServer();

const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
});

server.pre(cors.preflight);
server.use(cors.actual);

server.get('/id', responseForId);
server.listen(8080);


function responseForId(req, res, next) {
    res.send({
        "id": 1
    });
    return next();
}