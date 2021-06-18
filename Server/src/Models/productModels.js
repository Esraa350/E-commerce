const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please Enter Product Name"] },
    description: {type: String,minlength:[8, "Minimum description Length is 8 character"]},
    price:{type:Number,required:[true,"Please Enter Price of this Product"]},
    productImage:{type:String},
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;