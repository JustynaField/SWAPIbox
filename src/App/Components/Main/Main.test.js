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
    fetchMock.restore()
  })

  it('should render a loading msg. while it waits to load ', () => {

    const wrapper = mount(<Main />)
    expect(wrapper.find('.loading-msg').length).toBe(1)
  })

  it('renders with people cards when selectedButton is set in state ', async () => {
    mockFetchCalls()

    const wrapper = mount(<Main />)
    await resolveAfter2Seconds()

    expect(wrapper.find('.card .people').length).toBe(10)
    expect(wrapper.find('.name-field').last().text()).toEqual('Obi-Wan Kenobi')
    expect(wrapper.find('.homeworld-field').last().text()).toEqual('Homeworld: Tatooine')
    expect(wrapper.find('.species-field').last().text()).toEqual('Species: Human')
    expect(wrapper.find('.population-field').last().text()).toEqual('Population: 200000')
  })

  it('renders with a planet cards when selectedButton is set ', async () => {
    mockFetchCalls()

    const wrapper = mount(<Main />)
    wrapper.setState({selectedButton: 'planets'})
    await resolveAfter2Seconds()

    expect(wrapper.find('.card .planet').length).toBe(10)
    expect(wrapper.find('.name-field').last().text()).toBe('Geonosis')
    expect(wrapper.find('.terrain-field').last().text()).toBe('Terrain: rock, desert, mountain, barren')
    expect(wrapper.find('.population-field').last().text()).toBe('Population: 100000000000')
    expect(wrapper.find('.climate-field').last().text()).toBe('Climate: temperate, arid')
    expect(wrapper.find('.residents-field').last().text()).toBe('Residents: Leia Organa')
  })

  it('renders with a vehicle cards when selectedbutton is set ', async () => {
    mockFetchCalls()

    const wrapper = mount(<Main />)
    wrapper.setState({selectedButton: 'vehicles'})
    await resolveAfter2Seconds()

    expect(wrapper.find('.card .vehicle').length).toBe(10)
    expect(wrapper.find('.name-field').first().text()).toEqual('Sand Crawler')
    expect(wrapper.find('.model-field').first().text()).toEqual('Model: Digger Crawler')
    expect(wrapper.find('.class-field').first().text()).toEqual('Class: wheeled')
    expect(wrapper.find('.passenger-field').first().text()).toEqual('Passenger Count: 30')
  })

  it('planet button should change the state and cards rendered ', async () => {
    mockFetchCalls()
    const wrapper = mount(<Main />)

    expect(wrapper.state('selectedButton')).toEqual('people')

    const planetBtn = wrapper.find('.select-btn').last()

    planetBtn.simulate('click')
    await resolveAfter2Seconds()

    expect(wrapper.state('selectedButton')).toEqual('vehicles')
    expect(wrapper.find('.card .vehicle').length).toBe(10)
    expect(wrapper.find('.name-field').last().text()).toEqual('Sail barge')
  })

  it('should start w/ zero favorites and track favorites ', async () => {
    mockFetchCalls()
    const wrapper = mount(<Main />)

    expect(wrapper.state('counter')).toEqual(0)
    expect(wrapper.state('favorites').length).toEqual(0)

    await resolveAfter2Seconds()
    const likeBtn = wrapper.find('.like-btn').last()

    likeBtn.simulate('click')

    expect(wrapper.state('counter')).toEqual(1)
    expect(wrapper.state('favorites')[0].name).toEqual('Obi-Wan Kenobi')
  })

  it('should show favorites on click ', async () => {
    mockFetchCalls()
    const wrapper = mount(<Main />)

    await resolveAfter2Seconds()
    const likeBtn = wrapper.find('.like-btn').last()

    likeBtn.simulate('click')

    expect(wrapper.state('counter')).toEqual(1)
    expect(wrapper.state('favorites')[0].name).toEqual('Obi-Wan Kenobi')

    const showFavorites = wrapper.find('.fav-btn')

    showFavorites.simulate('click')

    expect(wrapper.find('.name-field').text()).toEqual('Obi-Wan Kenobi')
    expect(wrapper.state('showFavorites')).toEqual(true)
  })


})



//blocks for people

//blocks for planets

//blocks for vehicles
