import React from "react";
import {
  ProductImg,
  ProductImgWrapper,
  ProductInfo,
  ProductItem,
  ProductName,
  AddToCartIcon,
  ProductPrice,
  IconContainer,
  ProductCategory,
  ProductLink,
} from "./Products.style";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux-toolkit/cartSlice";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import UseAuth from '../../customHooks/UseAuth';
const ProductCard = ({ item }) => {
  let location = useLocation();
  const dispatch = useDispatch();
  const addToCartFn = () => {
      dispatch(
        addToCart({
          id: item.id,
          productName: item.productName,
          imgUrl: item.imgUrl,
          price: item.price,
        })
      );
      toast.success("Product added to cart successfully");
  };
  const navigationFn = (product) => {
    return location.pathname === "/shop"
      ? `${product.id}`
      : location.pathname === `shop/${product.id}`
      ? `#`
      : `/shop/${product.id}`;
  };
  return (
    <ProductItem>
      <ProductImgWrapper>
        <ProductImg
          as={motion.img}
          whileHover={{ scale: 0.9 }}
          src={item.imgUrl}
          alt=""
        />
      </ProductImgWrapper>
      <ProductName>
        <ProductLink to={navigationFn(item)}>{item.productName}</ProductLink>
      </ProductName>
      <ProductCategory>{item.category}</ProductCategory>
      <ProductInfo>
        <ProductPrice>${item.price}</ProductPrice>
        <IconContainer
          as={motion.span}
          whileTap={{ scale: 1.9 }}
          onClick={addToCartFn}
        >
          <AddToCartIcon />
        </IconContainer>
      </ProductInfo>
    </ProductItem>
  );
};

export default ProductCard;
