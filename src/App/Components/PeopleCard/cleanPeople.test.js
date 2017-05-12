import React from 'react';
import ReactDOM from 'react-dom';
import { cleanPeopleData } from './cleanPeopleData';
import fetchMock from 'fetch-mock';
import {resolveAfter2Seconds, mockFetchCalls } from '../../stubs/test-helper'
import PeopleStub from '../../stubs/json-people-stub'

describe('people cleaner', () => {
  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched)
    }
    fetchMock.restore()
  })

  it('for each person it converts the original object', async () => {
    let results;
    mockFetchCalls()

    cleanPeopleData(PeopleStub)
      .then((e) =>{ results = e[0] })

      await resolveAfter2Seconds()
      // console.log(cleanedPerson)
    const expectedPerson = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'Tatooine',
      films:
       [ 'http://swapi.co/api/films/2/',
         'http://swapi.co/api/films/6/',
         'http://swapi.co/api/films/3/',
         'http://swapi.co/api/films/1/',
         'http://swapi.co/api/films/7/' ],
      species: 'Human',
      vehicles:
       [ 'http://swapi.co/api/vehicles/14/',
         'http://swapi.co/api/vehicles/30/' ],
      starships:
       [ 'http://swapi.co/api/starships/12/',
         'http://swapi.co/api/starships/22/' ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'http://swapi.co/api/people/1/',
      population: '200000' }


    expect(results).toEqual(expectedPerson)
  })
})
