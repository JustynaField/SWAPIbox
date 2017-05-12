import React from 'react';
import { cleanPlanetsData } from './cleanPlanetsData';
import fetchMock from 'fetch-mock';
import {resolveAfter2Seconds, mockFetchCalls } from '../../stubs/test-helper'
import PlanetStub from '../../stubs/json-planet-stub'

describe('planet cleaner', () => {
  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched)
    }
    fetchMock.restore()
  })

  it('for each planet it converts the original object', async () => {
    // let results;
    mockFetchCalls()

    const planets = cleanPlanetsData(PlanetStub)

    await resolveAfter2Seconds()

    const planetNames = Object.keys(planets)
    let key = planetNames[0]
    const singlePlanet = planets[planetNames[0]]

    const expectedPlanet =
    {"climate": "temperate",
        "name": "Alderaan",
        "population": "2000000000",
        "residents": ["Leia Organa", "Leia Organa", "Leia Organa"],
        "terrain": "grasslands, mountains"}

    const expectedPlanetNames = ["Alderaan", "Yavin IV", "Hoth", "Dagobah", "Bespin", "Endor", "Naboo", "Coruscant", "Kamino", "Geonosis"]


    expect(planetNames).toEqual(expectedPlanetNames)
    expect(singlePlanet).toEqual(expectedPlanet)
  })
})
