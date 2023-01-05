import { Url } from "../consts/vars";

export function fetchSubjects(par, callback) {
  console.log('fetchSubjects', par)
  fetch(Url + '/subjects', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res fetchSubjects ', data)
        return callback(data)
    });
}

export function fetchNewSubject(par, callback) {
  console.log('fetchNewSubject', par)
  fetch(Url + '/newsubject', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      name: par.name
    })
  })
  .then((response) => response.json())
  .then((data) => {
        return callback(data)
    });
}

export function fetchDeleteSubject(par, callback) {
  fetch(Url + '/deletesubject', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      subject_id: par.subject_id
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res deletesubject ', data)
        return callback(data)
    });
}
