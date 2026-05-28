import { useDispatch } from "react-redux";
import { incrementItems, decrementItems } from "../Stores/CartSlice";


export default function CartCheckout({ item }) {

  const dispatch = useDispatch();

  const price = (item.price ?? item.defaultPrice ?? 0) / 100;

  return (
    <>
<div className="flex flex-col md:flex-row md:justify-between md:items-center border-b py-6 px-4 md:px-8 gap-6">

  {/* LEFT SECTION */}
  <div className="flex items-center gap-4 md:gap-6">

    <img
      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item.imageId}
      alt=""
    />

    <div>
      <p className="text-lg font-semibold">{item.name}</p>
      <p className="text-[#110202ac] font-semibold mt-1">₹ {price}</p>

      <div className="flex items-center gap-4 mt-3">

        <button
          className="w-8 h-8 border rounded-full flex justify-center items-center hover:bg-gray-100"
          onClick={() => dispatch(decrementItems(item))}
        >
          -
        </button>

        <span className="font-semibold text-lg">
          {item.quantity}
        </span>

        <button
          className="w-8 h-8 border rounded-full flex justify-center items-center hover:bg-gray-100"
          onClick={() => dispatch(incrementItems(item))}
        >
          +
        </button>

      </div>
    </div>

  </div>

  {/* RIGHT SECTION */}
  <div className="text-lg font-bold md:text-right">
    ₹ {price * item.quantity}
  </div>

</div>
    </>
  );
}