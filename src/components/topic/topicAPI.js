import { Url } from "../consts/vars";


export function fetchTopics(par, callback) {
  console.log('fetchTopics', par)
  fetch(Url + '/topics', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      class_id: par.class_id
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res fetchTopics ', data)
        return callback(data)
    });
}

export function fetchNewTopic(par, callback) {
  console.log('fetchNewTopic', par)
  fetch(Url + '/newtopic', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      name: par.name,
      class_id: par.item_id,
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res fetchNewTopic ', data)
        return callback(data)
    });
}


export function fetchVerifyUserTopic(par, callback) {
  console.log('verifyusertopic', par)
  fetch(Url + '/verifyusertopic', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      user_id: par.user_id,
      topic_id: par.topic_id,
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res verifyusertopic ', data)
        return callback(data)
    });
}
