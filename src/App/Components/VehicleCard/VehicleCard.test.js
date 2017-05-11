import React from 'react'
import { shallow, mount } from 'enzyme'
import { VehicleCard } from './VehicleCard'

describe('vehicle cards', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<VehicleCard name={'Blarf'} model={'blarfland'} classType={'bloobleblarfs'} passengers={2} />)
  })

  it('should render a card', () => {
    expect(wrapper.find('.vehicle').length).toBe(1)
  })

  it('should render w/ a name, homeworld, species, population and a buttonfield', () => {
    expect(wrapper.find('.name-field').text()).toEqual('Blarf')
    expect(wrapper.find('.model-field').text()).toEqual('Model: blarfland')
    expect(wrapper.find('.class-field').text()).toEqual('Class: bloobleblarfs')
    expect(wrapper.find('.passenger-field').text()).toEqual('Passenger Count: 2')

  })

})
