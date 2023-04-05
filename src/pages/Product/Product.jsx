import axios from '../../utils/axios.js';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {HiOutlineChevronLeft} from 'react-icons/hi';
import ProductsFilter from '../../Components/ProductsFilter/ProductsFilter.jsx';
import { CustomContext } from "../../utils/Context";



const Product = ({title}) => {

    const navigate = useNavigate();
    const [product, setProducts] = useState({});
    const {id} = useParams();
    const {getAllProducts} = useContext(CustomContext);

    useEffect(()=>{
        getAllProducts()
    }, [])

    useEffect(()=>{
        axios(`http://localhost:8080/products/${id}`)
            .then(({data})=> setProducts(data))
            .catch((err)=>console.log('Ошибка при получении продукта'));
    }, []);

    if(JSON.stringify(product) === '{}'){
        return (
            <div className="container">
                <div onClick={()=> navigate(-1)} className="product__back" >
                    <span className='product__back-icon'>
                        <HiOutlineChevronLeft style={{color: '#fff'}}/>
                    </span>
                    <span className='product__back-text'>Вернуться назад</span>
                </div>
                <h2 className='product__title'>Продукт не найден!</h2>
            </div>
        )
    }
    return (
        <section className='product'>
            <div className="container">
                <div onClick={()=> navigate(-1)} className="product__back" >
                    <span className='product__back-icon'>
                        <HiOutlineChevronLeft style={{color: '#fff'}}/>
                    </span>
                    <span className='product__back-text'>Вернуться назад</span>
                </div>
                <div className="product__row">
                    <img className='product__img' src={`${product.image[0] === '.' ? '../' : ''}${product.image}`} alt={product.title} />
                    <div className='product__info'>
                        <h2 className='product__title'>{product.title}</h2>
                        <p className="product__description">{product.description}</p>
                        <p className="product__weight">
                            <span>Вес: </span>
                            <span>{product.weight}</span>
                            </p>
                        <div className="product__row product__row-basket">
                            <button className="product__btn">Корзина</button>
                            <p className="product__price">{product.price} ₽</p>
                        </div>
                        <div className="product__row product__row-nutrition">
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Белки</p>
                                <p className='product__nutrition-num'>{product.protein}</p>
                            </div>
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Жиры</p>
                                <p className='product__nutrition-num'>{product.fats}</p>
                            </div>
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Углеводы</p>
                                <p className='product__nutrition-num'>{product.carbohydrates}</p>
                            </div>
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Ккал</p>
                                <p className='product__nutrition-num'>{product.calories}</p>
                            </div>
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Ккал</p>
                                <p className='product__nutrition-num'>{product.weight}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ProductsFilter title='С этим блюдом так же берут'/>

        </section>
    );

   
};

export default Product;