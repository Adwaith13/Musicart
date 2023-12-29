const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const isUserAuthenticated = require("../middlewares/isUserAuthenticated");
const fetchUserID = require("../middlewares/fetchUserID");

router.post(
  "/addtocart/:productID",
  fetchUserID,
  isUserAuthenticated,
  async (req, res) => {
    try {
      const userID = req.user._id;
      const productID = req.params.productID;

      let cartItem = await Cart.findOneAndUpdate(
        { user: userID, productID: productID },
        { $inc: { count: 1 } },
        { upsert: true, new: true }
      );

      return res.status(200).json({
        status: "success",
        message: "Product added to Cart",
        product: cartItem,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "failed",
        message: "Internal server error",
      });
    }
  }
);

router.get("/checkout", fetchUserID, isUserAuthenticated, async (req, res) => {
  try {
    const userID = req.user._id;

    const cartItems = await Cart.find({ user: userID }).populate("productID");

    const productsInCart = cartItems.map((cartItem) => ({
      product: cartItem.productID,
      count: cartItem.count,
    }));

    return res.status(200).json({
      status: "success",
      message: "Products in Cart fetched successfully",
      products: productsInCart,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
});

module.exports = router;
