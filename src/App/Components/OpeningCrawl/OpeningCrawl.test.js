import React from 'react'
import { shallow } from 'enzyme'
import { OpeningCrawl } from './OpeningCrawl'
import CrawlStub from '../../stubs/crawl-stub'
import { cleanCrawlData } from './cleanCrawlData'

describe('crawl', () => {
  it('renders the crawl, title, and release date', () => {
    const cleanedCrawl = cleanCrawlData(CrawlStub)

    const wrapper = shallow(<OpeningCrawl crawlInfo={cleanedCrawl} />)

    expect(wrapper.find('.crawl').text()).toEqual(cleanedCrawl.crawl)
    expect(wrapper.find('.title').first().text()).toEqual("A New Hope")
    expect(wrapper.find('.release').text()).toEqual("1977-05-25")
  })
})
