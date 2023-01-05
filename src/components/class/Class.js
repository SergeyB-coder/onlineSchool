import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { classes, selectListClasses, set_current_class_id } from './classSlice';
import { fetchClasses } from './classAPI';
import { Header } from '../header/Header';
import { selectIs_adm } from '../login/loginSlice';
import { fetchNewClass } from './classAPI';
import './style.css'

export function Class() {
  const is_adm = useSelector(selectIs_adm)
  let { subject_id } = useParams();
  const navigate = useNavigate();
  const list_classes = useSelector(selectListClasses);
  const dispatch = useDispatch();
  const [showFormNewClass, setShowFormNewClass] = useState(false);
  const [nameClass, setNameClass] = useState('');
  const renderListClasses = list_classes.map(class_item => {
    return (
      <div className='m-2 class-item' key={class_item.id}>
        <div className='cur-p' onClick={() => {
          handleClickClass(class_item.id)
        }}>
          {class_item.name}
        </div>
      </div>
    )
  })

  const handleClickClass = (class_id) => {
    dispatch(set_current_class_id(class_id))
    navigate('/topic/' + class_id.toString(), {replace: true})
  }

  const handleFetchClasses = () => {
    fetchClasses({subject_id: subject_id}, function(data) {
      dispatch(classes(data.classes))
    })
  }

  const handleClickBack = () => {
    navigate('/subject', {replace: true})
  }


  const handleFetchNewClass = (e) => {
    setShowFormNewClass(false)
    fetchNewClass({name: nameClass, subject_id: subject_id}, function(data) {
      // console.log(data.id)
      handleFetchClasses()
    })
  }

  const handleChangeNameClass = (e) => {
    setNameClass(e.target.value)
    // console.log('e.target.value', e.target.value)
  }
  
  const handleClickNewClass = () => {
    setShowFormNewClass(true)
  }

  useEffect(() => {
    handleFetchClasses()
  }, []) 
  return (
    <>
      <Header/>
      <div className='p-5 mt-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cur-p bi bi-arrow-left" viewBox="0 0 16 16"
          onClick={handleClickBack}
        >
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>

        <div className='container-classes'>
          <h5 className='mb-3 ff-ubuntu'>Classes</h5>
          {renderListClasses}
        </div>
        
        {is_adm && !showFormNewClass ? (
        <div className='mt-5 cur-p new_item' onClick={handleClickNewClass}>
          Создать
        </div>
      ): (<></>)}
      {showFormNewClass ? (
        <div className='p-5'>
          <input type='text' class="form-control w-25" value={nameClass} onChange={handleChangeNameClass}/>
          <div className='row w-25'>
            <div className='col-3 cur-p' onClick={handleFetchNewClass}>
              Ок
            </div>
            <div className='col-3 cur-p' onClick={() => {setShowFormNewClass(false)}}>
              Отмена
            </div>
          </div>
        </div>): null}
      </div>
    </>
  );
}
