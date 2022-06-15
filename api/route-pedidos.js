const express = require('express');
const router = express.Router();
const db = require('../db');

const root = './';
router.get(
    "/ped",(request,response)=>{
        response.sendFile('dist/index.html',{root});
    }
);

router.get(   //R - Read
    "/orders", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.get(   //R - Read
    "/orders/:ids", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.put( // U - Update
    "/orders/status/:ids",async (request,response)=>{
        const result = await db.updateTb(request.body);
        response.send(
            JSON.stringify(result)
        );
    }
);

router.post( // C  - Create
    "/orders/nfe/:ids",async (request,response)=>{
        const dados = await db.insertTb(request.body);
        console.log(request.body);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.post( // C  - Create
    "/orders/tracking/:ids",async (request,response)=>{
        const dados = await db.insertTb(request.body);
        console.log(request.body);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.get(
    "/route-pedidos",(request,response)=>{
        response.send("route-pedidos funcionando com suucesos!!!!!!!");
    }
);



module.exports = router;