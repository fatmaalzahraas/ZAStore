import React, {useEffect} from 'react'
import WithGuard from '../../customHooks/WithGuard';
import { AllProductsContent, AllProductsSection, BtnWrapper, DeleteBtn, EditBtn, ProductImg, ReadBtn, Table, Tbody, Td, Th, Thead, Tr } from './AllProducts.style';
import {MainContainer} from '../../globalStyles/Global.styles';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageUi from '../../components/PageBeginngUi/PageUi';
import {fetchProducts, deleteProduct} from '../../redux-toolkit/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../customHooks/Loading';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
const AllProducts = () => {
  const dispatch = useDispatch();
  const {products, loading, error} = useSelector(state => state.products);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <PageTitle title='All-Products'>
      <AdminNavbar />
      <PageUi title="All-Products"/>
      <AllProductsSection>
      <MainContainer>
        <AllProductsContent>
          <Loading loading={loading} error={error}>
          <Table>
            <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </Tr>
            </Thead>
            <Tbody>
              {products?.map(product => (
                <Tr key={product.id}>
                <Td><ProductImg src={product.imgUrl} alt="Product Img" /></Td>
                <Td>{product.productName}</Td>
                <Td>{product.category}</Td>
                <Td>{product.price}</Td>
                <Td>
                <BtnWrapper>
                <DeleteBtn onClick={() => dispatch(deleteProduct(product.id))}>Delete</DeleteBtn>
                <EditBtn onClick={() => navigate(`/dashboard/edit-product/${product.id}`)}>Edit</EditBtn>
                <ReadBtn onClick={() => navigate(`/shop/${product.id}`)}>Read</ReadBtn>
                </BtnWrapper>
                </Td>
              </Tr>
              ))}
            </Tbody>
          </Table>
          </Loading>
        </AllProductsContent>
      </MainContainer>
    </AllProductsSection>
    </PageTitle>
  )
}

export default WithGuard(AllProducts);