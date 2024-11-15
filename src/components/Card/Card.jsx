import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <Link to={product?.slug ? `/products/${product.slug}` : "/"} className="flex flex-col max-w-[370px] p-[15px] bg-[#f5f5f5] hover:ring-opacity-40 active:ring-5 active:ring-[#6247eb] hover:ring-4 active:ring-2 active:ring-opacity-90">
      <div className="flex flex-col flex-wrap p-[16px]  rounded-lg">
        <h4 className="text-[24px] font-serif font-semibold text-black">{product.title ?? "No Name"}</h4>
        <img src={product.imageUrl ?? "/path/to/default-image.jpg"} alt={product.name ?? "No name"} className="block max-h-[180px] mb-4 shadow object-cover bg-[#F5F5F5]" />
        <div className="flex flex-col gap-2 px-2 py-3 font-serif shadow-md bg-[#F5F5F5]">
          <h5 className="font-medium text-[20px] text-black">{product.name ?? "No Name"}</h5>
          <span className="block font-medium text-[10px] text-[#000000]">{product.style ?? "Uncatagorized"}</span>
          <span className="block font-medium text-[14px] text-[#000000]]">{product.color ?? "Uncatagorized"}</span>
          <span className="block font-medium text-[14px] text-[#000000]]">{product.category ?? "Uncatagorized"}</span>
          <span className="block font-medium text-[20px] text-black">{formatToIDRCurrency(product.price) ?? "Not for sale"}</span>
          <div>
            {product.stock <= 0 ? (
              <p className="text-xl font-semibold text-center text-[18px] pt-1 font-serif text-red-500">Out of Stock</p>
            ) : product.stock <= 25 && product.stock !== 0 ? (
              <>
                <p className="text-xl font-semibold font-serif text-[18px] text-center py-3 pt-1 text-red-500">Almost Sold Out</p>
                <Button type="button" className="inline-flex items-center justify-center gap-2 p-2 px-8 bg-[#DB4444] font-serif text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
                  <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                  <span>Add to cart</span>
                </Button>
              </>
            ) : (
              <Button type="button" className="inline-flex items-center justify-center gap-2 p-2 px-8 py-2 bg-[#DB4444] font-serif text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
                <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                <span>Add to cart</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.object,
};
