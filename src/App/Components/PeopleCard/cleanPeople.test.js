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
    mockFetchCalls()

    const cleanedPeopleArray = cleanPeopleData(PeopleStub).
      then((e) => {return e[0]})

    const expectedPeopleArray = []


    await resolveAfter2Seconds()


    expect(cleanedPeopleArray).to.deep.Equal(expectedPeopleArray)
  })
})
