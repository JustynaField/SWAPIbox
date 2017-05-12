import React from 'react'
import { shallow, mount } from 'enzyme'
import { PlanetCard } from './PlanetCard'

describe('planet cards', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PlanetCard name={'Blarf'} terrain={'blarfland'} climate={'bloobleblarfs'} population={2} residents={'bob, jane, steve'} favorites={[]}/>)
  })

  it('should render a card', () => {
    expect(wrapper.find('.planet').length).toBe(1)
  })

  it('should render w/ a name, homeworld, species, population and a buttonfield', () => {
    expect(wrapper.find('.name-field').text()).toEqual('Blarf')
    expect(wrapper.find('.terrain-field').text()).toEqual('Terrain: blarfland')
    expect(wrapper.find('.climate-field').text()).toEqual('Climate: bloobleblarfs')
    expect(wrapper.find('.population-field').text()).toEqual('Population: 2')
    expect(wrapper.find('.residents-field').text()).toEqual('Residents: bob, jane, steve')
    expect(wrapper.find('button').length).toBe(1)
  })

})
