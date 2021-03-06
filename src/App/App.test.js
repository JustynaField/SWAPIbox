import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock';
import CrawlStub from './stubs/crawl-stub'
import { cleanCrawlData } from './Components/OpeningCrawl/cleanCrawlData'
import { shallow, mount } from 'enzyme'
import {resolveAfter2Seconds, mockFetchCalls } from './stubs/test-helper'

describe('App', () => {
  const cleanCrawl = cleanCrawlData(CrawlStub)

  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched)
    }
    // expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('fetches the movie crawl', async () => {
    fetchMock.get('http://swapi.co/api/films/1/?format=json', {
      status: 200,
      body: CrawlStub
    })
    mockFetchCalls()

    const wrapper = mount(< App />)
    await resolveAfter2Seconds()

    expect(wrapper.state('openingCrawl')).toEqual(cleanCrawl);
  })

})
