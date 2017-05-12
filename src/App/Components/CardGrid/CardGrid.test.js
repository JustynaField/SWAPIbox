import React from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import { CardGrid } from './CardGrid'

describe('CardGrid', () => {

  it('should render a people card', () => {
    const wrapper = mount(<CardGrid dataSet={[{name:'Luke Skywalker', homeworld: 'Tatooine', species: 'Human', population: 200000}]} cardType={'people'} favorites={[]} />)

    expect(wrapper.find('.people').length).toBe(1)
  })

  it('should render a planet card', () => {
    const wrapper = mount(<CardGrid dataSet={[{name:'Dagobah', terrain: 'swamp', population: 'unknown', climate: 'murky', residents: 'A lonely world'}]} cardType={'planets'} favorites={[]} />)

    expect(wrapper.find('.planet').length).toBe(1)
  })

  it('should render a vehicle card', () => {
    const wrapper = mount(<CardGrid dataSet={[{name:'Sand Crawler', model: 'Digger Crawler', class: 'wheeled', passengers: 1}]} cardType={'vehicles'} />)

    expect(wrapper.find('.vehicle').length).toBe(1)
  })

})
