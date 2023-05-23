const { Router } = require("express");
const store = require ("../db");
const {validateModels} = require ("../middlewares")

const router = Router();

router.get("/:model", validateModels, async(req, res)=>{
    const {model} =req.params;
    const response = await store[model].list();
    res.status(200).json(response)
});

router.get("/:model/:id", validateModels, async(req, res)=>{
    const {id, model} =req.params;
    const response = await store[model].get(id);
    res.status(200).json(response)
});

router.post("/:model", validateModels, async(req, res)=>{
    const {model} =req.params;
    const nuevo = req.body
    const response = await store[model].insert(nuevo);
    res.status(200),json(response)
})

module.exports = router