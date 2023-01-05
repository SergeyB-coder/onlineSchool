import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Header } from '../header/Header';
import { fetchLogin, fetchReg } from './loginAPI';
import { setUserId, setEMAIL, setIs_adm, setShowFormReg, selectShowFormReg } from './loginSlice';
import { Button } from '../button/Button';
import './style.css'

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showFormReg = useSelector(selectShowFormReg)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangePassword = (e) => {
      setPassword(e.target.value)
  }

  const handleChangeEmail = (e) => {
      setEmail(e.target.value)
  }

  const handleClickLogin = () => {
    fetchLogin({email: email, password: password}, function (data) {
      console.log('handleClickLogin', data)
      if (data.res) {
        dispatch(setUserId(data.user_id))
        dispatch(setEMAIL(email))
        if (data.is_adm) {
          dispatch(setIs_adm(true))
        }
        else {
          dispatch(setIs_adm(false))
        }
        navigate('/', {replace: true})
      }
    })
  }

  const handleClickReg = () => {
    dispatch(setShowFormReg(true))
    setShowFormReg(true)
  }

  const handleClickSendReg = () => {
    fetchReg({email: email}, function (data) {
      console.log('handleClickSendReg', data)
      if (data.res) {
        dispatch(setShowFormReg(false))
      }
    })
  }


  return (
    <>
      <Header/>
      <div className='d-flex justify-content-center pt-5'>

        <div className='login-form mt-5'>

          <label className="form-label">Email</label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder='email' onChange={handleChangeEmail} value={email}/>
          </div>

          

          {!showFormReg ? (
            <>
              <label className="form-label">Пароль</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='пароль' onChange={handleChangePassword} value={password}/>
              </div>
              <Button text={'Войти'} styleButton={'button-1'} handleClick={handleClickLogin}/>
              <Button text={'Зарегестрироваться'} styleButton={'button-2'} handleClick={handleClickReg}/>
            </>
            ): (
              <>
                <div>Введите Email. На него будет отправлен пароль для входа</div>
                <Button text={'Подтвердить'} styleButton={'button-1'} handleClick={handleClickSendReg}/>
              </>
            )}
          

        </div>
      </div>
    </>
  );
}
