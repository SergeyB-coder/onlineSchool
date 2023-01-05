import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { Header } from '../header/Header';
import { BlockInfo } from './BlockInfo';
import { BlockPresent } from './BlockPresent';
import './style.css'

export function Main() {

  const navigate = useNavigate();

  useEffect(() => {
  }, []) 

  return (
    <>
      <Header/>
      <BlockPresent/>
      <BlockInfo/>
    </>
  );
}
