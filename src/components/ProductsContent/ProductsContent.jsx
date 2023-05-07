import { MainContainer } from "../../globalStyles/Global.styles";
import ProductList from "./ProductList";
import { ProductsHeading, ProductsCategorySection } from "./Products.style";
import Loading from '../../customHooks/Loading';
import { useSelector } from "react-redux";
const ProductsContent = ({ filteredByCategory, title }) => {
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
};
export default ProductsContent;
