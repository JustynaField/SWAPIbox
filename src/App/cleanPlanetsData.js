export const cleanPlanetsData = (data) => {

    return data.results.map(planet => {
      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate
      }

  })
}
