import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { menuData } from '../../utils/menuData';


const ProductsList = () => {

    const navigate = useNavigate();

    return (
        <ul className="products__list">
            {
                menuData.map((item)=>(
                    <li key={item.en} className='products__item' onClick={()=> navigate(`/cotalog/${item.en}`)}>
                    {item.ru}
                </li>
                ))
            }
        </ul>
    );
};

export default ProductsList;