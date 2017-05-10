const peopleScrubber = () => {
  let p1 = callApi('http://swapi.co/api/people/?page=1')
  let p2 = callApi('http://swapi.co/api/people/?page=2')
  let p3 = callApi('http://swapi.co/api/people/?page=3')
  let p4 = callApi('http://swapi.co/api/people/?page=4')
  let p5  = callApi('http://swapi.co/api/people/?page=5')
  let p6 = callApi('http://swapi.co/api/people/?page=6')
  let p7 = callApi('http://swapi.co/api/people/?page=7')
  let p8 = callApi('http://swapi.co/api/people/?page=8')
  let p9 = callApi('http://swapi.co/api/people/?page=9')

  return Promise.all([p1, p2, p3, p4, p5, p6, p7, p8, p9]).then((callback) => {
    return callback
  })
}

const callApi = (address) => {
  return fetch(address).then(response => response.json())
}

export default peopleScrubber
