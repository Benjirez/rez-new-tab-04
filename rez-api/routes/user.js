const router = require('express').Router()
const User = require('../models/User.js')
//const multer = require('multer')

//router.use(multer().none())

router.get('/', async (req, res)=>{
    const users = await User.find()
    res.json( users )
    //console.log( users )
})

//multer().none()

router.post('/', async ( req, res )=>{
    //console.log( req.body )
    const user = new User({
        a: req.body.a, 
        b: req.body.b, 
        c: req.body.c,
        d: req.body.d
    })
    await user.save()
    users = await User.find()
    res.json( users )
    console.log( users )
})

// multer().none()
router.delete('/:id', async ( req, res )=>{
 
    const user = await User.findByIdAndDelete( req.params.id )
    const users = await User.find()
    res.json( users)
    
    /*
    .then( ()=>{  console.log('gone bye-bye' ) })
    .then( ()=>{ res.status(201)})
    .then( ()=>{ res.json( 'fini vanana')})
    */

})
module.exports = router