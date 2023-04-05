import axios from '../../utils/axios.js';
import React, { useEffect, useState } from 'react';
import ProductsList from '../../Components/ProductsList/ProductsList';
import Title from '../../Components/Title/Title';

const Sales = () => {

    const [sales, setSales] = useState([]);

   useEffect(()=>{
        axios('/sales').then(({data})=>{
            setSales(data)
        }).catch((err)=>console.log(err.message))
   }, []);
        

   
    return (
        <section className='sales'>
            <ProductsList/>
            <div className="container">
                <Title title='АКЦИИ'/>

                <div className="sales__row">
                    {
                        sales.map((item)=>(
                        <div key={item.id} className='sales__card'>
                            <img className='sales__card-img' src={item.image} alt={item.title} />
                            <div className='sales__card-info'>
                                <h3 className='sales__card-title'>{item.title}</h3>
                                <p className='sales__card-desc'>{item.description}</p>
                                <p className='sales__card-date'>{item.date}</p>
                            </div>
                        </div>
                     ))
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Sales;