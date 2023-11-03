import { MainContainer } from "../../globalStyles/Global.styles";
import ProductList from "./ProductList";
import { ProductsHeading, ProductsCategorySection } from "./Products.style";
import Loading from '../Loading';
import { useSelector } from "react-redux";
import { memo } from "react";
const ProductsContent = memo(({ filteredByCategory, title }) => {
  const {loading, error} = useSelector(state => state.products);
  return (
    <ProductsCategorySection>
      <MainContainer>
        <ProductsHeading>{title}</ProductsHeading>
        <Loading loading={loading} error={error}>
          <ProductList data={filteredByCategory} />
        </Loading>
      </MainContainer>
    </ProductsCategorySection>
  );
});
export default ProductsContent;
