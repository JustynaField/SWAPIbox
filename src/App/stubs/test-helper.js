import PeopleStub from './people-stub'
import PlanetStub from './planet-stub'
import VehicleStub from './vehicle-stub'
import SpeciesStub from './indiv-species-stub'
import IndivPlanetStub from './indiv-planet-stub'
import IndivPeopleStub from './indiv-people-stub'
import fetchMock from 'fetch-mock';

// expect(fetchMock.calls().unmatched).toEqual([]);
  // [["http://swapi.co/api/people/?page=1", undefined]]
  // [[["http://swapi.co/api/species/1/"], undefined]]

export const resolveAfter2Seconds = () => {
      return new Promise (resolve => {
        setTimeout(() =>{
          resolve();
        }, 2000)
      })
    }

export const mockFetchCalls = () => {
  //people
  fetchMock.get('begin:http://swapi.co/api/people/?page', {
    status: 200,
    body: PeopleStub
  })

  fetchMock.get('begin:http://swapi.co/api/planets/?page', {
    status: 200,
    body: PlanetStub
  })

  fetchMock.get('begin:http://swapi.co/api/vehicles/?page', {
    status: 200,
    body: VehicleStub
  })

  fetchMock.get('begin:http://swapi.co/api/species/', {
    status: 200,
    body: SpeciesStub
  })

  fetchMock.get('begin:http://swapi.co/api/species/1/', {
    status: 200,
    body: SpeciesStub
  })

  fetchMock.get('begin:http://swapi.co/api/species/2/', {
    status: 200,
    body: SpeciesStub
  })

  fetchMock.get('begin:http://swapi.co/api/planets/', {
    status: 200,
    body: IndivPlanetStub
  })

  fetchMock.get('begin:http://swapi.co/api/people/', {
    status: 200,
    body: IndivPeopleStub
  })

}
