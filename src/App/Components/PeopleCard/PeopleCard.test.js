import React from 'react'
import { shallow, mount } from 'enzyme'
import { PeopleCard } from './PeopleCard'

describe('people cards', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PeopleCard name={'Blarf'} homeworld={'blarfland'} species={'bloobleblarfs'} population={2}/>)
  })

  it('should render a card', () => {
    expect(wrapper.find('.people').length).toBe(1)
  })

  it('should render w/ a name, homeworld, species, population and a buttonfield', () => {
    expect(wrapper.find('.name-field').text()).toEqual('Blarf')
    expect(wrapper.find('.homeworld-field').text()).toEqual('Homeworld: blarfland')
    expect(wrapper.find('.species-field').text()).toEqual('Species: bloobleblarfs')
    expect(wrapper.find('.population-field').text()).toEqual('Population: 2')
    expect(wrapper.find('button').length).toBe(1)

  })

})
