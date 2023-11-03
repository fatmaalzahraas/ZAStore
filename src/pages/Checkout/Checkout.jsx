import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageUi from "../../components/PageBeginngUi/PageUi";
import {
  BillingTitle,
  CheckoutCart,
  CheckoutCartData,
  CheckoutContent,
  CheckoutSection,
  Form,
  FormGroup,
  Input,
  LeftContainer,
  PlaceOrderBtn,
  RightContainer,
  Span,
} from "./Checkout.style";
import { MainContainer } from "../../globalStyles/Global.styles";
import { useSelector } from "react-redux";
import WithGuard from "../../components/WithGuard";
const Checkout = () => {
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);
  return (
    <PageTitle title="Checkout">
      <PageUi title="Checkout" />
      <CheckoutSection>
        <MainContainer>
          <CheckoutContent>
            <LeftContainer>
              <BillingTitle>Billing Address</BillingTitle>
              <Form>
                <FormGroup>
                  <Input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup>
                  <Input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup>
                  <Input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="Street address" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="Postal code" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </LeftContainer>
            <RightContainer>
              <CheckoutCart>
                <CheckoutCartData>
                  Total Qty: <Span>{totalQuantity} items</Span>
                </CheckoutCartData>
                <CheckoutCartData>
                  Subtotal: <Span>${totalAmount}</Span>
                </CheckoutCartData>
                <CheckoutCartData>
                  Shipping: <Span>$0</Span>
                </CheckoutCartData>
                <CheckoutCartData>Free Shipping</CheckoutCartData>
                <CheckoutCartData>
                  Total: <Span>${totalAmount}</Span>
                </CheckoutCartData>
              </CheckoutCart>
              <PlaceOrderBtn>Place Order Now</PlaceOrderBtn>
            </RightContainer>
          </CheckoutContent>
        </MainContainer>
      </CheckoutSection>
    </PageTitle>
  );
};

export default WithGuard(Checkout);
