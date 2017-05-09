import { cleanPeopleData } from './cleanPeopleData'


// export const cleanPlanetsData = (data) => {
//
//     const residentsArray = data.results.map(planet => {
//         fetch(planet.residents)
//         .then(response => response.json())
//         .then(data => {console.log(data)})
//       })
//
//       const allData = Promise.all(residentsArray)
//         // .then(data => {cleanPeopleData(data).name})
// console.log(allData)
//
//       return data.results.map(planet => {
//         return {name: planet.name,
//         terrain: planet.terrain,
//         population: planet.population,
//         climate: planet.climate}
//         // residents:
//         // <button>Favorite</button>
//     })
//
// }
