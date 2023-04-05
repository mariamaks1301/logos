import axios from '../../utils/axios.js';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';

const Login = () => {

    const {setUser} = useContext(CustomContext);
    const navigate = useNavigate();

    const loginUser = (e)=>{
        e.preventDefault();
        let newUser = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post('/login', newUser)
        .then(({data})=>{
            setUser({
                token: data.accessToken,
                ...data.user
            })

            localStorage.setItem('user', JSON.stringify({
                token: data.accessToken,
                ...data.user
            }))
            navigate('/home');
        }).catch((error)=> console.log(error.message));
        
    }
    return (
        <div className='content'>
            <form className='form' onSubmit={loginUser}>
                <h2 className='form__title'>Вход на LOGOS</h2>

                <input type="email" className='form__field' placeholder='Email' />
                <input type="password" className='form__field' placeholder='Введите пароль'/>
                <div className="form__create">
                    <Link to="/register" className="form__create-link" >Создать аккаунт</Link>
                </div>

                <button className='form__btn' type='submit'>Войти</button>
            </form>
        </div>
    );
};

export default Login;