import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {

    const price = Number(
      item.price.replace(/[^\d]/g, "")
    );

    return sum + price * item.quantity;

  }, 0);

  return (

    <div className="container py-5">

      <h2 className="mb-4">
        Shopping Cart
      </h2>

      {

        cart.length === 0 ?

          <h4>Your Cart is Empty</h4>

          :

          <>

            {

              cart.map((item) => (

                <div
                  className="card p-3 mb-4"
                  key={item.id}
                >

                  <div className="row align-items-center">

                    <div className="col-md-3">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                      />

                    </div>

                    <div className="col-md-9">

                      <h3>{item.name}</h3>

                      <p>{item.description}</p>

                      <h4>{item.price}</h4>

                      <div className="d-flex align-items-center gap-3">

                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          -
                        </button>

                        <h5>
                          {item.quantity}
                        </h5>

                        <button
                          className="btn btn-success"
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </button>

                      </div>

                      <button
                        className="btn btn-outline-danger mt-3"
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))

            }

            <h2 className="text-end">

              Total : ₹{total}

            </h2>

            <button className="btn btn-success float-end">

              Checkout

            </button>

          </>

      }

    </div>

  );

}

export default Cart;