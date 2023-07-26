const mongoose=  require("mongoose");

const OrderSchema =new mongoose.Schema({

    firstname : {
        type: String
    },
    lastname : {
        type: String
    },
    username : {
        type: String
    },
    email : {
        type: String
    },
    address : {
        type: String
    },
    country: {
        type: String
    },
    state : {
        type: String
    },
    countryCodes : {
        type: String
    },
    zip : {
        type: String
    },
    cartname : {
        type: String
    },
    cardnumber : {
        type: Number
    },
    expiry : {
        type: Number
    },
    cvv : {
        type: Number
    },
    status : {
        type: String,
        default: 1
    }
});

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;