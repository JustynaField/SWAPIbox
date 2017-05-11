const callApi = (address) => {
  return fetch(address).then(response => response.json())
}

const vehiclesCall = () => {
  let p1 = callApi('http://swapi.co/api/vehicles/?page=1')
  let p2 = callApi('http://swapi.co/api/vehicles/?page=2')
  let p3 = callApi('http://swapi.co/api/vehicles/?page=3')
  let p4 = callApi('http://swapi.co/api/vehicles/?page=4')


  return Promise.all([p1, p2, p3, p4]).then((callback) => {
    return callback
  })
}


export default vehiclesCall
