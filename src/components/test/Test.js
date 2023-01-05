import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { useParams, useNavigate } from "react-router-dom";
import { selectCurrenClassId } from '../class/classSlice';
import { Header } from '../header/Header';
import { selectIs_adm, selectUserId } from '../login/loginSlice';
import { NewQuestion } from './NewQuestion';
import './style.css';
import { fetchQuestion, fetchSendTest } from './testAPI';
import { questions, selectListQuestions } from './testSlice';
import { ButtonBack } from '../button/ButtonBack';
import { ButtonCreate } from '../button/ButtonCreate';
import { selectCurrentTopicName } from '../topic/topicSlice';

export function Test() {
  let { topic_id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const list_questions = useSelector(selectListQuestions)
  const is_adm = useSelector(selectIs_adm)
  const user_id = useSelector(selectUserId)
  const current_class_id = useSelector(selectCurrenClassId)
  const TopicName = useSelector(selectCurrentTopicName)
  const [showFormNewQuestion, setShowFormNewQuestion] = useState(false)
  const [checkedAnswers, setCheckedAnswers] = useState({})
  const [showModalResult, setShowModalResult] = useState(false)
  const [result, setResult] = useState({is_true: 0, all: 0})
  
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

  function handleCheckAnswer(e, id) {
    let dic = {}
    for (let key in checkedAnswers) {
      dic[key] = checkedAnswers[key]
    }
    dic[id] = e.target.checked
    setCheckedAnswers(dic)
    console.log(dic)
  }

  const renderListQuestions = list_questions.map(question => {
    return (
      <div className='m-2' key={question.question_id}>
        <div className='' >
          {question.question}
        </div>
        <div>
          {
            question.answers.map(answer => {
              return (
                <div className='m-2 row' key={answer.id}>
                  <div className='cur-p col-3' >
                    {answer.text}
                  </div>
                  <div className='col-3'>
                    <input className="form-check-input mt-0" type="checkbox" value="" checked={checkedAnswers[answer.id]} 
                      onChange={(e) => handleCheckAnswer(e, answer.id)}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
        
      </div>
    )
  })  

  const handleFetchTest = () => {
    fetchQuestion({topic_id: topic_id}, function(data) {
      dispatch(questions(data.questions))
      console.log('fetchTest', data)
    })
  }

  const handleClickBack = () => {
    console.log('current_class_id', current_class_id)
    navigate('/topic/' + current_class_id.toString(), {replace: true})
  }

  const handleClickOk = () => {
    setShowModalResult(false)
    navigate('/topic/' + current_class_id.toString(), {replace: true})
  }
  

  const handleSendTest = () => {
    fetchSendTest({user_id: user_id, answers: checkedAnswers}, function(data) {
      setResult({is_true: data.res.is_true, all: data.res.all})
      setShowModalResult(true)
      console.log('res sendTest', data)
    })
  }

  const handleClickNewQuestion = () => setShowFormNewQuestion(true)
  const handleCloseFormNewQuestion = () => setShowFormNewQuestion(false)

  const SendButton =  <div className='ms-5 btn-accept d-flex justify-content-center align-items-center p-2 m-0 rounded cur-p'
                        onClick={handleSendTest}
                      >
                        Отправить
                      </div>
  
  useEffect(() => {
    handleFetchTest()
  }, [])
  return (
    <>
      <Modal
                isOpen={showModalResult}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                style={customStyles}
            >
              <h4>Ваш результат</h4>
              <div>{`Верно ${result.is_true} из ${result.all}`}</div>
              <div className='d-flex justify-content-center mt-3'>
                <div className='btn-ok' onClick={handleClickOk}>OK</div>
              </div>
              
      </Modal>
      <Header/>
      <div className='mt-5 pt-5 ps-5'>
        <ButtonBack handleClickBack={handleClickBack}/>

        <div className='container-test'>
          <h4>{`Topic: ${TopicName}`}</h4>
          <h5 className='ff-ubuntu mt-3'>Questions</h5>
          {renderListQuestions}
        </div>

        {!is_adm ? SendButton: null}

        {is_adm && !showFormNewQuestion ? <ButtonCreate handleClick={handleClickNewQuestion}/>: null}

        {is_adm && showFormNewQuestion ? <NewQuestion handleClose={handleCloseFormNewQuestion} handleFetchTest={handleFetchTest}/>: null}

      </div>
      
    </>
  );
}
