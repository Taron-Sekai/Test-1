const express = require('express')

const router = express.Router()

const mongoose =require('mongoose')

const product =require('../Schema Modal/Products')

router.get('/',async(req,res)=>{
    try {
        const item = await product.find(req.body)
        res.json(item)
    } catch (error) {
        res.status(500).json({message:message.error})
    }
})
router.post('/',async(req,res)=>{
    try {
        const upload = await product.create(req.body)
        res.json(upload)
    } catch (error) {
        console.log('didnt work')
    }
})



module.exports= router