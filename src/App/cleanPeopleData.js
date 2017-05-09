export const cleanPeopleData = (data) => {

    return data.results.map(person => {
      console.log(person.name)

      return {
        name: person.name,
        homeworld: person.homeworld,
        species: person.species,
        language: person.species,
      }

  })
}
