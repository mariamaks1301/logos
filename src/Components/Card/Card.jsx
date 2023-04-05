import React from 'react';
import { useContext } from 'react';
import {BsCartCheck} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';

const Card = ({item}) => {
    const {addBasket, basket, plusOneBasket, minusOneBasket} = useContext(CustomContext);
    const navigate = useNavigate();
    return (
        <div  className="products__card">
                            
                            <img onClick={()=>navigate(`/product/${item.id}`)} src={`${item.image}`} alt={item.title}  className="products__card-img"/>
                            <div className="products__card-info">
                                <div className="products__card-row">
                                    <h3 className="products__card-title">{item.title}</h3>
                                    <p className="products__card-weight">Вес: {item.weight} г</p>
                                </div>
                                <p className="products__card-desc">
                                    {item.description}
                                </p>

                                {
                                    basket.findIndex(product => product.id === item.id) > -1 
                                    ? <div className='products__card-buy'>
                                    <button className="products__card-buy-btn" type="button" onClick={()=>minusOneBasket(item.id)}>
                                        <span>
                                            <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="3.63636" width="3.27273" height="18" rx="1.63636" transform="rotate(-90 0 3.63636)" fill="white"/>
                                            </svg>
                                        </span>
                                    </button>
                                    <h3 className="products__card-price">{item.price} ₽</h3>
                                    <button className="products__card-buy-btn" type="button" onClick={()=>plusOneBasket(item.id)}>
                                        <span>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="7.36365" width="3.27273" height="18" rx="1.63636" fill="white"/>
                                                <rect y="10.6364" width="3.27273" height="18" rx="1.63636" transform="rotate(-90 0 10.6364)" fill="white"/>
                                            </svg>

                                        </span>
                                    </button>
                                    <div className='products__card-circle'>{
                                        basket.find((product)=>product.id === item.id).count
                                    }</div>
                                </div>
                                    : <div className="products__card-row">
                                    <h3 className="products__card-price">{item.price} ₽</h3>
                                    <button onClick={()=>addBasket(item)} className="products__card-btn header__btn" type="button">
                                        <span>В корзину</span>
                                        <BsCartCheck/>
                                    </button>
                                </div>

                                }
                                

                                

                            </div>

                            

                        </div>

        
    );
};

export default Card;