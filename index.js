
const express = require('express');
const app = express();
const host = '127.0.0.1';
const port = 5000;
const cors= require("cors");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');
const Category = require('./Model/Category');
const Product = require('./Model/Product');
const User = require('./Model/User');
const jwt = require ('jsonwebtoken');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/deep');

const db = mongoose.connection;
db.on('open',function () {
    console.log('db connected');
})
app.post('/register', async(req,res)=>{
    const data = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        mobile:req.body.mobile,
         status:1


    })
  
    data.save();
    return res.json({status:true});

})


app.post('/login',async(req,res)=>{
    const user = await User.findOne(req.body);
    if(!user){
        return res.json({status:false,error:"user not found"});
    }

    const token =jwt.sign(user.toObject(),"loginapikey" );
    return res.json ({status:true,msg:"login successfully" ,token:token });
    
 });


app.get('/getcategories',async(req,res) =>{
    const cat= await Category.find({});
     res.json(cat);
 });


 app.post('/Products',async(req,res) =>{
    const ele= await Product.find({
        category:req.body.id
    })
    return res.json(ele);
 });
 app.post('/all_products',async(req,res) =>{
    const ele= await Product.find({
    })
    return res.json(ele);
 });
 

app.get('/products',async(req,res) =>{
const cate= await Product.find({
    category :req.body.id
});
 res.json(cate);
});











app.get('/getUser',(req,res)=>{

     if (req && req.headers) {
        const user =jwt.verify(req.headers.authorization,"loginapikey");
        res.json(user);
     }

     res.json("not");

});





app.listen(port,host, () => {
    console.log(`server is http://${host}:${port}/`)
})