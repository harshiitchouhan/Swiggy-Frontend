import { useSelector } from "react-redux";
import CartCheckout from "./CartCheckout";
import OrderSummary from "./OrderSummary";
import CartHeader from "./CartHeader";

export default function Checkout() {

  const items = useSelector(state => state.cartSlicer.items);



  return (
    <>
    <CartHeader></CartHeader>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      {/* Main White Container */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row p-6 md:p-8 gap-8">

        {/* ================= LEFT SIDE ================= */}
        <div className="w-full lg:w-[65%]">

          <h2 className="text-2xl font-bold mb-6"> Checkout Cart</h2>

          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            items.map(item => (
              <CartCheckout key={item.id} item={item} />
            ))
          )}

        </div>

        {/* ================= RIGHT SIDE ================= */}
        {
            items.length>0 && <OrderSummary></OrderSummary>
        }

      </div>
    </div>
    </>
  );
}