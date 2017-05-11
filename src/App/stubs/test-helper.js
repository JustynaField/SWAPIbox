import PeopleStub from './people-stub'
import PlanetStub from './planet-stub'
import VehicleStub from './vehicle-stub'

export const resolveAfter2Seconds = () => {
      return new Promise (resolve => {
        setTimeout(() =>{
          resolve();
        }, 2000)
      })
    }

export const mockFetchCalls = () => {
  fetchMock.get('http://swapi.co/api/people/?page=1', {
    status: 200,
    body: PeopleStub
  })

  fetchMock.get('http://swapi.co/api/people/?page=2', {
    status: 200,
    body: PeopleStub
  })

  fetchMock.get('http://swapi.co/api/planets/?page=1', {
    status: 200,
    body: PlanetStub
  })

  fetchMock.get('http://swapi.co/api/planets/?page=2', {
    status: 200,
    body: PlanetStub
  })

  fetchMock.get('http://swapi.co/api/vehicles/?page=1', {
    status: 200,
    body: VehicleStub
  })

  fetchMock.get('http://swapi.co/api/vehicles/?page=1', {
    status: 200,
    body: VehicleStub
  })

  fetchMock.get('http://swapi.co/api/vehicles/?page=3', {
    status: 200,
    body: VehicleStub
  })

  fetchMock.get('http://swapi.co/api/vehicles/?page=4', {
    status: 200,
    body: VehicleStub
  })

  fetchMock.get('http://swapi.co/api/vehicles/?page=4', {
    status: 200,
    body: VehicleStub
  })








}
