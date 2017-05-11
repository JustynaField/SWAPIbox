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
    expect(wrapper.find('h3').text()).toEqual('Blarf')
    expect(wrapper.find('h3').text()).toEqual('Blarf')
    expect(wrapper.find('h3').text()).toEqual('Blarf')
    expect(wrapper.find('h3').text()).toEqual('Blarf')
    expect(wrapper.find('h3').text()).toEqual('Blarf')

  })

})
