import { Url } from "../consts/vars";


export function fetchQuestion(par, callback) {
  console.log('fetchQuestion', par)
  fetch(Url + '/question', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      topic_id: par.topic_id
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res fetchQuestion ', data)
        return callback(data)
    });
}

export function fetchNewQuestion(par, callback) {
  console.log('fetchQuestion', par)
  fetch(Url + '/newquestion', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      topic_id: par.topic_id,
      text: par.text,
      answers: par.answers
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res fetchNewQuestion ', data)
        return callback(data)
    });
}

export function fetchSendTest(par, callback) {
  console.log('fetchSendTest', par)
  fetch(Url + '/sendtest', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: par.user_id,
      datetime: new Date(),
      answers: par.answers
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res fetchSendTest ', data)
        return callback(data)
    });
}


