const express = require("express");
const router = express.Router();
const Product = require("../models/product");

//post product details
router.post("/post", async (req, res) => {
  try {
    const {
      image,
      product_head,
      product_name,
      product_price,
      product_color,
      product_type,
      product_description,
      availability,
      brand,
    } = req.body;

    const postDetails = await Product.create({
      image,
      product_head,
      product_name,
      product_price,
      product_color,
      product_type,
      product_description,
      availability,
      brand,
    });

    return res.status(200).json({
      status: "success",
      message: "details posted successfully",
      details: postDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "internal server error",
    });
  }
});

//get all products
router.get("/products", async (req, res) => {
  try {
    const productData = await Product.find();
    if (!productData) {
      return res.status(404).json({
        status: "failed",
        msg: "data not found",
      });
    }
    return res.status(200).json({
      status: "success",
      products: productData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      msg: "internal server error",
    });
  }
});

//api to fetch all product types
router.get("/type", async (req, res) => {
  try {
    const product_type = await Product.distinct("product_type");
    res.json({
      product_type,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//api to fetch selected type
router.get("/selectedType", async (req, res) => {
  try {
    const { selectedType } = req.query;
    console.log(selectedType);

    if (!selectedType) {
      return res.status(400).json({ error: "Type is required" });
    }

    const filteredTypes = await Product.find({ product_type: selectedType });
    res.json({ filteredTypes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//api to fetch all brands
router.get("/brand", async (req, res) => {
  try {
    const brand = await Product.distinct("brand");
    res.json({
      brand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//api to fetch selected brands
router.get("/selectedBrand", async (req, res) => {
  try {
    const { selectedBrand } = req.query;
    console.log(selectedBrand);

    if (!selectedBrand) {
      return res.status(400).json({ error: "Brand is required" });
    }

    const filteredBrand = await Product.find({ brand: selectedBrand });
    res.json({ filteredBrand });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//api to fetch all colors
router.get("/color", async (req, res) => {
  try {
    const color = await Product.distinct("product_color");
    res.json({
      color,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//api to fetch selected color
router.get("/selectedColor", async (req, res) => {
  try {
    const { selectedColor } = req.query;
    console.log(selectedColor);

    if (!selectedColor) {
      return res.status(400).json({ error: "Color is required" });
    }

    const filteredColor = await Product.find({ product_color: selectedColor });
    res.json({ filteredColor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
