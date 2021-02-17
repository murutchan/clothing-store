import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./cartDropDown.styles.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;
