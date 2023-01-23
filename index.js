const express = require('express')

const cors = require('cors')

const dataService = require('./dataService')

const app = express()

app.use(express.json())

app.use(cors({
    origin:'http://localhost:4200'
}))


app.listen(3000,()=>{
    console.log('Server Started at 3000');
}) 

// getAllProducts API
app.get('/all-products',(req,res)=>{
    console.log('inside getAllProducts function');
    dataService.getAllProducts()
    .then((result)=>{
         res.status(result.statusCode).json(result)
    })
})

// addToWishlist API
app.post('/add-to-wishlist',(req,res)=>{
    console.log('Inside add-to-wishlist function');
    console.log(req.body);
    dataService.addToWishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// get-wishlist API
app.get('/get-wishlist',(req,res)=>{
    console.log('Inside get-wishlist function');
    console.log(req.body);
    dataService.getWishlist()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// delete-item-wishlist API
app.delete('/delete-item-wishlist/:id',(req,res)=>{
    console.log('inside delete-item-wishlist function');
    dataService.deleteItemWishlist(req.params.id)
.then((result)=>{
    res.status(result.statusCode).json(result)
})
})