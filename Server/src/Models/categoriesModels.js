const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  category: {type: String,required: [true, "Please Enter Category Name"]},
  categoryImg:{type:String},
  createdAt: {type: Date,default: Date.now},
});
const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;