// npm i swagger-autogen
// npm i swagger-ui-express

// Para atualizar o Swagger
// node swagger.js

const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
    './api/route-geral.js',
    './api/route-opcionais.js',
    './api/route-pedidos.js',
    './api/route-produtos.js',
    './api/route-statusEstoque.js',
    './api/route-statusPedidos.js'
];

swaggerAutogen(outputFile, endpointsFiles);

