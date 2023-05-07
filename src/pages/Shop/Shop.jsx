import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageUi from "../../components/PageBeginngUi/PageUi";
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  ShopSection,
  FilteringWrapper,
  FilterBox,
  SearchFilter,
  SelectBox,
  Option,
  SearchInput,
  SearchIcon,
  FilterHeading,
  FilterDataSection,
} from "./Shop.style";
import { MainContainer } from "../../globalStyles/Global.styles";
import ProductList from "../../components/ProductsContent/ProductList";
import { fetchProducts } from "../../redux-toolkit/productsSlice";
import Loading from '../../customHooks/Loading';
const Shop = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const [productsData, setProductsData] = useState(products);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    setProductsData(products);
  }, [products]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleFilterByCategory = (e) => {
    const filterValue = e.target.value;
    const filteredProducts = products.filter(
      (product) => product.category === filterValue
    );
    setProductsData(filteredProducts);
    if (filterValue === "all") {
      setProductsData(products);
    }
    if (filterValue === "asc") {
      const filteredProducts = products
        .slice()
        .sort((el1, el2) => el1.productName.localeCompare(el2.productName));
      setProductsData([...filteredProducts]);
    }
    if (filterValue === "desc") {
      const filteredProducts = products
        .slice()
        .sort((el1, el2) => el2.productName.localeCompare(el1.productName));
      setProductsData([...filteredProducts]);
    }
    if (filterValue === "lowest price") {
      const filteredProducts = products
        .slice()
        .sort((el1, el2) =>
          el1.price
            .toString()
            .localeCompare(el2.price, undefined, { numeric: true })
        );
      setProductsData([...filteredProducts]);
    }
    if (filterValue === "highest price") {
      const filteredProducts = products
        .slice()
        .sort((el1, el2) =>
          el2.price
            .toString()
            .localeCompare(el1.price, undefined, { numeric: true })
        );
      setProductsData([...filteredProducts]);
    }
  };
  const handleFilterBySearch = (e) => {
    const searchValue = e.target.value;
    const filteredProducts = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsData(filteredProducts);
  };
  return (
    <PageTitle title="Shop">
      <PageUi title="Products" />
      <ShopSection>
        <MainContainer>
          <FilteringWrapper>
            <FilterBox>
              <SelectBox onChange={handleFilterByCategory}>
                <Option value="all">Filter Products By(All)</Option>
                <Option disabled>Filter By Category</Option>
                <Option value="mobile">Mobile</Option>
                <Option value="watch">Watch</Option>
                <Option value="wireless">Wireless</Option>
                <Option value="chair">Chair</Option>
                <Option value="sofa">Sofa</Option>
                <Option disabled>Sort By</Option>
                <Option value="asc">Ascending</Option>
                <Option value="desc">Descending</Option>
                <Option value="lowest price">Price(Lowest First)</Option>
                <Option value="highest price">Price(Highest First)</Option>
              </SelectBox>
            </FilterBox>
            <SearchFilter>
              <SearchInput onChange={handleFilterBySearch} />
              <SearchIcon />
            </SearchFilter>
          </FilteringWrapper>
        </MainContainer>
        <FilterDataSection>
          <MainContainer>
          <Loading loading={loading} error={error}>
           {productsData.length === 0 ? (
              <FilterHeading>No products are found!</FilterHeading>
            ) : (
                <ProductList data={productsData} /> 
            )}
            </Loading>
          </MainContainer>
        </FilterDataSection>
      </ShopSection>
    </PageTitle>
  );
};

export default Shop;
