const express = require("express");
const router = express.Router();
const Product = require("../models/product");

//post product details
router.post("/post", async (req, res) => {
  try {
    const {
      product_head,
      product_name,
      product_price,
      product_color,
      product_type,
      product_description,
      availability,
      brand,
    } = req.body;

    if (
      !product_head ||
      !product_name ||
      !product_price ||
      !product_color ||
      !product_type ||
      !product_description ||
      !availability ||
      !brand
    ) {
      return res.status(500).json({
        status: "failed",
        message: "all fields are required",
      });
    }

    const postDetails = await Product.create(
      product_head,
      product_name,
      product_price,
      product_color,
      product_type,
      product_description,
      availability,
      brand
    );

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

router.get("/product/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const productData = await Product.findById(id);
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
})


