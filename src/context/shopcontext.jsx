import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  
  const addToCart = async (itemId, size, color) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    if (!color) {
      toast.error("Select Product Color");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size].quantity += 1; // Increment quantity
      } else {
        cartData[itemId][size] = { quantity: 1, color }; // Add new size with color
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = { quantity: 1, color }; // Add new item with size and color
    }

    setCartItems(cartData);
    toast.success("Item added to cart");
  };

  
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item].quantity > 0) {
            totalCount += cartItems[items][item].quantity;
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }
    return totalCount;
  };

  
  const updateQuantity = async (itemId, size, color, quantity) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId] && cartData[itemId][size]) {
      if (quantity === 0) {
        
        delete cartData[itemId][size];
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      } else {
        cartData[itemId][size].quantity = quantity; 
        cartData[itemId][size].color = color; 
      }
    }

    setCartItems(cartData);
  };

  
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item].quantity > 0) {
            totalAmount += itemInfo.price * cartItems[items][item].quantity;
          }
        } catch (error) {
          console.error("Error calculating cart amount:", error);
        }
      }
    }
    return totalAmount;
  };

  
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;