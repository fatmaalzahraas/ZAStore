import React, { useState } from "react";
import WithGuard from "../../components/WithGuard";
import { MainContainer } from "../../globalStyles/Global.styles";
import {
  AddEditProductsSection,
  Div,
  Form,
  FormGroup,
  Input,
  Label,
  Select,
  Option,
  Title,
  Wrapper,
  SubmitBtn,
} from "./AddProducts.style";
import PageTitle from "../../components/PageTitle/PageTitle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { addProduct } from "../../redux-toolkit/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
const AddProducts = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productShortDesc, setProductShortDesc] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);
  const addProductFn = async (e) => {
    e.preventDefault();
    const product = {
      id: Math.floor(Math.random() * 500),
      productName: productTitle,
      shortDesc: productShortDesc,
      description: productDescription,
      price: productPrice,
      category: productCategory,
      imgUrl: `/images/${productImage.name}`,
    };
    dispatch(addProduct(product))
      .unwrap()
      .then(() => {
        toast.success("Product added successfully");
        navigate("/dashboard/all-products");
      })
      .catch((err) => {
        toast.error("Product not added !");
      });
  };
  return (
    <PageTitle title="Add-Product">
      <AdminNavbar />
      <AddEditProductsSection>
        <MainContainer>
          <Wrapper>
            <Loading loading={loading} error={error}>
              <Title>Add Product</Title>
              <Form onSubmit={addProductFn}>
                <FormGroup>
                  <Label htmlFor="name">Product title</Label>
                  <Input
                    type="text"
                    placeholder="Double sofa"
                    id="name"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="shortDesc">Short Description</Label>
                  <Input
                    type="text"
                    placeholder="Lorem...."
                    id="shortDesc"
                    value={productShortDesc}
                    onChange={(e) => setProductShortDesc(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="desc">Description</Label>
                  <Input
                    type="text"
                    placeholder="Description"
                    id="desc"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                  />
                </FormGroup>
                <Div>
                  <FormGroup>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      type="number"
                      placeholder="$100"
                      id="price"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      id="category"
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                    >
                      <Option value="sofa">Sofa</Option>
                      <Option value="chair">Chair</Option>
                      <Option value="mobile">Mobile</Option>
                      <Option value="watch">Watch</Option>
                      <Option value="wireless">wireless</Option>
                    </Select>
                  </FormGroup>
                </Div>
                <FormGroup>
                  <Label>Product image</Label>
                  <Input
                    type="file"
                    onChange={(e) => setProductImage(e.target.files[0])}
                    required
                  />
                </FormGroup>
                <SubmitBtn type="submit">Add Product</SubmitBtn>
              </Form>
            </Loading>
          </Wrapper>
        </MainContainer>
      </AddEditProductsSection>
    </PageTitle>
  );
};

export default WithGuard(AddProducts);
