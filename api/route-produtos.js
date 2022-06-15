const express = require('express');
const router = express.Router();
const db = require('../db');

const root = './';
router.get(
    "/prod",(request,response)=>{
        response.sendFile('dist/index.html',{root});
    }
);

router.get(   //R - Read
    "/products", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.post( // C  - Create
    "/products",async (request,response)=>{
        const dados = await db.insertTb(request.body);
        console.log(request.body);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.get(    // R - Read with where
    "/products/:ids", async (request,response) => {
        const dados = await db.selectWhereTb(request.params.ids);
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        );
    }
);
router.put( // U - Update
    "/products/:ids",async (request,response)=>{
        const result = await db.updateTb(request.body);
        response.send(
            JSON.stringify(result)
        );
    }
);

router.get(   //R - Read
    "/products/sku/:sku", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.put(   //R - Read
    "/products/sku/:sku", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.put(   //R - Read
    "/products/options/:ids", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.put(   //R - Read
    "/products/options/sku/:sku", async (request,response)=>{
        const dados = await db.selectTb();
        console.log('Get...');
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);
router.delete( // D - Delete
    "/delete/options/sku/:ids/:sku",async (request,response)=>{
        const result = await db.deleteWhereTB(request.params.ids);
        response.send(
            JSON.stringify(result)
        );
    }
);

router.delete( // D - Delete
    "/delete/specials/:ids",async (request,response)=>{
        const result = await db.deleteWhereTB(request.params.ids);
        response.send(
            JSON.stringify(result)
        );
    }
);

router.get(
    "/route-produtos",(request,response)=>{
        response.send("route-produtos funcionando com suucesos!!!!!!!");
    }
);


module.exports = router;