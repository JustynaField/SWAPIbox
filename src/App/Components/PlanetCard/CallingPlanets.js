const callApi = (address) => {
  return fetch(address).then(response => response.json())
}

const planetsCall = () => {
  let p1 = callApi('http://swapi.co/api/planets/?page=1')
  let p2 = callApi('http://swapi.co/api/planets/?page=2')


  return Promise.all([p1, p2]).then((callback) => {
    return callback
  })
}


export default planetsCall
