import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import Girl from "@/public/imgpr.jpg";
function ShopItem() {
  return (
    <div className="flex gap-2 items-center">
      <button
        className="relative left-[90%] w-fit top-0 text-lg"
        type="button"
        title="Delete button"
      >
        <IoIosClose />
      </button>
      <div className="contents">
        <Image
          src={Girl}
                  width={100}
                  className="w-[100px]"
          alt="shopping product image"
        />
      </div>
      <div className="text-sm">
        <h3 className="font-medium"> Skull Tee</h3>
        <p className="font-medium">Quantity: 1</p>
        <p className="font-semibold"> $75.00</p>
      </div>
    </div>
  );
}

export default ShopItem;
