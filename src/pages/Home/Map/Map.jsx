import React from 'react';
import {BiMap} from 'react-icons/bi';
import {BiEnvelope} from 'react-icons/bi';
import {FaFacebookF} from 'react-icons/fa';
import {TbLetterB} from 'react-icons/tb';
import {BsYoutube} from 'react-icons/bs';
import {TiSocialInstagram} from 'react-icons/ti';


const Map = () => {
    return (
        <section className='map'>
            <div className="container">
                <div className="map__contacts">
                    <h2 className="map__title">КОНТАКТЫ</h2>
                    <div className="map__info">
                        <div className="map__row">
                            <BiMap style={{color: '#79B282' }}/>
                            <div className='map__info-address'>
                                <span>Наш адрес:</span> <br />
                                МО, городской округ Красногорск, село Ильинкое, <br />
                                Экспериментальная улица, 10    
                            </div>
                        </div>
                        <div className="map__row">
                            <BiEnvelope style={{color: '#79B282' }}/>
                            <div className='map__info-email'>
                                <span>Наша почта:</span> <br />
                                auto.wash@gmail.com
                            </div>
                        </div>

                    </div>
                    <div className="map__contact">
                        <div className="map__row map__contact-row">
                            <button className='map__contact-btn' type='button'>ЗАБРОНИРОВАТЬ СТОЛ</button>
                            <div className='map__contact-info'>
                                <a href='tel:+7 (917) 510-57-59' className='map__contact-title'>+7 (917) 510-57-59</a>
                                <p className='map__contact-subtitle'>Звоните или оставляйте заявку</p>
                            </div>
                        </div>

                    </div>
                    <div className="map__social">
                            <h3 className='map__social-title'>Мы в соц сетях:</h3>
                            <div className='map__social-icons'>
                                <a className='map__social-icon'>
                                    <FaFacebookF />
                                </a>
                                <a className='map__social-icon'>
                                    <TbLetterB/>
                                </a>
                                <a className='map__social-icon'>
                                    <BsYoutube/>
                                </a>
                                <a className='map__social-icon'>
                                    <TiSocialInstagram/>
                                </a>
                            </div>
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default Map;