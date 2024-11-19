import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/shopcontext';
import { assets } from '../assets/assets';
import Title from '../components/title';
import Productitem from '../components/productitem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    const toggleCategory = (e) => {
        const value = e.target.value;
        if (category.includes(value)) {
            setCategory(prev => prev.filter(item => item !== value));
        } else {
            setCategory(prev => [...prev, value]);
        }
    };

    const toggleSubCategory = (e) => {
        const value = e.target.value;
        if (subCategory.includes(value)) {
            setSubCategory(prev => prev.filter(item => item !== value));
        } else {
            setSubCategory(prev => [...prev, value]);
        }
    };

    // Apply Filters and Sorting
    const applyFilterAndSort = () => {
        let productsCopy = [...products];

        // Filter by category
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        // Filter by subcategory
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }

        // Filter by search
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        // Sort products based on the sortType
        switch (sortType) {
            case 'low-high':
                productsCopy = productsCopy.sort((a, b) => a.price - b.price); // Low to High
                break;
            case 'high-low':
                productsCopy = productsCopy.sort((a, b) => b.price - a.price); // High to Low
                break;
            default:
                break;
        }

        setFilterProducts(productsCopy);
    };

    // Effect for filtering when dependencies change
    useEffect(() => {
        applyFilterAndSort();
    }, [products, category, subCategory, search, showSearch, sortType]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* filter option */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-base flex items-center cursor-pointer gap-2 font-bold'>
                    Filters
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>

                {/* category filter */}
                <div className={`border border-gray-300 pl-4 py-3  mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
                        </p>
                        <p className='flex gap-2 sm:gap-1s'>
                            <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
                        </p>
                    </div>
                </div>

                {/* subcategory filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
                        </p>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className='flex-1'>
                <div className='flex justify-between text-sm mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm '>
                        <option value= "relavent">Sort by: Relavent </option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* map product */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((item, index) => (
                        <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
