import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageUi from "../../components/PageBeginngUi/PageUi";
import ProductList from "../../components/ProductsContent/ProductList";
import { toast } from "react-toastify";
import {
  NavTabsContent,
  NavTabsWrapper,
  StarSpan,
  StarIcon,
  StarHalfIcon,
  FullStarIcon,
  AddToCartBtn,
  AvgRating,
  LeftContainer,
  ProductDetailsImg,
  ProductDetailsInfo,
  ProductDetailsSection,
  ProductDetailsWrapper,
  ProductName,
  ProductPrice,
  ProductRating,
  RatingIconsWrapper,
  RightContainer,
  Description,
  ProductCategory,
  RatingContainer,
  ProductDetailsNavWrapper,
  TabWrapper,
  TabTitle,
  ReviewsWrapper,
  Ul,
  Li,
  ReviewName,
  ReviewText,
  ReviewsForm,
  Form,
  FormText,
  FormGroup,
  Input,
  Span,
  TextArea,
  ReviewSubmit,
  SimilarProducts,
  SimilarProductsTitle,
  NoProduct,
} from "./ProductDetails.style";
import { MainContainer } from "../../globalStyles/Global.styles";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux-toolkit/cartSlice";
import {
  fetchProducts,
  fetchProductDetails,
  removeSelectedProduct
} from "../../redux-toolkit/productsSlice";
import Loading from "../../customHooks/Loading";
const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const [rate, setRate] = useState(null);
  const userReviewName = useRef();
  const userReviewMsg = useRef();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, products, loading, error} = useSelector((state) => state.products);
  const item = products?.find(el => el.id === id);
  const {
    productName,
    imgUrl,
    description,
    price,
    avgRating,
    reviews,
    shortDesc,
    category,
  } = product;
  const addToCartFn = () => {
      dispatch(addToCart({ id, productName, imgUrl: imgUrl, price }));
      toast.success("Product added to cart successfully");
  };
  const ratingStars = Array.from({ length: 5 }, (el, index) => {
    let number = index + 0.5;
    return (
      <StarSpan key={index}>
        {avgRating >= index + 1 ? (
          <FullStarIcon />
        ) : avgRating >= number ? (
          <StarHalfIcon />
        ) : (
          <StarIcon />
        )}
      </StarSpan>
    );
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const userNameReview = userReviewName.current.value;
    const userMsgReview = userReviewMsg.current.value;
    const obj = {
      userNameOfReview: userNameReview,
      userMsgOfReview: userMsgReview,
      startRate: rate,
    };
    console.log(obj);
    toast.success("Review Added Successfully");
    userReviewName.current.value = "";
    userReviewMsg.current.value = "";
  };
  const similarProducts = products.filter((el) => el.category === category);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductDetails(id));
    return () => dispatch(removeSelectedProduct());
  }, [dispatch, id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <PageTitle title={productName || "Product Details"}>
      <PageUi title={productName} />
      <ProductDetailsSection>
        <MainContainer>
        <Loading loading={loading} error={error}>
        {item ? 
          Object.keys(product).length > 0 && (
            <>
            <ProductDetailsWrapper>
            <LeftContainer>
              <ProductDetailsImg src={imgUrl} alt="Product Details Img" />
            </LeftContainer>
            <RightContainer>
              <ProductDetailsInfo>
                <ProductName>{productName}</ProductName>
                <ProductRating>
                  <RatingIconsWrapper>{ratingStars}</RatingIconsWrapper>
                  <AvgRating>
                    (<RatingContainer>{avgRating || ""}</RatingContainer> ratings)
                  </AvgRating>
                </ProductRating>
                <ProductPrice>${price}</ProductPrice>
                <ProductCategory>Category: {category}</ProductCategory>
                <Description>{shortDesc}</Description>
                <AddToCartBtn
                  as={motion.button}
                  whileTap={{ scale: 1.2 }}
                  onClick={addToCartFn}
                >
                  Add To Cart
                </AddToCartBtn>
              </ProductDetailsInfo>
            </RightContainer>
          </ProductDetailsWrapper>
          <ProductDetailsNavWrapper>
            <MainContainer>
              <NavTabsWrapper>
                <TabWrapper>
                  <TabTitle
                    className={`${tab === "desc" ? "active" : ""}`}
                    onClick={() => setTab("desc")}
                  >
                    Description
                  </TabTitle>
                  <TabTitle
                    className={`${tab === "rev" ? "active" : ""}`}
                    onClick={() => setTab("rev")}
                  >
                    Reviews ({reviews ? reviews.length : 0})
                  </TabTitle>
                </TabWrapper>

                {tab === "desc" ? (
                  <NavTabsContent>
                    <Description>{description}</Description>
                  </NavTabsContent>
                ) : (
                  <NavTabsContent>
                    <ReviewsWrapper>
                      <Ul>
                        {reviews?.map((el, index) => (
                          <Li key={index}>
                            <ReviewName>Jhon Deo</ReviewName>
                            <RatingContainer>
                              {el.rating} ( rating)
                            </RatingContainer>
                            <ReviewText>{el.text}</ReviewText>
                          </Li>
                        ))}
                      </Ul>
                      <ReviewsForm>
                        <FormText>Leave your experience</FormText>
                        <Form onSubmit={handleSubmit}>
                          <FormGroup>
                            <Input
                              placeholder="Enter Name"
                              ref={userReviewName}
                              required
                            />
                          </FormGroup>
                          <FormGroup>
                            <Span
                              onClick={() => setRate(1)}
                              as={motion.span}
                              whileTap={{ scale: 1.2 }}
                            >
                              1<FullStarIcon />
                            </Span>
                            <Span
                              onClick={() => setRate(2)}
                              as={motion.span}
                              whileTap={{ scale: 1.2 }}
                            >
                              2<FullStarIcon />
                            </Span>
                            <Span
                              onClick={() => setRate(3)}
                              as={motion.span}
                              whileTap={{ scale: 1.2 }}
                            >
                              3<FullStarIcon />
                            </Span>
                            <Span
                              onClick={() => setRate(4)}
                              as={motion.span}
                              whileTap={{ scale: 1.2 }}
                            >
                              4<FullStarIcon />
                            </Span>
                            <Span
                              onClick={() => setRate(5)}
                              as={motion.span}
                              whileTap={{ scale: 1.2 }}
                            >
                              5<FullStarIcon />
                            </Span>
                          </FormGroup>
                          <FormGroup>
                            <TextArea
                              placeholder="Review Message..."
                              ref={userReviewMsg}
                              required
                            />
                          </FormGroup>
                          <ReviewSubmit
                            as={motion.button}
                            whileTap={{ scale: 1.2 }}
                          >
                            Submit
                          </ReviewSubmit>
                        </Form>
                      </ReviewsForm>
                    </ReviewsWrapper>
                  </NavTabsContent>
                )}
              </NavTabsWrapper>
              <SimilarProducts>
                <SimilarProductsTitle>You might also like</SimilarProductsTitle>
                <ProductList data={similarProducts} />
              </SimilarProducts>
            </MainContainer>
          </ProductDetailsNavWrapper>
            </>
        )
         : <NoProduct>Sorry This Item Not Found</NoProduct>}
        </Loading>
         
        </MainContainer>
      </ProductDetailsSection>
    </PageTitle>
  );
};
export default ProductDetails;
