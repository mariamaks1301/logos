import React, {useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.scss';
import {FaPencilAlt} from 'react-icons/fa';
import {BsEyeFill, BsEyeSlashFill} from 'react-icons/bs';
import axios from '../../utils/axios.js';
import { CustomContext } from '../../utils/Context';

const Form = () => {

    const [status, setStatus] = useState(false);
    const [email, setEmail] = useState('');
    const [eye, setEye] = useState(false);

    const navigate = useNavigate();

    const {user, setUser} = useContext(CustomContext)

    const registerUser = (e)=>{
        e.preventDefault();

        let newUser = {
            email,
            password: e.target[0].value,
        }


        axios.post('/register', newUser)
        .then(({data})=> {
            setUser({
                token: data.accessToken,
                ...data.user
            })
            localStorage.setItem('user', JSON.stringify({   
                    token: data.accessToken,
                    ...data.user
               
            }))
            navigate('/');
        }).catch((err)=>console.log(err.message)); 
        
        
    }

    return (
        <div className='content'>
            <form className='form' onSubmit={registerUser}>
                {
                    status && <p className='form__email' onClick={()=> setStatus(false)}>{email}<FaPencilAlt/></p> 
                }
                
                <h2 className='form__title'>
                    {
                        status ? 'Придумай пароль для входа на любом устройстве' : 'Регистрация'
                    }
                    </h2>
                {
                    status &&
                    <>
                        <div className='form__password'>
                            <input className='form__field' type={eye ? 'text' : 'password'} placeholder='Придумайте пароль' />
                            <span className='form__eye' onClick={()=> setEye(prev => !prev)}>
                                {
                                    eye ? <BsEyeSlashFill/> : <BsEyeFill/>  
                                }   
                            </span>
                        </div>
                        <button className='form__btn' type='submit'>Создать аккаунт</button>
                    </> 
                }  
                {

                    !status &&    
                     <>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)}  className='form__field' type="email" placeholder='Введите Email' />
                        <div onClick={()=>setStatus(true)} type='button' className='form__btn'>Продолжить</div>
                        <Link className='form__link' to="/login">У меня есть аккаунт</Link>

                    </>  
                }

                


            </form>
            
        </div>
    );
};

export default Form;