import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { subjects, set_current_subject_id, selectListSubjects } from './subjectSlice';
import { fetchSubjects, fetchNewSubject } from './subjectAPI';
import { Header } from '../header/Header';
import { selectIs_adm } from '../login/loginSlice';
import { SubjectItem } from './SubjectItem';
import './style.css'
import { NewItem } from '../forms/newItem/NewItem';

export function Subject() {
  const navigate = useNavigate();
  const list_subjects = useSelector(selectListSubjects);
  const is_adm = useSelector(selectIs_adm)
  const dispatch = useDispatch();
  

  const handleClickSubject = (subject_id) => {
    dispatch(set_current_subject_id(subject_id))
    navigate('/class/' + subject_id.toString(), {replace: true})
  }
  const handleFetchSubjects = () => {
      fetchSubjects(0, function(data) {
        dispatch(subjects(data.subjects))
      })
    }
  const renderListSubjects = list_subjects.map(subject => {
    return (
      <SubjectItem key={subject.id} name={subject.name} id={subject.id} is_adm={is_adm} 
        handleClickSubject={handleClickSubject} 
        handleFetchSubjects={handleFetchSubjects}
      />
    )
  })

  

  useEffect(() => {
    handleFetchSubjects()
  }, []) 
  return (
    <>
      <Header/>
      <div className='container-subjects'>
        <h1 className='ff-ubuntu'>Subjects</h1>
        {renderListSubjects}
        <NewItem
          is_adm = {is_adm}
          item_id = {''}
          fetchNewItem = {fetchNewSubject}
          handleFetchItems = {handleFetchSubjects}
        />
      </div>
      
    </>
  );
}
