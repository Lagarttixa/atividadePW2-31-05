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
    "/options", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.get(
    "/route-opcionais",(request,response)=>{
        response.send("route-opcionais funcionando com suucesos!!!!!!!");
    }
);

module.exports = router;