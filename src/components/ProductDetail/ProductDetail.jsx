import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import getAllProducts from "../../components/services/getAllProducts";

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const allProducts = getAllProducts();
    const product = allProducts.find((prod) => prod.slug === slug);
    setProduct(product);
  }, []);

  if (!product) {
    return (
      <>
        <h1 className="flex w-full h-full text-center items-center justify-center font-serif text-4xl text-pink-600">PRODUCT NOT FOUND.</h1>
      </>
    );
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="flex px-24 py-4 gap-[48px] items-center">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeftLong} className="mb-0 text-[40px]" />
        </Link>
        <h4 className="text-[32px] font-semibold font-serif ">{product.name ?? "No Label"}</h4>
      </div>
      <div className="flex gap-[30px] px-24">
        <div className="w-500px">
          {/* <img src={product.imageUrl ?? (product.name ?? 'No Name')} alt={product.name ?? 'No Name'} className='block spect-[138/100] max-w-[400px] object-cover'/> */}
          <img src={product.imageUrl ?? product.name ?? "No Name"} alt={product.name ?? "No Name"} className="block w-[600px] h-[400px] object-cover font-serif" />
          <div className=" flex justify-center gap-4 mt-4">
            {product.detailImages &&
              product.detailImages.map((image, index) => (
                <button key={index} onClick={() => setActiveImage(index)} className={`w-50 h-50 border-2 ${index === activeImage ? "border-red-500" : "border-gray-300"}`}>
                  <img src={image} alt={`detail-${index}`} className="block w-[200px] h-[200px]" />
                </button>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <span className="text-[40px] font-medium font-serif">{formatToIDRCurrency(product.price) ?? `Not For Sale`}</span>
          {product.stock > 0 ? (
            product.stock <= 25 ? (
              <span className="font-medium font-serif  text-yellow-500">Available, almost out of stock</span>
            ) : (
              <span className="font-medium font-serif text-green-500">Available</span>
            )
          ) : (
            <span className="font-medium font-serif text-red-500">Out of stock</span>
          )}

          <span className="text-grey-800 font-serif">{product.style ?? "Uncategorized"}</span>
          <span className="text-grey-800 font-serif">{product.color ?? "Uncategorized"}</span>
          <span className="text-grey-800 font-serif">{product.category ?? "Uncategorized"}</span>

          {product.stock > 0 ? (
            <div>
              <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 font-serif bg-[#DB4444] text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
                <FontAwesomeIcon icon={faCartShopping} className="mb-0 font-serif text-white" />
                <span className="text-white">Add to cart</span>
              </Button>
            </div>
          ) : (
            <div>
              <Button type="button" className="inline-flex items-center justify-center gap-2 p-4 font-serif bg-[#9A9A9A] text-center">
                <FontAwesomeIcon icon={faCartShopping} className="mb-0 text-white" />
                <span className="text-[#F3F3F3]">Add to cart</span>
              </Button>
            </div>
          )}

          <span className="font-medium font-serif">Description</span>
          <p className="max-w-[500px] font-serif mb-5">{product.description ?? "No description."}</p>
        </div>
      </div>
    </>
  );
}
