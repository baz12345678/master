import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import { ShopContext } from '../context/shopcontext';
import Title from './title';
import Productitem from './productitem';

const Relatedproducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      // Filter products based on category and subCategory
      const filteredProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelated(filteredProducts.slice(0, 5));  // Show first 5 related products initially
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item, index) => (
            <Link 
              to={`/product/${item._id}`}  // Redirect to the product page with the product ID in the URL
              key={index} 
              className="cursor-pointer"
            >
              <Productitem
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </Link>
          ))
        ) : (
          <p>No related products available</p>
        )}
      </div>
    </div>
  );
};

export default Relatedproducts;
