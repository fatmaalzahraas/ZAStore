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
import Loading from '../../components/Loading';
const Shop = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const [productsData, setProductsData] = useState(products);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    const applyFilters = () => {
      let filteredProducts = products;

      if (searchValue) {
        const regx = new RegExp(searchValue, 'i');
        filteredProducts = filteredProducts.filter(product =>
          regx.test(product.productName) || regx.test(product.category)
        );
      }

      if (selectValue && selectValue !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
          product.category === selectValue
        );
      }
      

      setProductsData(filteredProducts);
    };

    applyFilters();
  }, [products, searchValue, selectValue]);

  
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageTitle title="Shop">
      <PageUi title="Products" />
      <ShopSection>
        <MainContainer>
          <FilteringWrapper>
            <FilterBox>
              <SelectBox onChange={(e) => setSelectValue(e.target.value)}>
                <Option value="all">Filter Products By(All)</Option>
                <Option disabled>Filter By Category</Option>
                <Option value="mobile">Mobile</Option>
                <Option value="watch">Watch</Option>
                <Option value="wireless">Wireless</Option>
                <Option value="chair">Chair</Option>
                <Option value="sofa">Sofa</Option>
              </SelectBox>
            </FilterBox>
            <SearchFilter>
              <SearchInput onChange={(e) => setSearchValue(e.target.value)} />
              <SearchIcon />
            </SearchFilter>
          </FilteringWrapper>
        </MainContainer>
        <FilterDataSection>
          <MainContainer>
          <Loading loading={loading} error={error}>
           {searchValue === '' && selectValue === 'all' ? <ProductList data={products}/> : (
            productsData.length === 0 ? (
              <FilterHeading>No products are found!</FilterHeading>
            ) : (
                <ProductList data={productsData} /> 
            )
           )}
            </Loading>
          </MainContainer>
        </FilterDataSection>
      </ShopSection>
    </PageTitle>
  );
};

export default Shop;
