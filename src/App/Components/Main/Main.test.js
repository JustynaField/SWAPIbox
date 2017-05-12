import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import fetchMock from 'fetch-mock';
import { shallow, mount } from 'enzyme'
import {resolveAfter2Seconds, mockFetchCalls } from '../../stubs/test-helper'

describe('App', () => {

  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched)
    }
    // expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('renders with a people card ', async () => {
    mockFetchCalls()

    const wrapper = mount(<Main />)
    await resolveAfter2Seconds()

    expect(wrapper.find('.card').length).toBe(10)
  })

  it('renders with a people card ', async () => {
    mockFetchCalls()

    const wrapper = mount(<Main />)
    wrapper.setState({selectedButton: 'planets'})
    await resolveAfter2Seconds()

    expect(wrapper.find('.card .planet').length).toBe(10)
  })

})



//blocks for people

//blocks for planets

//blocks for vehicles
