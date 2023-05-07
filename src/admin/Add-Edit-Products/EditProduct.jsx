import React, { useState, useEffect, useRef } from "react";
import WithGuard from "../../customHooks/WithGuard";
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
  UploadBtn,
  EditIcon,
  ProductImage,
  EditImageContent,
} from "./AddProducts.style";
import PageTitle from "../../components/PageTitle/PageTitle";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../customHooks/Loading";
import {
  fetchProductDetails,
  updateProduct,
} from "../../redux-toolkit/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
const EditProduct = () => {
  const [productId, setProductId] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productShortDesc, setProductShortDesc] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileRef = useRef();
  const navigate = useNavigate();
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.products);
  const uploadImg = () => {
    fileRef.current.click();
  };
  const editProductFn = (e) => {
    e.preventDefault();
    const productData = {
      id: productId,
      productName: productTitle,
      imgUrl: `${
        productImage === null ? product.imgUrl : "/images/" + productImage.name
      }`,
      category: productCategory,
      price: productPrice,
      shortDesc: productShortDesc,
      description: productDescription,
    };
    dispatch(updateProduct({ item: productData, id: itemId }))
      .unwrap()
      .then(() => {
        toast.success("Product updated successfully");
        navigate("/dashboard/all-products");
      })
      .catch((err) => {
        toast.error("Product can not updated");
      });
  };
  useEffect(() => {
    dispatch(fetchProductDetails(itemId));
  }, [dispatch, itemId]);
  useEffect(() => {
    setProductId(product.id);
    setProductTitle(product.productName);
    setProductShortDesc(product.shortDesc);
    setProductDescription(product.description);
    setProductPrice(product.price);
    setProductCategory(product.category);
    setSelectedImage(product.imgUrl);
  }, [product]);
  return (
    <PageTitle title="Edit-Product">
      <AdminNavbar />
      <AddEditProductsSection>
        <MainContainer>
          <Wrapper>
            <Loading loading={loading} error={error}>
              <Title>Edit Product</Title>
              <Form onSubmit={editProductFn}>
                <FormGroup>
                  <Label htmlFor="name">Product title</Label>
                  <Input
                    type="text"
                    placeholder="Double sofa"
                    id="name"
                    value={productTitle || ""}
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
                    value={productShortDesc || ""}
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
                    value={productDescription || ""}
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
                      value={productPrice || ""}
                      onChange={(e) => setProductPrice(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="category">Category</Label>
                    <Select
                      id="category"
                      value={productCategory || ""}
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
                  <EditImageContent>
                    <ProductImage src={selectedImage} />
                    <UploadBtn type="button" onClick={uploadImg}>
                      <EditIcon />
                      Edit Image
                    </UploadBtn>
                  </EditImageContent>
                  <Input
                    type="file"
                    onChange={(e) => {
                      setSelectedImage(URL.createObjectURL(e.target.files[0]));
                      setProductImage(e.target.files[0]);
                    }}
                    ref={fileRef}
                    hidden
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

export default WithGuard(EditProduct);
