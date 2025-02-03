import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopcontext';
import { assets } from '../assets/assets';
import Relatedproducts from '../components/relatedproducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [activeTab, setActiveTab] = useState('description'); // State to manage active tab

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>; // Loading state
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[2vw] md:px-[3vw] lg:px-[3vw]">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overscroll-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                alt=""
                className="w-[25%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="sm:w-[80%] w-full">
            <img src={image} alt="Main product image" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 sm:ml-10">
          <h1 className="text-3xl font-bold mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_dull_icon} className="w-3 5" alt="" />
            <p className="pl-2">86</p>
          </div>
          <p className="text-xl text-gray-600 mt-5 md:w-4/5">{productData.description}</p>
          <p className="text-xl font-semibold mt-4">
            {currency}
            {productData.price}
          </p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-3">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-300 ${item === size ? 'border-blue-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Color</p>
            <div className="flex gap-3">
              {productData.colors.map((item, index) => (
                <button
                  onClick={() => setColor(item)}
                  key={index}
                  style={{ backgroundColor: item }}
                  className={`w-8 h-8 rounded-full border-2 ${item === color ? 'border-blue-500' : 'border-gray-300'}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(productData._id, size, color)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-orange-600"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-600 flex flex-col gap-1">
            <p>Cash on delivery</p>
            <p>Payment through card</p>
            <p>14 days easy return, exchange & refund</p>
          </div>
        </div>
      </div>

      {/* Tabs for Description and Reviews */}
      <div className="mt-20">
        <div className="flex">
          <button
            onClick={() => setActiveTab('description')}
            className={`border px-5 py-3 text-sm cursor-pointer ${
              activeTab === 'description' ? 'bg-gray-200' : ''
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`border px-5 py-3 text-sm cursor-pointer ${
              activeTab === 'reviews' ? 'bg-gray-200' : ''
            }`}
          >
            Reviews ({productData.reviews ? productData.reviews.length : 0})
          </button>
        </div>

        {/* Content for Active Tab */}
        <div className="border px-6 py-6 text-sm text-gray-500">
          {activeTab === 'description' ? (
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi ea dolores aliquam dolore delectus
                sint beatae aut, omnis architecto possimus est quibusdam distinctio doloribus. Voluptas maiores facilis
                asperiores numquam quas illum, commodi accusantium laborum. Architecto error aliquid quam harum!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate velit mollitia consequatur
                aspernatur libero asperiores sunt deserunt aperiam iure tenetur, quia animi odio vero accusantium? Autem,
                ea saepe reprehenderit praesentium sed ullam repudiandae suscipit, similique, laborum quis rerum ut.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {productData.reviews && productData.reviews.length > 0 ? (
                productData.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <p className="font-semibold">{review.user}</p>
                    <p>Rating: {review.rating}/5</p>
                    <p>{review.comment}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <Relatedproducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;