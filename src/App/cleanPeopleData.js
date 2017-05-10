export const cleanPeopleData = (data) => {

const characterArray = []

  const finalCleanData = (rawDataArray) => {
    return rawDataArray.map((character) => {
        return {
          name: character.name,
          homeworld: character.homeworld,
          species: character.species,
          population: character.population,
        }
      })
  }

  const speciesData = (speciesData) => {
    return fetch(speciesData)
    .then(response => response.json())
    .then(data => {return data.name})
  }

  const homeworldPopulation = (speciesData) => {
    return fetch(speciesData)
    .then(response => response.json())
    .then(data => {return data.population})
  }

  const speciesHomeworld = (speciesData) => {
    return fetch(speciesData)
    .then(response => response.json())
    .then(data => {return data.name})
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



  Promise.all(populationArray).then((result) => {
    return result.map((population, i) => {
      return Object.assign(data.results[i], { population: population })
    })
  }).then(() => {console.log('success!')})
    .catch(() => {throw new Error('dern!')})

  Promise.all(speciesArray).then((result) => {
    return result.map((species, i) => {
      return Object.assign(data.results[i], { species: species })
    })
  }).then(() => {console.log('success!')})
    .catch(() => {throw new Error('dang!')})
  //
  Promise.all(homeworldArray).then((result) => {
    return result.map((homeworld, i) => {
      return characterArray.push(Object.assign(data.results[i], { homeworld: homeworld }))
    })
  }).then(() => {return finalCleanData(characterArray)})
    .catch(() => {throw new Error('dang!')})
}
