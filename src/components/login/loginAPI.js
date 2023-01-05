import { Url } from "../consts/vars";


export function fetchLogin(par, callback) {
  console.log('fetchLogin', par)
  fetch(Url + '/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      email: par.email,
      password: par.password,
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res', data)
        return callback(data)
    });
}

export function fetchReg(par, callback) {
  console.log('fetchReg', par)
  fetch(Url + '/reg', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  //   mode: 'no-cors',
    body: JSON.stringify({
      email: par.email,
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log('res', data)
        return callback(data)
    });
}
