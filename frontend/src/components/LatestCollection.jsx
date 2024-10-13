import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import { products } from '../assets/assets';
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    // console.log(products);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [products])


    return (

        <div>
            {/* Title */}
            <div className='text-center py-8 text-3xl'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>
            {/* Products Display */}
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection
