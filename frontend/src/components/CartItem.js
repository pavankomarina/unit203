import "./CartItem.css";

const CartItem = ({ item, removeHandler }) => {
  return (

    <div className="container">
      <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
        <div style={{ width: "20%", marginRight: "10px" }}>
          <img src={item.image} alt={item.title} style={{ width: "100%" }} />
        </div>

        <div className="row">
          <h4 style={{ marginBottom: "5px" }}>{item.title}</h4>
          <p style={{ marginBottom: "5px" }}>Color: {item.swatchTitle}</p>
          {/* <p style={{ marginBottom: "5px" }}>swatchTitle: {item.swatchColor}</p> */}
        </div>

        <div className="row cart__items_right">
          <p style={{ marginBottom: "5px" }}>${item.price}</p>
          <a href="#" onClick={() => removeHandler(item.id)} style={{ marginBottom: "5px" }}>Remove</a>
          <p style={{ marginBottom: "5px" }}>Estimated delivery date: {item.estimatedDeliveryDate}</p>
        </div>

      
      </div>
    </div>
  );
};

export default CartItem;
