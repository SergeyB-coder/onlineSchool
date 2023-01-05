import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { selectUserId, selectEmail, selectIs_adm, setShowFormReg } from '../login/loginSlice';
import { clearTopics } from '../topic/topicSlice';
import './style.css'

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_id = useSelector(selectUserId)
  const email = useSelector(selectEmail)
  const is_adm = useSelector(selectIs_adm)
  return (

      <div className='row header d-flex align-items-center p-0 m-0'>
        <div className='col-2 ps-5'>
          <div className='header-item' onClick={() => {
            dispatch(clearTopics())
            navigate('/', {replace: true})
          }}>
            Главная
          </div>
        </div>
        <div className='col-2 ps-5'>
          <div className='header-item' onClick={() => {
            dispatch(clearTopics())
            navigate('/subject', {replace: true})
          }}>
            Разделы
          </div>
        </div>
        {/* <div className='col-2 ps-5'>
          <div className='header-item test' onClick={() => {
            navigate('/test', {replace: true})
          }}>
            Лента
          </div>
        </div> */}
        <div className='col-7 d-flex justify-content-end me-3'>
          <div className='header-item' onClick={() => {
            dispatch(setShowFormReg(false))
            navigate('/login', {replace: true})
          }}>
            {email === '' ? 'Вход' : email}
          </div>
        </div>
      </div>
  );
}
