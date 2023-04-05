import axios from '../../utils/axios.js';
import React from 'react';
import { useEffect } from 'react';
import Card from '../../Components/Card/Card';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { menuData } from '../../utils/menuData.js';
import CategoySelect from './CategorySelect/CategorySelect.jsx';
import OrderSelect from './OrderSelect/OrderSelect.jsx';
import TitleSearch from './TitleSearch/TitleSearch.jsx';



const Cotalog = () => {

    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState('default');
    const [title, setTitle] = useState('');
    const {category} = useParams();
    

    useEffect(()=>{

        let categories = `${category !== 'all' ? 'categories=' + category + '&' : ''}`;

        const selectOrder = ()=>{
            switch (order) {
                case 'asc': {
                    return `_sort=price&_order=asc&`
                }
                case 'desc': {
                    return `_sort=price&_order=desc&`
                }
                case 'abc': {
                    return `_sort=title&_order=asc&`
                }
                case 'weight': {
                    return `_sort=weight&_order=asc&`
                }
                case 'calories': {
                    return `_sort=calories&_order=asc&`
                }
                case 'default':{
                    return ''
                }   
            }
        }
        let orders = selectOrder()

        let titleFilter = `${title.length !== 0 ? 'title_like=' + title + '&' : ''}`

        axios(`/products?${categories}${orders}${titleFilter}`)
        .then(({data})=> setProducts(data))
        .catch((err)=>console.log('данные не получены'))
    }, [category, order, title])

    return (
        <section className='cotalog'>
            <div className="container">
                <div className="cotalog__content">
                    <aside className='cotalog__aside'>
                        
                        <CategoySelect/>
                        <OrderSelect order={order} setOrder={setOrder}/>
                        <TitleSearch title={title} setTitle={setTitle}/>
                    </aside>
                    <div className="cotalog__right">
                        <div>
                            <h2 className='cotalog__crumbs'>
                                <Link className='cotalog__crumbs-link' to='/'>Главная</Link> / {
                                    // category !== 'all' ? menuData.find((item)=>item.en === category).ru : 'Все продукты'
                                }
                            </h2>
                        </div>
                        <div className="cotalog__row">
                            {
                                products.map((item)=>(
                                    <Card key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default Cotalog;