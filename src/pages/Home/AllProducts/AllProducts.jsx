import React, {useEffect, useContext} from 'react';
import ProductsFilter from '../../../Components/ProductsFilter/ProductsFilter';
import ProductsList from '../../../Components/ProductsList/ProductsList';
import { CustomContext } from '../../../utils/Context';

const AllProducts = () => {

   
    const { getAllProducts } = useContext(CustomContext);

    useEffect(()=>{
        getAllProducts()
    }, [])

    return (
        <section className='products'>
            
                <ProductsList/>
                <ProductsFilter title='ХОЛОДНЫЕ ЗАКУСКИ'/>
                <ProductsFilter title='ГОРЯЧИЕ ЗАКУСКИ'/>
                <ProductsFilter title='Мясные блюда'/>

            
            
            
        </section>
    );
};

export default AllProducts;