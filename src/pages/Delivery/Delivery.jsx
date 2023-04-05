
import React, { useEffect, useState } from 'react';
import ProductsList from '../../Components/ProductsList/ProductsList.jsx';
import Title from '../../Components/Title/Title.jsx';
import axios from '../../utils/axios.js';
import {RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';



const Delivery = () => {

    const [delivery, setDelivery] = useState([]);
    const [selected, setSelected] = useState(null);

    const toggle = (idx)=>{
        if(selected === idx){
            return setSelected(null)
        }
        setSelected(idx)
    }


    useEffect(()=>{
        axios('/delivery').then(({data})=>{
            setDelivery(data)
        }).catch((err)=>console.log(err.message))

    }, [])

    return (
        <div className='delivery'>
            <ProductsList/>
            <Title title='Условия доставки'/>
            <div className="container">
                <div className="delivery__row">
                    <div className="delivery__accordions">
                        {
                            delivery.map((item, idx)=>(

                                <div key={item.id} className='delivery__accordion'>
                                    <div className='delivery__accordion-title' onClick={()=>toggle(idx)}>
                                        {item.title}
                                        <span className='delivery__accordion-icon'>
                                            {
                                                selected === idx ? <RiArrowUpSLine/> : <RiArrowDownSLine/>
                                            }
                                        </span>
                                    </div>
                                    
                                    <div className=
                                        {
                                            selected === idx ? 'delivery__accordion-answer show' : 'delivery__accordion-answer'
                                        }
                                        >{item.answer}</div>
                                    
                                    
                                </div>
                            ))
                        }

                    </div>
                    <div className='delivery__map'></div>
                </div>
                <div className="delivery__info">
                    <div className="delivery__info-row">
                        <div className="delivery__work-time">
                            <h3 className='delivery__info-title'>График работы доставки:</h3>
                            <p className='delivery__info-desc'>с 10:00-21:00</p>
                        </div>
                        <div className="delivery__caffee-time">
                            <h3 className='delivery__info-title'>График работы кафе:</h3>
                            <p className='delivery__info-desc'>с 8:00-21:00</p>
                        </div>
                    </div>
                    <h3 className='delivery__info-title'>Минимальный заказ:</h3>
                    <p className="delivery__info-desc">
                        Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
                        Доставка оператором такси от любой суммы заказа - по тарифам 
                        перевозчика.
                    </p>

                </div>

            </div>
            
        </div>
    );
};

export default Delivery;