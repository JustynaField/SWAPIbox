

export const cleanPeopleData = (data) => {

  const speciesData = (speciesData) => {
    return fetch(speciesData)
    .then(response => response.json())
    .then(data => {return data.name})
    .catch((error) => {console.log('species name error', error)})
  }

  const homeworldPopulation = (speciesData) => {
    return fetch(speciesData)
    .then(response => response.json())
    .then(data => {return data.population})
    .catch((error) => {console.log('species pop error', error)})
  }

  const speciesHomeworld = (speciesData) => {
    return fetch(speciesData)
    .then(response => response.json())
    .then(data => {return data.name})
    .catch((error) => {console.log('species homeworld error', error)})
  }

  const speciesArray = data.results.map(person => {
    return speciesData(person.species)
  })

  const populationArray = data.results.map(person => {
    return homeworldPopulation(person.homeworld)
  })

  const homeworldArray = data.results.map(person => {
    return speciesHomeworld(person.homeworld)
  })



  const p1 = Promise.all(populationArray).then((result) => {
    return result.map((population, i) => {
      return Object.assign(data.results[i], { population: population })
    })
  })

  const p2 = Promise.all(speciesArray).then((result) => {
    return result.map((species, i) => {
      return Object.assign(data.results[i], { species: species })
    })
  })

  const p3 = Promise.all(homeworldArray).then((result) => {
    return result.map((homeworld, i) => {
      return Object.assign(data.results[i], { homeworld: homeworld })
    })
  })

  return Promise.all([p1, p2, p3]).then(() => {
    return data.results
  })
}
