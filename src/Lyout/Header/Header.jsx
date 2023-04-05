import React, { useContext } from 'react';
import {BiMap} from 'react-icons/bi';
import {FiSearch, FiPhoneCall} from 'react-icons/fi';
import {FaRegUser} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
import BasketZero from '../../Components/BasketZero/BasketZero';
import { useState } from 'react';


const Header = () => {

    const {user, setUser, basket} = useContext(CustomContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const logOutUser = ()=>{
        setUser({
            email: ''
        })
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <h1 className="header__title">
                            <Link className='header__title-link' to="/">LOGOS</Link>
                            </h1>
                        <div className='header__search'>
                            <span className='header__search-map'>
                                <BiMap/>
                            </span>
                            <input placeholder='Введите адрес доставки' className='header__search-input' type="text" />
                            <span className='header__search-icon'>
                                <FiSearch/>
                            </span>
                        </div>
                        <div className='header__contact'>
                            <span className='header__contact-call'>
                                <FiPhoneCall/>
                            </span>
                            <div className='header__contact-row'>
                                <p className='header__contact-text'>Контакты:</p>
                                <a href="tel:+7 (917) 510-57-59" className="header__contact-link">+7 (917) 510-57-59</a>
                            </div>
                        </div>
                    </div>

                    {
                        user.email.length ? <span className='header__user' onClick={logOutUser}>
                            <FaRegUser/>
                            <span>Выйти</span>
                        </span> :
                        <Link className='header__user' to='/register'>
                            <FaRegUser/>
                            <span>Войти</span>
                        </Link>
                    }
                    
                    <button className='header__btn' type='button' onClick={()=>{
                        if(basket.length){
                            navigate('/basket')
                        }else{
                            setShow(true)
                        }
                    }}>
                        <span>Корзина</span>
                        <span className="header__btn-count">{basket.length}</span>
                    </button>
                </nav>
            </div>
            <BasketZero show={show} setShow={setShow}/>
        </header>
    );
};

export default Header;