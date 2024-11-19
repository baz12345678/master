import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopcontext'
import { assets } from '../assets/assets'
import Relatedproducts from '../components/relatedproducts'

const Product = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const { products, currency, addToCart } = useContext(ShopContext); // Get the products from context
  const [productData, setProductData] = useState(null); // Store the product data
  const [image, setImage] = useState(''); // Store the currently selected image
  const [size, setSize] = useState('');  // Store the selected size

  const fetchProductData = () => {
    // Find the product that matches the productId from the URL
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Set the first image as the default image
    }
  };

  useEffect(() => {
    fetchProductData(); // Fetch product data on component mount and when `productId` or `products` changes
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product details */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product image gallery */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overscroll-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full">
            {/* Map through all the images of the product */}
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                alt=''
                className="w-[25%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                // Update main image on click
              />
            ))}
          </div>

          {/* Main product image */}
          <div className="sm:w-[80%] w-full">
            <img src={image} alt="Main product image" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Product description */}
        <div className="flex-1 sm:ml-10">
          <h1 className="text-3xl font-bold mt-2">{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_dull_icon} className='w-3 5' alt="" />
            <p className='pl-2'>86</p>
          </div>
          <p className="text-xl text-gray-600 mt-5 md:w-4/5">{productData.description}</p>
          <p className="text-xl font-semibold mt-4">{currency}{productData.price}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-3'>
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

          {/* Add to Cart button */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-orange-600 '
          >
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-600 flex flex-col gap-1'>
            <p>Cash on delivery</p>
            <p>payment through card</p>
            <p>14 days easy return,exchange & refund</p>
          </div>
        </div>
      </div>

      {/* Product description and reviews */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm cursor-pointer'>Description</b>
          <p className='border px-5 py-3 text-sm cursor-pointer'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi ea dolores aliquam dolore delectus sint beatae aut, omnis architecto possimus est quibusdam distinctio doloribus. Voluptas maiores facilis asperiores numquam quas illum, commodi accusantium laborum. Architecto error aliquid quam harum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate velit mollitia consequatur aspernatur libero asperiores sunt deserunt aperiam iure tenetur, quia animi odio vero accusantium? Autem, ea saepe reprehenderit praesentium sed ullam repudiandae suscipit, similique, laborum quis rerum ut.</p>
        </div>
      </div>

      {/* Related Products Section */}
      <Relatedproducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
