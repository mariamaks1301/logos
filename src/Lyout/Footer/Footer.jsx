import React from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowUp} from 'react-icons/io';

const Footer = () => {
    return (
        <footer className='footer'>
            <a href='#' className='footer__btn-up'>
                <IoIosArrowUp/>
            </a>
            <div className="container">
                <div className='footer__info'>
                    <div>
                        <h2 className='footer__title'>LOGOS</h2>
                            <span className='footer__right'>
                                © ООО СК «АПШЕРОН»  <br />
                                Все права защищены. 2010-2020
                            </span>
                            <p className='footer__info-text'>Пользовательское соглашение</p>
                            <p className='footer__info-text'>Карта сайта</p>
                            <p className='footer__info-text'>Политика конфиденциальности</p>
                    </div>

                        <ul className='footer__menu'>
                            <li className='footer__list-item'>
                                <Link className='footer__list-link'>О ресторане</Link>
                            </li>
                            <li className='footer__list-item'>
                                <Link to="/delivery" className='footer__list-link'>Условия доставки</Link>
                            </li>
                            <li className='footer__list-item'>
                                <Link className='footer__list-link'>Возврат товара</Link>
                            </li>
                            <li className='footer__list-item'>
                                <Link className='footer__list-link' to='/sales'>Акции</Link>
                            </li>
                            <li className='footer__list-item'>
                                <Link className='footer__list-link' to='/product/add'>Добавить продукт</Link>
                            </li>
                                           
                        </ul>

                </div>
                
            </div>
        </footer>
    );
};

export default Footer;