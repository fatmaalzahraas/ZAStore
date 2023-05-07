import React, { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageUi from "../../components/PageBeginngUi/PageUi";
import {
  Link,
  BuyBtn,
  CartContent,
  CartSection,
  DeleteBtn,
  Div,
  LeftContainer,
  NoItems,
  ProductImg,
  RightContainer,
  ShippingText,
  SubTotal,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  TotalPrice,
  Tr,
  BtnWrapper,
  CounterWrapper,
  CounterBtn,
  Quantity,
} from "./Cart.stye";
import { MainContainer } from "../../globalStyles/Global.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProductFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux-toolkit/cartSlice";
const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deleteProductFromCart(id));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageTitle title="Cart">
      <PageUi title="Shopping Cart" />
      <CartSection>
        <MainContainer>
          <CartContent>
            <LeftContainer>
              {cartItems.length === 0 ? (
                <NoItems>No item added to the cart</NoItems>
              ) : (
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Image</Th>
                      <Th>Title</Th>
                      <Th>Price</Th>
                      <Th>Qty</Th>
                      <Th>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {cartItems.map((item) => (
                      <Tr key={item.id}>
                        <Td>
                          <ProductImg src={item.imgUrl} alt="Product Img" />
                        </Td>
                        <Td>{item.productName}</Td>
                        <Td>${item.price}</Td>
                        <Td>
                          <CounterWrapper>
                            <CounterBtn
                              onClick={() =>
                                dispatch(incrementQuantity(item.id))
                              }
                            >
                              +
                            </CounterBtn>
                            <Quantity>{item.quantity}</Quantity>
                            <CounterBtn
                              onClick={() =>
                                dispatch(decrementQuantity(item.id))
                              }
                            >
                              -
                            </CounterBtn>
                          </CounterWrapper>
                        </Td>
                        <Td>
                          <DeleteBtn onClick={() => deleteItem(item.id)} />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              ) }
            </LeftContainer>
            <RightContainer>
              <Div>
                <SubTotal>
                  SubTotal<TotalPrice>${totalAmount}</TotalPrice>
                </SubTotal>
                <ShippingText>
                  taxes and shipping will calculate in checkout
                </ShippingText>
                <BtnWrapper>
                  <BuyBtn>
                    <Link to="/checkout">Checkout</Link>
                  </BuyBtn>
                  <BuyBtn>
                    <Link to="/shop">Continue Shopping</Link>
                  </BuyBtn>
                </BtnWrapper>
              </Div>
            </RightContainer>
          </CartContent>
        </MainContainer>
      </CartSection>
    </PageTitle>
  );
};

export default Cart;
