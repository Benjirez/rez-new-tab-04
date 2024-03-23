const router = require('express').Router()
const oldModels = require('../models/OldModels.js')
let myData
let myColl
//const currentModel = []
//const multer = require('multer')

//router.use(multer().none())

router.get('/:coll', async (req, res)=>{
    myColl = await oldModels[req.params.coll]

    myData = await myColl.find()
    res.json( myData )
    //console.log(  myData )
})

//multer().none()

router.post('/:coll', async ( req, res )=>{
    //console.log( req.body )
    myColl = await oldModels[(req.params.coll - 1)]
    const data = new myColl({
        col_a: req.body.col_a, 
        col_b: req.body.col_b, 
        col_c: req.body.col_c,
        col_d: req.body.col_d,
        col_e: req.body.col_e,
        col_f: req.body.col_f,
        col_g: req.body.col_g,
        col_h: req.body.col_h
    })
    
   await data.save()
    myData = await myColl.find()
    res.json( myData )
    //console.log( users )
})

// multer().none()
router.delete('/:id', async ( req, res )=>{
    console.log (`***DELETE*** ${req.params.id}`)
    const data = await myColl.findByIdAndDelete( req.params.id )
    myData = await myColl.find()
    res.json( myData )
    
    /*
    .then( ()=>{  console.log('gone bye-bye' ) })
    .then( ()=>{ res.status(201)})
    .then( ()=>{ res.json( 'fini vanana')})
    */

})
module.exports = router