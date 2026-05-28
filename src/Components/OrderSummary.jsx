import { useSelector } from "react-redux";

export default function OrderSummary(){

        const items = useSelector(state => state.cartSlicer.items);
        const subtotal = items.reduce((acc, item) => {
        const price = (item.price ?? item.defaultPrice ?? 0) / 100;
        return acc + price * item.quantity;
    }, 0);

        const delivery = 40;
        const total = subtotal + delivery;

    return(
        <div className="w-full md:w-[45%] lg:w-[35%] bg-gray-100 rounded-xl p-6 h-fit">

          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Delivery</span>
            <span>₹ {delivery}</span>
          </div>

          <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>

          <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:opacity-90 transition">
            Checkout
          </button>

        </div>
    )

}