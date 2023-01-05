import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { topics, selectListTopics, set_current_topic_id, set_current_topic_name } from './topicSlice';
import { fetchTopics, fetchNewTopic, fetchVerifyUserTopic } from './topicAPI';
import { selectCurrentSubjectId } from '../subject/subjectSlice';
import { Header } from '../header/Header';
import { NewItem } from '../forms/newItem/NewItem';
import { selectIs_adm, selectUserId } from '../login/loginSlice';
import './style.css'
import { ButtonBack } from '../button/ButtonBack';

export function Topic() {
  let { class_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list_topics = useSelector(selectListTopics);
  const is_adm = useSelector(selectIs_adm);
  const user_id = useSelector(selectUserId)
  const current_subject_id = useSelector(selectCurrentSubjectId)


  const renderListTopics = list_topics.map(topic => {
    return (
      <div className='m-2 topic-item' key={topic.id}>
        <div className='cur-p' onClick={() => {
          // navigate('/test', {replace: true})
          handleClickTopic(topic.id, topic.name)
        }}>{topic.name}</div>
      </div>
    )
  })

  const handleClickTopic = (topic_id, topic_name) => {
    if (user_id === '') {
      navigate('/login', {replace: true})
    }
    else {
      fetchVerifyUserTopic({topic_id: topic_id, user_id: user_id}, (data) => {
        if (data.res) {
          dispatch(set_current_topic_id(topic_id))
          dispatch(set_current_topic_name(topic_name))
          navigate('/test/' + topic_id.toString(), {replace: true})
        }
        else {
          alert('Вы уже сдавали тест по данной теме')
        }
      })
    }
    
  }

  const handleFetchTopics = () => {
    fetchTopics({class_id: class_id}, function(data) {
      dispatch(topics(data.topics))
    })
  }

  const handleClickBack = () => {
    navigate('/class/' + current_subject_id.toString(), {replace: true})
  }

  useEffect(() => {
    handleFetchTopics()
  }, []) 

  return (
    <>
      <Header/>
      <div className='p-5 mt-5'>

        <ButtonBack handleClickBack={handleClickBack}/>

        <div className='container-topics'>
          <h4 className='ff-ubuntu mb-5'>Topics</h4>
          {renderListTopics}
        </div>

        <NewItem
          is_adm = {is_adm}
          item_id = {class_id}
          fetchNewItem = {fetchNewTopic}
          handleFetchItems = {handleFetchTopics}
        />
      </div>
    </>
  );
}
