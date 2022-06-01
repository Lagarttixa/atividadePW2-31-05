const express = require('express');
const router = express.Router();
const db = require('../db');

const root = './';
router.get(
    "/",(request,response)=>{
        response.sendFile('dist/index.html',{root});
    }
);

router.get(   //R - Read
    "/", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.get(   //R - Read
    "/:ids", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.get(
    "/route-geral",(request,response)=>{
        response.send("route-geral funcionando com suucesos!!!!!!!");
    }
);


module.exports = router;