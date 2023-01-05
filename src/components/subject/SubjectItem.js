import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { subjects, selectListSubjects } from './subjectSlice';
import { fetchSubjects, fetchNewSubject, fetchDeleteSubject } from './subjectAPI';
import { Header } from '../header/Header';
import { selectIs_adm } from '../login/loginSlice';
// import styles from './Counter.module.css';

export function SubjectItem(props) {
    const id = props.id
    const name = props.name
    const handleFetchSubjects = props.handleFetchSubjects
    const handleClickSubject = props.handleClickSubject
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showOptions, setShowOptions] = useState(false);

    const handleOnMouseEnter = () => {
        setShowOptions(true)
    }
    const handleOnMouseLeave = () => {
        setShowOptions(false)
    }

    const handleDeleteSubject = () => {
        fetchDeleteSubject({subject_id: id}, () => {
            handleFetchSubjects()
        })
    }
    
    return (
        
        <div className='m-2 row' key={id} 
            onMouseEnter={handleOnMouseEnter} 
            onMouseLeave={handleOnMouseLeave}
        >
            <div className='cur-p col-6 ff-ubuntu subject-item' 
                onClick={() => handleClickSubject(id)} 
            >
                {name}
            </div>
            {showOptions && props.is_adm ? (
                <div className='col-3 cur-p subject-item-del' onClick={handleDeleteSubject}>
                    Удалить
                </div>
            ): null}
        </div>
        
    );
}
