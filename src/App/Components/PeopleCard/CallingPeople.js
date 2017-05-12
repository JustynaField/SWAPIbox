const callApi = (address) => {
  return fetch(address).then(response => response.json())
}

const peopleCall = () => {
  let p1 = callApi('http://swapi.co/api/people/?page=1')
  // let p2 = callApi('http://swapi.co/api/people/?page=2')


  return Promise.all([p1]).then((callback) => {
    return callback
  })
  .catch((error) => {console.log('people error'), error})
}


export default peopleCall
