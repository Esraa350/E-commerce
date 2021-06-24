const Product = require("../Models/productModels");
const ProductController = {};

//add product
ProductController.addProduct = async (request, response) => {
  if (!request.user.isAdmin)
    return response.status(401).send({ error: "Unauthorized action" });
  const { name, description, price, productImage, category } = request.body;

  const product = new Product({
    name,
    description,
    price,
    productImage,
    category,
  });
  try {
    await product.save();
    return response.status(200).json({ message: "Product Added successfully" });
  } catch (err) {
    return response.status(500).json(err);
  }
};
//list all Products
ProductController.getAllProducts = async (request, response) => {
  try {
    const products = await Product.find({}).select("-__v").populate("category");
    if (!products) {
      return response.status(404).json({ error: "No Products found" });
    }
    return response.status(200).json(products);
  } catch (err) {
    return response.status(500).json(err);
  }
};
//get product by ID
ProductController.getProduct = async (request, response) => {
  const productId = request.params.id;
  try {
    const product = await Product.findById({ _id: productId })
      .select("-__v")
      .populate("category");
    if (!product) {
      return response.status(404).json({ error: "No Product found" });
    }
    return response.status(200).json(product);
  } catch (err) {
    return response.status(500).json(err);
  }
};
//delete Product by ID
ProductController.deleteProduct = async (request, response) => {
  if (!request.user.isAdmin)
    return response.status(401).send({ error: "Unauthorized action" });
  const { id } = request.params;
  try {
    const deleteproduct = await Product.findByIdAndDelete(id)
      .select("-__v")
      .populate("category");
    if (!deleteproduct) {
      return response.status(404).json({ error: "Product not found" });
    }
    return response
      .status(200)
      .json({ message: "Product Deleted Successfully" });
  } catch (err) {
    return response.status(500).json(err);
  }
};
//Edit Product by ID
ProductController.updateProduct=async (request, response) => {
    if (!request.user.isAdmin)
      return response.status(401).send({ error: "Unauthorized action" });
    const { id } = request.params;
    const updatedProduct=request.body;
    try {
      const updateProduct = await Product.updateOne({_id:id},updatedProduct);
      if (!updateProduct) {
        return response.status(404).json({ error: "Product not Updated" });
      }
      return response
        .status(200)
        .json({ message: "Product Updated Successfully" });
    } catch (err) {
      return response.status(500).json(err);
    }
  };
module.exports = ProductController;
