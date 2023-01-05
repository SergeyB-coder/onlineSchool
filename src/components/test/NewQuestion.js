import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentTopicId } from '../topic/topicSlice';
import { fetchNewQuestion } from './testAPI';

export function NewQuestion(props) {
    const current_topic_id = useSelector(selectCurrentTopicId)
    const [questionText, setQuestionText] = useState('')
    const [listAnswers, setListAnswers] = useState([{id:1, text: 'Число 6', is_true: false}])

    function handleChangeAnswerText (e, id) {
        let arr = listAnswers.slice()
        arr[arr.findIndex(x => x.id === id)].text = e.target.value
        setListAnswers(arr)
    }
    function handleChangeAnswerIsTrue (e, id) {
        let arr = listAnswers.slice()
        arr[arr.findIndex(x => x.id === id)].is_true = e.target.checked
        setListAnswers(arr)
        console.log(arr, e.target.checked)
    }
    

    const renderListAnswers = listAnswers.map(answer => {
        return (
            <div class="input-group mb-3 d-flex align-items-center" key={answer.id}>
                <input type="text" class="form-control me-3" value={answer.text} 
                    onChange={(e) => handleChangeAnswerText(e, answer.id)}
                />
                <input class="form-check-input mt-0 me-3" type="checkbox" value="" checked={answer.is_true} 
                    onChange={(e) => handleChangeAnswerIsTrue(e, answer.id)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </div>
        )
      })

    const handleChangeQuestionText = (e) => {
        setQuestionText(e.target.value)
    }

    const handleAddAnswer = () => {
        let arr = listAnswers.slice()
        arr.push({id:arr[arr.length-1].id + 1, text: '', is_true: false})
        setListAnswers(arr)
    }

    const handleNewQuestion = () => {
        fetchNewQuestion({
            topic_id: current_topic_id,
            text: questionText,
            answers: listAnswers
        }, function(data) {
            console.log(data.res)
            props.handleClose()
            props.handleFetchTest()

        })
    }

    return (
        <div className='ps-5 new-question-container mb-5'>
            <div className='row'>
                <h3 className='col-9'>Новый вопрос</h3>
                <div className='col-3 cur-p' onClick={props.handleClose}>Отмена</div>
            </div>
            
            <input type='text' class="form-control" placeholder='Вопрос' value={questionText} onChange={handleChangeQuestionText}/>
            <label className='my-3'>Ответы:</label>
            <div>
                {renderListAnswers}
            </div>
            <div className='btn-add-answer' onClick={handleAddAnswer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            <div className='btn-add-question mt-3' onClick={handleNewQuestion}>
                Создать вопрос
            </div>            
        </div>
    );
}
