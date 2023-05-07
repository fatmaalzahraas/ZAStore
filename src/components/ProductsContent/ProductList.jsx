import ProductCard from "./ProductCard";
import { ProductListWrapper } from "./Products.style";

const ProductList = ({ data }) => {
  return (
    <ProductListWrapper>
      {data?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </ProductListWrapper>
  );
};
export default ProductList;
