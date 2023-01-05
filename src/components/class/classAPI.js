import { Url } from "../consts/vars";


export function fetchClasses(par, callback) {
  console.log('fetchClasses', par)
  fetch(Url + '/classes', {
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
        console.log('res fetchClasses ', data)
        return callback(data)
    });
}


export function fetchNewClass(par, callback) {
  console.log('fetchNewClass', par)
  fetch(Url + '/newclass', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      name: par.name,
      subject_id: par.subject_id,
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res fetchNewClass ', data)
        return callback(data)
    });
}