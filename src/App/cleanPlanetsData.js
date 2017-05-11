export const cleanPlanetsData = (data) => {
   return data.results.reduce((accu, planet) => {
    if(!accu[planet.name]){
      accu[planet.name] = {}
      accu[planet.name].name = planet.name
      accu[planet.name].terrain = planet.terrain
      accu[planet.name].population = planet.population
      accu[planet.name].climate = planet.climate
      accu[planet.name].residents = []

      planet.residents.forEach((resident, i) => {
        return fetch(resident)
        .then(response => response.json())
        .then(data => {
          accu[planet.name].residents.push(data.name)
        return
        })
      })
    }
    return accu
  }, {})
}
