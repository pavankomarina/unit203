import "./CartScreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

//Actions
import { getCart as cartLineItems } from "../redux/actions/cartActions";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [postalcode, setpostalcode] = useState("");

  useEffect(() => {
    dispatch(cartLineItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(cartLineItems(postalcode));
  }, [postalcode]);

  const addToCartHandler = () => {
    const product = {
      id: cartItems?.length + 1,
      title: "White Sofa",
      price: 599.99,
      quantity: 1,
      image:
        "https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_IVORY_OFF_OFF_SLOPE_5379af1f-9318-4e37-b514-962d33d1ce64.png%3Fv%3D1629231450&w=1920&q=75",
      swatchColor: "#F8F1EC",
      swatchTitle: "White"
    };
    dispatch(addToCart(product));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartSubTotal = () => {
    return cartItems ? cartItems
      .reduce((price, item) => price + item.price * 1, 0)
      .toFixed(2) : '';
  };

  const getCartTax = () => {
    return cartItems ? cartItems
      .reduce((price, item) => price + item.price * 0.13, 0)
      .toFixed(2) : '';
  };

  const getCartTotal = () => {

    let total = cartItems ? cartItems
    .reduce((price, item) => price + item.price * 1.13, 0) : 0; 

    if (total > 0){
      total = total + 15;
    }
    return (total).toFixed(2);


  };

  return (
    <>
      <div className="cartscreen">
        <div style={{color: "#172162"}}>
          <h2>Your Cart</h2>
          <div>
            <button className="add-to-cart-button" type="button" onClick={addToCartHandler}>Add</button>
          </div>

          {cartItems?.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
      </div>

      <div className="container">

          <div >
            <div>Subtotal: ${getCartSubTotal()}</div>
            <div>Shipping: $15</div>
            <div>Tax: ${getCartTax()}</div>
            <div>Total: ${getCartTotal()}</div>
          </div>
    </div>

      <div className="row">
        <label>Postal Code</label>
        <input type="text" name="name" value={postalcode} onChange={e => setpostalcode(e.target.value)} />
      </div>
    </>
  );
};

export default CartScreen;
