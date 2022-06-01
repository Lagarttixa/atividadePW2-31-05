// APP Construcao em aula...
const express = require('express');
const config = require('config');

const http = require('http');
const reload = require('reload');

const app = express();

app.use(express.json());

app.use(require('./api/route-produtos'));
app.use(require('./api/route-geral'));
app.use(require('./api/route-opcionais'));
app.use(require('./api/route-pedidos'));
app.use(require('./api/route-statusEstoque'));
app.use(require('./api/route-statusPedidos'));

//Swager
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerFile) );

const server = http.createServer(app);

server.listen(
    config.get("api.porta"),
    ()=>{
        console.log(
            config.get("api.msg") + ' - ' +
            config.get("api.caminho") + ':' +
            config.get("api.porta")
        )
    }
);
reload(app);

