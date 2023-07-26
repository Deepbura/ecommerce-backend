const mongoose=require("mongoose");
const CartSchema =new mongoose.Schema({
 
    id:{
        type:String

    },
    name:{
        type:String

    },
    image:{
        type:String

    },
  
    status:{
        type:Number,
        default:1
    }

});

const Category =mongoose.model("categories" , CartSchema);

module.exports = Category;