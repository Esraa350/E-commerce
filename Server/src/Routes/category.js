const express = require('express');
const CategoryController = require('../Controllers/categoryController');
const categoryrouter = express.Router();
const userAuth = require("../MiddleWares/Auth");

categoryrouter.post("/", userAuth.auth, CategoryController.addCategory);
categoryrouter.get('/', CategoryController.getCategories);
categoryrouter.patch('/:id', userAuth.auth, CategoryController.updateCategroy);
categoryrouter.delete('/:id', userAuth.auth, CategoryController.deleteCategroy);


module.exports = categoryrouter;