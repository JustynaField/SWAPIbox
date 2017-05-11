import React from 'react'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import {Button} from './Button'

describe('button tests', () => {
  it('should render', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper.find('.select-btn').length).toBe(1)
  })
})
